import { DataSource, EntityTarget, ObjectLiteral, Repository } from "typeorm";
// import { Injectable } from "@nestjs/common";

// @Injectable()
export class BaseRepository<T extends ObjectLiteral> {
  private readonly repository: Repository<T>;
  constructor(dataSource: DataSource, entity: EntityTarget<T>) {
    this.repository = dataSource.getRepository(entity);
  }

  find() {
    console.log("base.repository");
    return this.repository.find();
  }

  create(data) {
    return this.repository.create(data);
  }
}
