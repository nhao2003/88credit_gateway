import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Microservices } from 'src/core/constants/constants';

@Injectable()
export class StorageService {
  constructor(
    @Inject(Microservices.STORAGE) private readonly storageClient: ClientProxy,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    return this.storageClient.send('storage.upload', file);
  }
}
