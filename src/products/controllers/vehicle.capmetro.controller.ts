import { Body, Controller, Post, Request } from '@nestjs/common'
import { Exposed } from 'micro-kit-atlas/routing'
import { GridModel } from '../dto/grid'
import { GridResponseModel } from '../dto/grid.response.model'
import { VehicleResponseModel } from '../dto/vehicle.response.model'
import { VehicleCapMetroService } from '../services/vehicle.capmetro'

@Controller('/api/v1/capmetro/')
export class VehicleCapMetroController {

    constructor(private service: VehicleCapMetroService) {
    }

    @Exposed.Rest.search({
        description: 'Post request and get a list of vehicles',
        response: VehicleResponseModel,
        responseDescription: 'Requested vehicle data',
    })
    @Post('search/vehicle')
    async listVehicles(@Request() req, @Body() body: GridModel): Promise<GridResponseModel> {
        return this.service.postListVehicles(req.headers.username, req.headers.password, body)
    }
}
