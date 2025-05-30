import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from '../rAthenaEntities/Login.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Login)
    private loginRepository: Repository<Login>,
  ) {}

  // Método de ejemplo: Obtener todas las cuentas (puede devolver un array vacío, pero no null)
  async findAllAccounts(): Promise<Login[]> {
    return this.loginRepository.find();
  }

  // Método de ejemplo: Obtener una cuenta por ID
  async findAccountById(accountId: number): Promise<Login | null> { // <-- ¡CAMBIO AQUÍ!
    return this.loginRepository.findOne({ where: { account_id: accountId } });
  }

  // Método de ejemplo: Encontrar por nombre de usuario (userid)
  async findAccountByUserId(userid: string): Promise<Login | null> { // <-- ¡CAMBIO AQUÍ!
    return this.loginRepository.findOne({ where: { userid: userid } });
  }

  // Puedes añadir más métodos aquí, como validar credenciales, etc.
}