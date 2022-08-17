import { Injectable } from '@nestjs/common'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import * as process from 'process'
import { GridModel } from '../dto/grid'
import { GridResponseModel } from '../dto/grid.response.model'

@Injectable()
export class VehicleCapMetroService {

    private readonly client: AxiosInstance

    constructor() {
        this.client = this.createHttpClient()
    }

    public async postListVehicles(username: string, password: string, gridModel: GridModel) {
        let gridResponseModel = this.getResponseData(await this.client.post<GridResponseModel>(
            '',
            gridModel, {
                headers: {
                    'accept': 'application/json',
                    'tenant': 'CAPMETRO_TRN',
                    'organization': 'CAPMETRO',
                    'Content-Type': 'application/json'
                },
                auth: {
                    username: username,
                    password: password
                }
            })) as GridResponseModel
        return gridResponseModel
    }

    // tslint:disable-next-line:no-any
    private getResponseData<T = any>(response: AxiosResponse<T>): T {
        return response.data
    }

    private createHttpClient(): AxiosInstance {
        const config: AxiosRequestConfig = {
            baseURL: process.env.SVC_URL_CAPMETRO
        }

        const instance: AxiosInstance = axios.create(config)
        instance.interceptors.request.use(this.createInterceptor(), this.createErrorHandler)

        return instance
    }

    // Is not executed with mocked axios instance
    private createInterceptor(): (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig> {
        return (request: AxiosRequestConfig): Promise<AxiosRequestConfig> | AxiosRequestConfig => {
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
