import { Controller, Get } from '@nestjs/common';
import { BankService } from './bank.service';
import { CreateRpcPayload } from 'src/common';

@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  getBanks(@CreateRpcPayload() data) {
    return this.bankService.getBanks(data);
  }

  @Get(':id')
  getBank(@CreateRpcPayload() data) {
    return this.bankService.getBank(data);
  }
}
