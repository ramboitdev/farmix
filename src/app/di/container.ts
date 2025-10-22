import { mongoClient } from "../../infra/database/mongoClient";
import { UserRepository } from "../../data/repositories/UserRepository";
import { CreateUserUseCase } from "../../domain/usecases/CreateUserUseCase";
import { UserViewModel } from "../../presentation/viewmodels/UserViewModel";

// Note: in a real app, do not call async top-level in modules for RN startup.
export async function createContainer() {
  await mongoClient.connect(process.env.MONGO_URI || "mongodb+srv://<your-uri>", "myAppDB");
  const userRepo = new UserRepository(mongoClient);
  const createUser = new CreateUserUseCase(userRepo);
  const userVM = new UserViewModel(createUser);
  return { userVM };
}