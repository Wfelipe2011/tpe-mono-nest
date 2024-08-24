import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { InfraModule } from '@app/infra/infra.module';

@Module({
  imports: [InfraModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class AppModule {}
