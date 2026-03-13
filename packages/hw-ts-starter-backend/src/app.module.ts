import { Module } from "@nestjs/common";
import { PingController } from "./ping/ping.controller.ts";

@Module({
  controllers: [PingController],
})
export class AppModule {}
