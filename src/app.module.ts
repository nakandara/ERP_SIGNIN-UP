import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './modules/user/entities/modules/user.entity';
import { UserModule } from './modules/user/modules/user.module'; // Corrected import path
import { AuthModule } from './modules/auth/modules/auth.module'; // Corrected import path
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'ESD',
    entities: [User],
    synchronize: true
  }), UserModule, AuthModule], // Updated to use corrected import paths
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
