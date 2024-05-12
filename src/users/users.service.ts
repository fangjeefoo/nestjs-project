import { Injectable } from "@nestjs/common";
import { Role, User } from "./types/users.interface";
// import path from 'path';
// import fs from 'fs';
//
// function writeFiles(content: string) {
//   const dir = path.resolve(process.cwd(), 'data/data.txt');
//   fs.writeFile(dir, content, { flag: 'w+' }, (err) => {
//     if (err) {
//       throw `Failed to write`;
//     }
//   });
// }
//
// function readFiles() {
//   let output: User[] = [];
//   const dir = path.resolve(process.cwd(), 'data/data.txt');
//   fs.readFile(dir, (err, data) => {
//     if (err) {
//       throw `Failed to read`;
//     }
//     output = JSON.parse(data.toString());
//   });
//   return output;
// }

@Injectable()
export class UsersService {
  // private users: User[] = [];
  private readonly users = [
    {
      userId: 1,
      username: "john",
      password: "john",
      roles: [Role.Admin],
    },
    {
      userId: 2,
      username: "chris",
      password: "chris",
      roles: [Role.User],
    },
  ];
  // constructor() {
  //   this.users = readFiles();
  // }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async addUser(username: string, password: string): Promise<boolean> {
    this.users.push({
      userId: this.users.length + 1,
      username,
      password,
      roles: [Role.User],
    });
    // writeFiles(JSON.stringify(this.users));
    return true;
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
