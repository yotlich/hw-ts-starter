import { Controller, Get } from "@nestjs/common";

@Controller("ping")
export class PingController {
  @Get()
  ping(): { result: string } {
    return { result: new Date().toISOString() };
  }
}
