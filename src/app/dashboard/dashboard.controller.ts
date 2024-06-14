import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { CreateRpcPayload } from 'src/common';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  async getDashboardData(@CreateRpcPayload() data: any) {
    return this.dashboardService.getDashboardData(data);
  }
}
