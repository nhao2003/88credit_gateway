import { Controller } from '@nestjs/common';
import { EkycService } from './ekyc.service';

@Controller()
export class EkycController {
  constructor(private readonly ekycService: EkycService) {}
}
