import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EkycService } from './ekyc.service';
import { CreateEkycDto } from './dto/create-ekyc.dto';
import { UpdateEkycDto } from './dto/update-ekyc.dto';

@Controller()
export class EkycController {
  constructor(private readonly ekycService: EkycService) {}

  @MessagePattern('createEkyc')
  create(@Payload() createEkycDto: CreateEkycDto) {
    return this.ekycService.create(createEkycDto);
  }

  @MessagePattern('findAllEkyc')
  findAll() {
    return this.ekycService.findAll();
  }

  @MessagePattern('findOneEkyc')
  findOne(@Payload() id: number) {
    return this.ekycService.findOne(id);
  }

  @MessagePattern('updateEkyc')
  update(@Payload() updateEkycDto: UpdateEkycDto) {
    return this.ekycService.update(updateEkycDto.id, updateEkycDto);
  }

  @MessagePattern('removeEkyc')
  remove(@Payload() id: number) {
    return this.ekycService.remove(id);
  }
}
