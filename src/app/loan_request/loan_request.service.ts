import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RpcPayload } from 'src/common/types/rpc_payload.type';
import { Microservices } from 'src/core/constants/constants';

@Injectable()
export class LoanRequestService {
  constructor(
    @Inject(Microservices.SERVER)
    private readonly serverClient: ClientProxy,
  ) {}

  async createLoanRequest(data: RpcPayload) {
    return this.serverClient.send('loan_request.create', data);
  }

  getSentLoanRequests(data: RpcPayload) {
    return this.serverClient.send('loan_request.get_sent_requests', data);
  }

  getReceivedLoanRequests(data: RpcPayload) {
    return this.serverClient.send('loan_request.get_received_requests', data);
  }

  approveLoanRequest(data: RpcPayload) {
    return this.serverClient.send('loan_request.approve', data);
  }

  rejectLoanRequest(data: RpcPayload) {
    return this.serverClient.send('loan_request.reject', data);
  }

  cancelLoanRequest(data: RpcPayload) {
    return this.serverClient.send('loan_request.cancel', data);
  }

  payLoanRequest(data: RpcPayload) {
    return this.serverClient.send('loan_request.pay', data);
  }

  markAsPaid(data: RpcPayload) {
    return this.serverClient.send('loan_request.mark_as_paid', data);
  }
}
