import { Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateRpcPayload } from 'src/common/decorators';
import { LoanRequestService } from './loan_request.service';

@Controller('loan-request')
@ApiTags('Loan Request')
@ApiBearerAuth()
export class LoanRequestController {
  constructor(private readonly loanRequestService: LoanRequestService) {}

  @Post()
  createLoanRequest(@CreateRpcPayload() payload) {
    return this.loanRequestService.createLoanRequest(payload);
  }

  @Get('sent')
  getSentLoanRequests(@CreateRpcPayload() payload) {
    return this.loanRequestService.getSentLoanRequests(payload);
  }

  @Get('received')
  async getReceivedLoanRequests(@CreateRpcPayload() payload) {
    return await this.loanRequestService.getReceivedLoanRequests(payload);
  }

  @Post(':id/approve')
  async approveLoanRequest(@CreateRpcPayload() payload) {
    return this.loanRequestService.approveLoanRequest(payload);
  }

  @Post(':id/reject')
  rejectLoanRequest(@CreateRpcPayload() payload) {
    return this.loanRequestService.rejectLoanRequest(payload);
  }

  @Post(':id/cancel')
  cancelLoanRequest(@CreateRpcPayload() payload) {
    return this.loanRequestService.cancelLoanRequest(payload);
  }

  @Post(':id/pay')
  payLoanRequest(@CreateRpcPayload() payload) {
    return this.loanRequestService.payLoanRequest(payload);
  }

  @Post(':id/mark-paid')
  markLoanRequestPaid(@CreateRpcPayload() payload) {
    return this.loanRequestService.markAsPaid(payload);
  }
}
