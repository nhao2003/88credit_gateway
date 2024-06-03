import { Injectable } from '@nestjs/common';
import { CreateEkycDto } from './dto/create-ekyc.dto';
import { UpdateEkycDto } from './dto/update-ekyc.dto';

@Injectable()
export class EkycService {
  create(createEkycDto: CreateEkycDto) {
    return 'This action adds a new ekyc';
  }

  findAll() {
    return `This action returns all ekyc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ekyc`;
  }

  update(id: number, updateEkycDto: UpdateEkycDto) {
    return `This action updates a #${id} ekyc`;
  }

  remove(id: number) {
    return `This action removes a #${id} ekyc`;
  }
}
