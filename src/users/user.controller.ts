import { Body, Controller, Get, HttpException, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./user.service";
import { createUserDto } from "./dto/User.dto";
import mongoose from "mongoose";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: createUserDto) {
    return this.userService.createUser(createUserDto);
  }
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  @Get(":id")
  async getUserById(@Param("id") id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException("Invalid user id", 404);
    const findUser = await this.userService.getUserById(id);
    if (!findUser) throw new HttpException("User not found", 404);
    return findUser;
  }
}
