import { Controller, Get, Query } from '@nestjs/common';
import { LoanContractService } from './loan_contract.service';
import { CreateRpcPayload } from 'src/common';
import { RpcPayload } from 'src/common/types/rpc_payload.type';

@Controller('loan-contract')
export class LoanContractController {
  constructor(private readonly loanContractService: LoanContractService) {}

  @Get('borrow')
  async getBorrowLoanContracts(@CreateRpcPayload() payload: RpcPayload) {
    return this.loanContractService.getBorrowLoanContracts(payload);
  }

  @Get('lend')
  async getLendLoanContracts(@CreateRpcPayload() payload: RpcPayload) {
    return this.loanContractService.getLendLoanContracts(payload);
  }
}
