import { Controller, Get, Param } from '@nestjs/common'; // Importa Param si lo vas a usar
import { AccountsService } from './accounts.service';

@Controller('accounts') // El prefijo para todas las rutas de este controlador será '/accounts'
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get() // Ruta: GET /accounts
  async getAllAccounts() {
    return this.accountsService.findAllAccounts();
  }

  @Get(':accountId') // Ruta: GET /accounts/:accountId
  async getAccountById(@Param('accountId') accountId: number) {
    return this.accountsService.findAccountById(accountId);
  }

  @Get('by-userid/:userid') // Ruta: GET /accounts/by-userid/:userid
  async getAccountByUserId(@Param('userid') userid: string) {
    return this.accountsService.findAccountByUserId(userid);
  }
}