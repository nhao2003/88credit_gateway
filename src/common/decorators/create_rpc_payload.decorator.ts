import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';
import { RpcPayload } from '../types/rpc_payload.type';

export const CreateRpcPayload = createParamDecorator(
  (data: any, context: ExecutionContext): RpcPayload => {
    const request = context.switchToHttp().getRequest<Request>();
    const payload: RpcPayload = {
      user: (request as any).user,
      params: request.params,
      body: request.body,
      query: request.query,
      headers: request.headers,
    };
    return payload;
  },
);
