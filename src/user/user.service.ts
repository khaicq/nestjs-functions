import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserRepository } from "../../libs/repositories/user.repository";
import { CompanyService } from "../company/company.service";

@Injectable()
export class UserService {
  constructor(
    private userRepo: UserRepository,
    private companyService: CompanyService
  ) {}
  create(createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  async findAll() {
    return {
      user: await this.userRepo.find(),
      company: await this.companyService.find(),
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
