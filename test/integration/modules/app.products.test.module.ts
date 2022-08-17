import {ProductsModule} from "../../../src/products/modules/products.module";
import {CONFIG_VALIDATION_SCHEMA, RABBIT_URI} from "../../../src/products/config/config";
import config from "../ormconfig";
import {ProductEntity} from "../../../src/products/entity/product.entity";
import {ProductRepository} from "../../../src/products/repositories/product.repository";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";

const configWithEntity = {...config, entities: [ProductEntity, ProductRepository]};

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot(configWithEntity),
    ConfigModule.forRoot({
      validationSchema: CONFIG_VALIDATION_SCHEMA,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
      isGlobal: true
    })
  ],
})
export class AppProductsTestModule {}
