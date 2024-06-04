import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RpcPayload } from 'src/common/types/rpc_payload.type';
import { Microservices } from 'src/core/constants/constants';

@Injectable()
export class EkycService {
  constructor(
    @Inject(Microservices.EKYC) private readonly ekycClient: ClientProxy,
  ) {}

  addFace(data: RpcPayload) {
    return this.ekycClient.send('ekyc.face.add', data);
  }

  addVideoSelfie(data: RpcPayload) {
    return this.ekycClient.send('ekyc.video.selfie.add', data);
  }

  ocrFrontIdCard(data: RpcPayload) {
    return this.ekycClient.send('ekyc.ocr.front-id-card', data);
  }

  ocrBackIdCard(data: RpcPayload) {
    return this.ekycClient.send('ekyc.ocr.back-id-card', data);
  }

  getLastestOrCreateRequest(data: RpcPayload) {
    return this.ekycClient.send('ekyc.request.get-or-create', data);
  }

  submitRequest(data: RpcPayload) {
    return this.ekycClient.send('ekyc.request.submit', data);
  }

  getRequestById(data: RpcPayload) {
    return this.ekycClient.send('ekyc.request.get-by-id', data);
  }
}
