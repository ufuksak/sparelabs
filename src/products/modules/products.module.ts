import { Module } from '@nestjs/common'
import { ProductsService } from '../services/products.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductEntity } from '../entity/product.entity'
import { ProductRepository } from '../repositories/product.repository'

@Module({
    imports: [TypeOrmModule.forFeature([ProductEntity, ProductRepository])],
    providers: [ProductsService]
})
export class ProductsModule {
}
