import { BehaviorSubject } from "rxjs";
import { CreateUserUseCase } from "@/domain/usecases/CreateUserUseCase";
import { User } from "@/domain/entities/User";

export class UserViewModel {
  users$ = new BehaviorSubject<User[]>([]);
  loading$ = new BehaviorSubject(false);

  constructor(private createUserUseCase: CreateUserUseCase) {}

  async addUser(name: string, email: string) {
    this.loading$.next(true);
    try {
      const user = await this.createUserUseCase.execute({ name, email });
      this.users$.next([...this.users$.value, user]);
    } finally {
      this.loading$.next(false);
    }
  }
}