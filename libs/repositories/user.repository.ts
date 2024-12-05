import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { DataSource, Repository } from "typeorm";
import { BaseRepository } from "./base.repository";

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    dataSource: DataSource
  ) {
    super(dataSource, User);
  }

  async hello() {
    console.log("user.repository");
    return this.userRepository.find();
  }
}
