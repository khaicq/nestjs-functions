import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Company } from "../entities/company.entity";
import { DataSource, Repository } from "typeorm";
import { BaseRepository } from "./base.repository";

@Injectable()
export class CompanyRepository extends BaseRepository<Company> {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
    dataSource: DataSource
  ) {
    super(dataSource, Company);
  }

  hello() {
    console.log("company.repository");
    return this.companyRepository.find();
  }
}
