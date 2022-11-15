import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST') || 'localhost',
        port: parseInt(configService.get('DB_PORT')) || 3306,
        username: configService.get('DB_USERNAME') || 'root',
        password: configService.get('DB_PASSWORD') || '',
        database: configService.get('DB_NAME') || 'test',
        autoLoadEntities: true,
        synchronize: configService.get('NODE_ENV') !== 'production',
      }),
      inject: [ConfigService],
    }),
    ProductsModule,
  ],
})
export class AppModule {}
