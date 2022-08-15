import { Injectable } from '@nestjs/common'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import * as process from 'process'
import { Vehicle } from '../dto/vehicle.model'
import { VehicleResponseModel } from '../dto/vehicle.response.model'
import { VehicleSearchResponseModel } from '../dto/vehicle.search.response.model'
import { NoAccessTokenError } from '../error/authorization'
import { IS_DEBUG } from '../model/config'
import { isEmpty } from '../util/validation'

@Injectable()
export class VehicleService {

    private static AUTHORIZATION_HEADER: string = 'Authorization'
    private static TOKEN_HEADER: string = 'x-token-data'

    private accessToken: string
    private readonly client: AxiosInstance

    constructor() {
        this.client = this.createHttpClient()
    }

    public async createVehicle(token: string, body: Vehicle) {
        this.accessToken = token
        return this.getResponseData(await this.client.post<VehicleResponseModel>(
            '/v1/vehicles',
            body))
    }

    public async postSearchKeyPairPublic(token: string) {
        this.accessToken = token
        return this.getResponseData(await this.client.get<VehicleSearchResponseModel>(
            '/v1/vehicles'))
    }

    // tslint:disable-next-line:no-any
    private getResponseData<T = any>(response: AxiosResponse<T>): T {
        return response.data
    }

    private createHttpClient(): AxiosInstance {
        const config: AxiosRequestConfig = {
            baseURL: process.env.SVC_URL_SPARELABS
        }

        const instance: AxiosInstance = axios.create(config)
        instance.interceptors.request.use(this.createInterceptor(), this.createErrorHandler)

        return instance
    }

    // Is not executed with mocked axios instance
    private createInterceptor(): (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig> {
        return (request: AxiosRequestConfig): Promise<AxiosRequestConfig> | AxiosRequestConfig => {
            if (IS_DEBUG && this.accessToken === '') {
                // tslint:disable-next-line:no-unsafe-any
                request.headers[VehicleService.TOKEN_HEADER] = JSON.stringify({
                    uuid: process.env.TEST_USER_UUID,
                    client_id: '72eed7a4-a949-4305-bf1b-4d695bdfa817',
                    grant_type: 'refresh_token',
                    rnd: 'test'
                })

                return request
            }

            if (isEmpty(this.accessToken)) {
                return Promise.reject(new NoAccessTokenError())
            }

            // tslint:disable-next-line:no-unsafe-any
            request.headers[VehicleService.AUTHORIZATION_HEADER] = `${this.accessToken}`
            return request
        }
    }

    // istanbul ignore next
    private createErrorHandler(): Function {
        return (error: AxiosError): void => {
            // tslint:disable-next-line:no-console
            console.error(error)
            throw error
        }
    }
}
