import { Module } from "@nestjs/common";
import { Company } from "./entities/company.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CompanyService } from "./company.service";
import { CompanyRepository } from "./company.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [],
  providers: [CompanyService, CompanyRepository],
  exports: [CompanyService, TypeOrmModule],
})
export class CompanyModule {}
