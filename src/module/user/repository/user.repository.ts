import { EntityRepository, InsertResult, Repository } from 'typeorm';
import UserEntity from '@module/user/entity/user.entity';

@EntityRepository(UserEntity)
class UserRepository extends Repository<UserEntity> {
  public async queryEmail(email: string): Promise<UserEntity | undefined> {
    return await this
      .createQueryBuilder('User')
      .where({ email })
      .getOne();
  }

  public async queryPhone(phone: string): Promise<UserEntity | undefined> {
    return await this
      .createQueryBuilder('User')
      .where({ phone })
      .getOne();
  }

  public async insertUserByPhone(phone: string, password: string): Promise<InsertResult> {
    return await this
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values({
        phone,
        password,
      })
      .execute();
  }

  public async insertUserByEmail(email: string, password: string): Promise<InsertResult> {
    return await this
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values({
        email,
        password,
      })
      .execute();
  }
}

export default UserRepository;
