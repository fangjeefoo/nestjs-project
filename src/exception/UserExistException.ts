import { HttpException, HttpStatus } from "@nestjs/common";

export class UserExistException extends HttpException {
  constructor() {
    super("Bad Request", HttpStatus.BAD_REQUEST);
  }
}
