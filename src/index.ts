import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ExpressAdapter } from "@nestjs/platform-express";
import * as express from "express";
import * as functions from "firebase-functions";
import { ValidationPipe } from "@nestjs/common";

const expressServer = express();

// async function bootstrap() {
//   const app = await NestFactory.createApplicationContext(AppModule, {
//     logger: ['error'],
//   });
//   console.log(app.get(AppService).getHello());
// }
// bootstrap();

const createFunction = async (expressInstance: any): Promise<void> => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance)
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.init();
};

export const api = functions.https.onRequest(async (request, response) => {
  await createFunction(expressServer);
  expressServer(request, response);
});
