import { Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateRpcPayload } from 'src/common/decorators';
import { LoanRequestService } from './loan_request.service';
import { RpcPayload } from 'src/common/types/rpc_payload.type';

@Controller('loan-request')
@ApiTags('Loan Request')
@ApiBearerAuth()
export class LoanRequestController {
  constructor(private readonly loanRequestService: LoanRequestService) {}

  @Post()
  createLoanRequest(@CreateRpcPayload() payload: RpcPayload) {
    return this.loanRequestService.createLoanRequest(payload);
  }

  @Get('sent')
  getSentLoanRequests(@CreateRpcPayload() payload: RpcPayload) {
    return this.loanRequestService.getSentLoanRequests(payload);
  }

  @Get('received')
  async getReceivedLoanRequests(@CreateRpcPayload() payload: RpcPayload) {
    return await this.loanRequestService.getReceivedLoanRequests(payload);
  }

  @Post(':id/approve')
  async approveLoanRequest(@CreateRpcPayload() payload: RpcPayload) {
    return this.loanRequestService.approveLoanRequest(payload);
  }

  @Post(':id/reject')
  rejectLoanRequest(@CreateRpcPayload() payload: RpcPayload) {
    return this.loanRequestService.rejectLoanRequest(payload);
  }

  @Post(':id/cancel')
  cancelLoanRequest(@CreateRpcPayload() payload: RpcPayload) {
    return this.loanRequestService.cancelLoanRequest(payload);
  }

  @Post(':id/pay')
  payLoanRequest(@CreateRpcPayload() payload: RpcPayload) {
    return this.loanRequestService.payLoanRequest(payload);
  }

  @Post(':id/mark-paid')
  markLoanRequestPaid(@CreateRpcPayload() payload: RpcPayload) {
    return this.loanRequestService.markAsPaid(payload);
  }
}
