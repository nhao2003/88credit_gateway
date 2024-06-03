import { JwtPayload } from './jwt-payload.types';

type RpcPayload = {
  user: JwtPayload | null;
  params: Record<string, any>;
  body: any;
  query: Record<string, any>;
  headers: Record<string, any>;
};
export { RpcPayload };
