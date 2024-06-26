import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()

  app.setGlobalPrefix('api')

  const config = new DocumentBuilder()
    .setTitle('Purrweb')
    .setDescription('Документация rest api')
    .setVersion('1.0.0')
    .addTag('Еламан Байгуанышев')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(3000);
}
bootstrap();
