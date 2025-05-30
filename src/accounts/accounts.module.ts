import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa TypeOrmModule
import { Login } from '../rAthenaEntities/Login.entity'; // Importa tu entidad Login

@Module({
  imports: [TypeOrmModule.forFeature([Login])], // Importante: Asocia la entidad al módulo
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule {}