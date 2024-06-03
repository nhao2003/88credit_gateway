import { Module } from '@nestjs/common';
import { BankCardService } from './bank_card.service';
import { BankCardController } from './bank_card.controller';

@Module({
  controllers: [BankCardController],
  providers: [BankCardService],
})
export class BankCardModule {}
