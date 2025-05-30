import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // <-- ¡IMPORTANTE! Agrega esta línea
import { Login } from './rAthenaEntities/Login.entity'; // <-- ¡ESTA LÍNEA ES CLAVE Y PROBABLEMENTE FALTA O ESTÁ MAL!
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // Siempre 'localhost' para tu DB local
      port: 3306,      // Puerto por defecto de MySQL
      username: 'tainoro_db_admin', // ¡ESTE ES EL USUARIO QUE CREASTE!
      password: 'Thestar0.23@', // ¡AQUÍ VA LA CONTRASEÑA EXACTA QUE FUNCIONÓ EN HEIDISQL!
      database: 'ragnarok', // ¡Asegúrate de que este sea el nombre correcto de tu DB principal de rAthena!
      entities: [Login], // Aquí irán tus entidades (modelos de datos) de rAthena
      synchronize: false, // ¡IMPORTANTE! NUNCA uses `true` con una DB existente
      logging: true, // Útil para depurar: TypeORM mostrará las consultas SQL
    }),
    AccountsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}