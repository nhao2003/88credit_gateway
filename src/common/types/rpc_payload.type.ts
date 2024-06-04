import { JwtPayload } from './jwt-payload.types';

type RpcPayload = {
  user: JwtPayload | null;
  params: Record<string, any>;
  body: any;
  query: Record<string, any>;
  headers: Record<string, any>;
  file?: Express.Multer.File | undefined;
  files?:
    | {
        [fieldname: string]: Express.Multer.File[];
      }
    | Express.Multer.File[]
    | undefined;
};
export { RpcPayload };
