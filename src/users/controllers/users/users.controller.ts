import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { Request, Response } from "express";
import { CreateUserDto } from "src/users/dtos/CreateUser.dto";
import { AuthGuard } from "src/users/guards/auth/auth.guard";
import { ValidateCreateUserPipe } from "src/users/pipes/validate-create-user/validate-create-user.pipe";
import { UsersService } from "src/users/services/users/users.service";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post("posts")
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    console.log(userData);
    return this.userService.createUser(userData);
  }

  @Get(":id/:postId")
  getUserByIdAndPostId(@Param("id") id: string, @Param("postId") postId: string) {
    console.log(id, postId);
    return { id, postId };
  }
  @Get(":id")
  getUserByID(@Param("id", ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);
    if (!user) throw new HttpException("User Not Found", HttpStatus.BAD_REQUEST);
    return user;
  }
}
