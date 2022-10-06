import config  from "../index";
import mysql from "mysql2"
import clc from "cli-color";
import { CustomError } from "../../types/customError.type";
     

export class Database {
  static pool = mysql.createPool({
    host: config.database.host_dev, // address of the server
    port: Number(config.database.port) || undefined,
    user: config.database.user,
    password: config.database.password,
    database: config.database.name,
    connectionLimit: 10
  });

  static checkConnection = this.pool.query(
    'SELECT 1',
    (err) => {
      if (err) {
        console.error(err)
        throw new CustomError(500, "Unable to connect to database");
      } 

      console.log(clc.bgYellowBright(`Server in conected to the database ${config.database.name} on the port ${config.server.port}`));
    }
  );
}