import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/user.module";

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/nest_mongo"), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
