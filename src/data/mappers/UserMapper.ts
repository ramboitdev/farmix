import { User } from "@/domain/entities/User";

export const toEntity = (doc: any): User =>
  new User(doc._id, doc.name, doc.email, doc.createdAt);

export const toDocument = (user: User): any => ({
  _id: user.id,
  name: user.name,
  email: user.email,
  createdAt: user.createdAt,
});