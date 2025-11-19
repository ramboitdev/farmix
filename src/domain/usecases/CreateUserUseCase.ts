import { IUserRepository } from "../repositories/IUserRepository";
import { User } from "../entities/User";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: { name: string; email: string }) {
    const user = new User(
      crypto.randomUUID(),
      data.name,
      data.email,
      new Date()
    );
    return await this.userRepository.createUser(user);
  }
}