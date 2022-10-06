import { Database }  from "../config/database";


export class DataBaseLoader {
  public static openConnection = async () => {
    Database.checkConnection;
  }
}