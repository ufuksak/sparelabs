import { Module } from '@nestjs/common'
import { VehicleController } from '../controllers/vehicle.controller'
import { VehicleService } from '../services/vehicle'

@Module({
    imports: [],
    controllers: [VehicleController],
    providers: [VehicleService],
    exports: [VehicleService],
})
export class VehicleModule {
}
