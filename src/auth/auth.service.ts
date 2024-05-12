import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { UserExistException } from "../exception/UserExistException";
import { User } from "../users/types/users.interface";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user?.userId, username: user?.username, roles: user?.roles };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      throw new UserExistException();
    }
    const result = await this.usersService.addUser(username, password);
    return {
      message: result ? "Successful" : "Error",
    };
  }

  async getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }
}
