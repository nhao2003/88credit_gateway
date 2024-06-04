import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { EkycService } from './ekyc.service';
import { CreateRpcPayload } from 'src/common';
import { RpcPayload } from 'src/common/types/rpc_payload.type';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('ekyc')
export class EkycController {
  constructor(private readonly ekycService: EkycService) {}

  @Post('face/:requestId/add-face')
  @UseInterceptors(FileInterceptor('file'))
  addFace(@CreateRpcPayload() payload: RpcPayload) {
    return this.ekycService.addFace(payload);
  }

  @Post('face/:requestId/add-video-selfie')
  @UseInterceptors(FileInterceptor('file'))
  addVideoSelfie(@CreateRpcPayload() data) {
    return this.ekycService.addVideoSelfie(data);
  }

  @Post('ocr/front-image/:requestId')
  @UseInterceptors(FileInterceptor('file'))
  ocrFrontIdCard(@CreateRpcPayload() payload: RpcPayload) {
    return this.ekycService.ocrFrontIdCard(payload);
  }

  @Post('ocr/back-image/:requestId')
  @UseInterceptors(FileInterceptor('file'))
  ocrBackIdCard(@CreateRpcPayload() payload: RpcPayload) {
    return this.ekycService.ocrBackIdCard(payload);
  }

  @Post('request')
  getLastestOrCreateRequest(@CreateRpcPayload() payload: RpcPayload) {
    return this.ekycService.getLastestOrCreateRequest(payload);
  }

  @Post('request/submit/:id')
  submitRequest(@CreateRpcPayload() payload: RpcPayload) {
    return this.ekycService.submitRequest(payload);
  }

  @Post('request/:id')
  getRequestById(@CreateRpcPayload() payload: RpcPayload) {
    return this.ekycService.getRequestById(payload);
  }
}
