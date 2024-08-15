import { Entity, PrimaryKey, Property } from '@mikro-orm/sqlite';

@Entity()
export class User {

   @PrimaryKey()
   id!: number;

   @Property()
   fullName!: string;

   @Property()
   email!: string;

   @Property()
   password!: string;

   @Property({ type: 'text' })
   bio = '';

}