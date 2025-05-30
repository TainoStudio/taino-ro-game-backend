import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('login') // 'login' es el nombre real de la tabla en tu DB de rAthena
export class Login {
  @PrimaryColumn({ name: 'account_id', type: 'int' })
  account_id: number;

  @Column({ name: 'userid', type: 'varchar', length: 23 })
  userid: string;

  @Column({ name: 'user_pass', type: 'varchar', length: 32 })
  user_pass: string; // La contraseña (probablemente en MD5)

  @Column({ name: 'sex', type: 'char', length: 1 })
  sex: string;

  @Column({ name: 'email', type: 'varchar', length: 39 })
  email: string;

  @Column({ name: 'level', type: 'int' })
  level: number; // Nivel de la cuenta (GM level)

  // Puedes añadir más columnas de la tabla 'login' si las necesitas.
  // Asegúrate de que el 'name' de la columna coincida exactamente con el nombre de la columna en la base de datos.
}