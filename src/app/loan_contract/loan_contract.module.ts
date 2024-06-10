import { Module } from '@nestjs/common';
import { LoanContractService } from './loan_contract.service';
import { LoanContractController } from './loan_contract.controller';

@Module({
  controllers: [LoanContractController],
  providers: [LoanContractService],
})
export class LoanContractModule {}
