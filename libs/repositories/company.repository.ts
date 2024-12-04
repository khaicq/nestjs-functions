import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Company } from "../entities/company.entity";
import { Repository } from "typeorm";

@Injectable()
export class CompanyRepository {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>
  ) {}

  find() {
    return this.companyRepository.find();
  }
}
