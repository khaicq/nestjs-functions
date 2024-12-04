import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as fs from "fs";
import { User } from "../libs/entities/user.entity";
import { Company } from "../libs/entities/company.entity";
import { CompanyModule } from "./company/company.module";
// import { UserController } from "./user/user.controller";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const configPath = __dirname + "/../../db-config.json";
        let config: Record<string, any>;

        const data = fs.readFileSync(configPath, "utf-8");
        config = JSON.parse(data);

        return {
          type: "mysql",
          host: config.localhost,
          port: config.port,
          username: config.username,
          password: config.password,
          database: config.database,
          synchronize: false,
          entities: [User, Company],
          // migrations: ["./migrations"],
          // migrationsTableName: "migration_tables",
        };
      },
    }),
    CompanyModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
