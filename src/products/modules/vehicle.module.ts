import { Module } from '@nestjs/common'
import { VehicleCapMetroController } from '../controllers/vehicle.capmetro.controller'
import { VehicleController } from '../controllers/vehicle.controller'
import { VehicleService } from '../services/vehicle'
import { VehicleCapMetroService } from '../services/vehicle.capmetro'

@Module({
    imports: [],
    controllers: [VehicleController, VehicleCapMetroController],
    providers: [VehicleService, VehicleCapMetroService],
    exports: [VehicleService, VehicleCapMetroService],
})
export class VehicleModule {
}
