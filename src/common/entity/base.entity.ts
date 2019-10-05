import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

class BaseEntity {

  @Exclude()
  @CreateDateColumn({
    comment: '创建时间',
  })
  creatAt: Date;

  @Exclude()
  @Column({
    type: 'varchar',
    comment: '是否软删除',
    default: '0',
  })
  isDelete: string;

  @Exclude()
  @UpdateDateColumn({
    comment: '更新时间',
  })
  updateAt: Date;

}

export default BaseEntity;
