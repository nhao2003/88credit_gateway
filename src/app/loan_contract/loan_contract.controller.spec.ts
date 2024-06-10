import { Test, TestingModule } from '@nestjs/testing';
import { LoanContractController } from './loan_contract.controller';
import { LoanContractService } from './loan_contract.service';

describe('LoanContractController', () => {
  let controller: LoanContractController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoanContractController],
      providers: [LoanContractService],
    }).compile();

    controller = module.get<LoanContractController>(LoanContractController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
