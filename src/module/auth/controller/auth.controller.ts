import { Controller, Post } from '@nestjs/common';

@Controller('/auth')
class AuthController {

  @Post('/token')
  getToken() {

  }
}
