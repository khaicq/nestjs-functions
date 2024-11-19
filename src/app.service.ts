import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getInformation(): string {
    return "Update on 19 Nov at 15:48";
  }
}
