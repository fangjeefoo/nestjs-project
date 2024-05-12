import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto, SignUpDto } from "./dto/sign-in.dto";
import { AuthGuard } from "./auth.guard";
import { RolesGuard } from "../users/roles.guard";
import { Role } from "../users/types/users.interface";
import { Roles } from "../users/decorators/roles.decorators";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post("sign-up")
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto.username, signUpDto.password);
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Request() req: any) {
    return req.user;
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Get("users")
  @Roles(Role.Admin)
  getAllUsers() {
    return this.authService.getAllUsers();
  }
}
