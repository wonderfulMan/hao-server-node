import { Column, Entity, Generated, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as bcrypt from 'bcryptJs';

import BaseEntity from '@common/entity/base.entity';
import { GENDER_VALUE } from '@module/user/enum';
import { Exclude } from 'class-transformer';

@Entity({ name: 'user' })
@Unique(['email', 'phone', 'uuid'])
class UserEntity extends BaseEntity {

  @Exclude()
  @PrimaryGeneratedColumn({
    type: 'int',
    comment: '主键',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    comment: '昵称',
    default: '',
  })
  nickName: string;

  @Column({
    type: 'varchar',
    length: 100,
    comment: '真实姓名',
    default: '',
  })
  realName: string;

  @Exclude()
  @Column({
    type: 'varchar',
    length: 100,
    comment: '密码',
    transformer: {
      to(value: string): string {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(value, salt);
      },
      from(value: string): string {
        return value;
      },
    },
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 20,
    comment: '手机号',
    default: '',
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 100,
    comment: '邮箱',
    default: '',
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 10,
    comment: '年龄',
    default: '',
  })
  age: string;

  @Column({
    type: 'enum',
    default: GENDER_VALUE.Other,
    enum: [GENDER_VALUE.Male, GENDER_VALUE.Female, GENDER_VALUE.Other],
  })
  gender: GENDER_VALUE;

  @Exclude()
  @Column({
    type: 'varchar',
  })
  @Generated('uuid')
  uuid: string;
}

export default UserEntity;
