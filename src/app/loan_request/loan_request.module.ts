import { Module } from '@nestjs/common';
import { LoanRequestService } from './loan_request.service';
import { LoanRequestController } from './loan_request.controller';

@Module({
  controllers: [LoanRequestController],
  providers: [LoanRequestService],
})
export class LoanRequestModule {}
