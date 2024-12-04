import { Injectable } from "@nestjs/common";
import { CompanyRepository } from "../../libs/repositories/company.repository";

@Injectable()
export class CompanyService {
  constructor(private companyRepo: CompanyRepository) {}

  find() {
    return this.companyRepo.find();
  }
}
