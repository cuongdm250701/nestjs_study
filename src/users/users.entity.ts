import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true, default: null })
  avatar: string;

  @Column()
  isActive: boolean;
}
