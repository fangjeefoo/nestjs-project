import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { RolesGuard } from "./roles.guard";

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
