import { Injectable } from "@nestjs/common";
import { createUserType } from "src/utils/types";

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: "Imran",
      email: "imranhossain1402@gmail.com",
    },
    {
      username: "helal",
      email: "helalhossain1402@gmail.com",
    },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userData: createUserType) {
    this.fakeUsers.push(userData);
    return this.fakeUsers;
  }

  fetchUserById(id: number) {
    return { id, username: "Imran", email: "imran@gmail.com" };
  }
}
