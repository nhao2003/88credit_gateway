import { Test, TestingModule } from '@nestjs/testing';
import { BankCardController } from './bank_card.controller';
import { BankCardService } from './bank_card.service';

describe('BankCardController', () => {
  let controller: BankCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankCardController],
      providers: [BankCardService],
    }).compile();

    controller = module.get<BankCardController>(BankCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
