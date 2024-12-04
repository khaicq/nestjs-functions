import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { User } from "./entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
// import { CompanyService } from "../company/company.service";
import { CompanyModule } from "../company/company.module";

@Module({
  imports: [TypeOrmModule.forFeature([User]), CompanyModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
