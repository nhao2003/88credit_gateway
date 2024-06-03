import { Test, TestingModule } from '@nestjs/testing';
import { EkycController } from './ekyc.controller';
import { EkycService } from './ekyc.service';

describe('EkycController', () => {
  let controller: EkycController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EkycController],
      providers: [EkycService],
    }).compile();

    controller = module.get<EkycController>(EkycController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
