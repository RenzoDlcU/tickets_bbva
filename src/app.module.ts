import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SedesModule } from './sedes/sedes.module';

@Module({
  imports: [SedesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
