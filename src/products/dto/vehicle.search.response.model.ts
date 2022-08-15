import { Vehicle } from './vehicle.model'
import { VehicleResponseModel } from './vehicle.response.model'

export class VehicleSearchResponseModel extends Vehicle {
    limit: number
    skip: number
    total: number
    data: VehicleResponseModel[]
}
