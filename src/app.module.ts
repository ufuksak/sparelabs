import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { configOptions } from './products/config/config.options'
import ormOptions from './products/config/orm.options'
import { VehicleModule } from './products/modules/vehicle.module'

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: ormOptions,
        }),
        ConfigModule.forRoot(configOptions),
        VehicleModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
