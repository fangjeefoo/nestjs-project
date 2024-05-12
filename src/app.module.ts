import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UsersService } from "./users/users.service";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [AuthModule, UsersModule],
  providers: [UsersService],
})
export class AppModule {}
