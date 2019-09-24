import { Controller, Get } from '@nestjs/common';

@Controller('users')
class UserController {

  @Get('/hello')
  public helloWorld(): string {
    return 'hello hAo';
  }

}

export default UserController;
