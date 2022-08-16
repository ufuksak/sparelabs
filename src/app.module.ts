import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { configOptions } from './products/config/config.options'
import ormOptions from './products/config/orm.options'
import { ProductsModule } from './products/modules/products.module'
import { VehicleModule } from './products/modules/vehicle.module'

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: ormOptions,
        }),
        ConfigModule.forRoot(configOptions),
        VehicleModule,
        ProductsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
