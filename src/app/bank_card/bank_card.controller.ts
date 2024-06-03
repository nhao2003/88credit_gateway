import { Controller, Get, Patch, Post } from '@nestjs/common';
import { BankCardService } from './bank_card.service';
import { CreateRpcPayload } from 'src/common';

@Controller('bank-card')
export class BankCardController {
  constructor(private readonly bankCardService: BankCardService) {}

  @Post()
  createBankCard(@CreateRpcPayload() data) {
    return this.bankCardService.createBankCard(data);
  }

  @Get()
  getBankCards(@CreateRpcPayload() data) {
    return this.bankCardService.getBankCards(data);
  }

  @Get('primary')
  getPrimaryBankCard(@CreateRpcPayload() data) {
    console.log('data', data);
    return this.bankCardService.getPrimaryBankCard(data);
  }

  @Patch(':cardNumber/primary')
  markPrimaryBankCard(@CreateRpcPayload() data) {
    return this.bankCardService.markPrimaryBankCard(data);
  }
}
