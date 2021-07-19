import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import {v4 as uuid} from "uuid"

@Entity("Users")
class Users {

  @PrimaryColumn()
  id:string

  @Column()
  name:string

  @Column({
    nullable: true
  })
  lastname:string

  @Column({
    unique: true,
    length: "100"
  })
  nickname:string

  @Column({
    nullable: true
  })
  address:string

  @Column()
  bio: string

  @CreateDateColumn()
  createdAt:Date

  @UpdateDateColumn()
  updatedAt: Date

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}

export {Users}