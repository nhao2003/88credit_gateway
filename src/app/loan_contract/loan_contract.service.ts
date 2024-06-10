import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RpcPayload } from 'src/common/types/rpc_payload.type';
import { Microservices } from 'src/core/constants/constants';

@Injectable()
export class LoanContractService {
  constructor(
    @Inject(Microservices.SERVER) private readonly client: ClientProxy,
  ) {}

  getBorrowLoanContracts(payload: RpcPayload) {
    return this.client.send('loan_contract.get_borrow_loan_contracts', payload);
  }

  getLendLoanContracts(payload: RpcPayload) {
    return this.client.send('loan_contract.get_lend_loan_contracts', payload);
  }
}
