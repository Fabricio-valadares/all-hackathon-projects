import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix("v1");
  if (process.env.NODE_ENV != "test") {
    await app.listen(process.env.PORT, () => {
      console.log("App Running on port: ", process.env.PORT ?? 5000);
    });
  }
}
bootstrap();
