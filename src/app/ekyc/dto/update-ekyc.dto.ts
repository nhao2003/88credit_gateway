import { PartialType } from '@nestjs/mapped-types';
import { CreateEkycDto } from './create-ekyc.dto';

export class UpdateEkycDto extends PartialType(CreateEkycDto) {
  id: number;
}
