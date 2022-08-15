import { Body, Controller, Get, Post, Request } from '@nestjs/common'
import { Exposed } from 'micro-kit-atlas/routing'
import { Vehicle } from '../dto/vehicle.model'
import { VehicleResponseModel } from '../dto/vehicle.response.model'
import { VehicleSearchResponseModel } from '../dto/vehicle.search.response.model'
import { VehicleService } from '../services/vehicle'

@Controller('/api/v1/sparelabs/')
export class VehicleController {

    constructor(private service: VehicleService) {
    }

    @Post('new/vehicle')
    async createVehicle(
        @Request() req,
        @Body() body: Vehicle
    ): Promise<VehicleResponseModel> {
        return this.service.createVehicle(req.headers.authorization, body)
    }

    @Exposed.Rest.search({
        description: 'Post request and get a list of vehicles',
        response: VehicleResponseModel,
        responseDescription: 'Requested vehicle data',
    })
    @Get('search/vehicle')
    async listVehicles(@Request() req): Promise<VehicleSearchResponseModel> {
        return this.service.postSearchKeyPairPublic(req.headers.authorization)
    }
}
