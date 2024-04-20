import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './app.entity';

@Module({
  imports: [HealthModule,MongooseModule.forRoot('mongodb://localhost/healthCheck'),MongooseModule.forFeature([{name:Cat.name,schema:CatSchema}])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
