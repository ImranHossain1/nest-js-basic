import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("Inside validate Create User Pipe!");
    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a number!`);
      throw new HttpException("Invalid Data type for property age, Expect a number", HttpStatus.BAD_REQUEST);
    } else {
      return { ...value, age: parseAgeToInt };
    }
  }
}
