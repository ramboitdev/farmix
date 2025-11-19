import { MongoClient, Db, Collection } from "mongodb";

export class MongoDataSource {
  private db!: Db;

  async connect(uri: string, dbName: string) {
    const client = new MongoClient(uri);
    await client.connect();
    this.db = client.db(dbName);
  }

  get users(): Collection {
    return this.db.collection("users");
  }
}