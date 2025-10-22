import { MongoDataSource } from "../../data/datasources/MongoDataSource";
import { CONFIG } from "../../core/constants/config";

export const mongoClient = new MongoDataSource();

// Expose a simple connect helper (call from app startup)
export async function initMongo() {
  await mongoClient.connect(CONFIG.MONGO_URI, CONFIG.DB_NAME);
}