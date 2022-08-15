import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { useContainer } from 'class-validator'
import { AppModule } from './app.module'
import { JsonApiExceptionTransformer } from './products/commons/transformer/jsonapi-exception.transformer'
import { JsonApiTransformer } from './products/commons/transformer/jsonapi.transformer'
import { S3ConfigProvider } from './products/config/s3.config.provider'
import { validationPipeOptions } from './products/config/validation-pipe.options'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    useContainer(app.select(AppModule), {fallbackOnErrors: true})
    app.useGlobalPipes(new ValidationPipe(validationPipeOptions))
    app.useGlobalFilters(new JsonApiExceptionTransformer())
    app.useGlobalInterceptors(new JsonApiTransformer())
    await new S3ConfigProvider().createBucket()
    const configService = app.get(ConfigService)

    const options = new DocumentBuilder()
        .setTitle('Core Status')
        .setDescription('Core Status API')
        .setVersion('1.0.0')
        .build()

    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('api', app, document)

    await app.listen(configService.get('CORE_STATUS_PORT'))
}

bootstrap()
