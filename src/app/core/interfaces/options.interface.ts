import { HttpMethod } from '../common/http-methods';

export interface IOptions {
  url: string;
  method: HttpMethod;
  params?: Record<string, any>;
  data?: any;
}
