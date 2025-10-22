import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";
import { MongoDataSource } from "../datasources/MongoDataSource";

export class UserRepository implements IUserRepository {
  constructor(private mongo: MongoDataSource) {}

  async getUserById(id: string): Promise<User | null> {
    const doc = await this.mongo.users.findOne({ _id: id });
    return doc ? new User(doc._id, doc.name, doc.email, doc.createdAt) : null;
  }

  async createUser(user: User): Promise<User> {
    await this.mongo.users.insertOne({
      _id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    });
    return user;
  }

  async listUsers(): Promise<User[]> {
    const docs = await this.mongo.users.find({}).toArray();
    return docs.map((doc: any) => new User(doc._id, doc.name, doc.email, doc.createdAt));
  }
}