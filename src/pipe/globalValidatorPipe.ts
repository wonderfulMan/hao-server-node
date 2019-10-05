import { ArgumentMetadata, PipeTransform, Injectable } from "@nestjs/common";

@Injectable()
class UserRequestPipe implements PipeTransform {
  async transform(value, meta: ArgumentMetadata) {
    console.log(value);
    console.log(meta);
    return value;
  }
}

export default UserRequestPipe;
