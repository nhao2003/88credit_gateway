import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ArgumentsHost, Catch, ValidationPipe } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception['status'] || 500;
    const message = exception.message || 'Internal server error';
    const error = exception.error;
    response.status(status).json({
      statusCode: status,
      message,
      error,
    });
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
