import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';

export function generateMarvelHash(
  ts: string,
  publicKey: string,
  privateKey: string
): string {
  return CryptoJS.MD5(ts + privateKey + publicKey).toString();
}

export function generateAuthParams(): Record<string, string> {
  let publicKey = environment.publicKey;
  let privateKey = environment.privateKey;

  const ts = new Date().getTime().toString();
  const hash = generateMarvelHash(ts, publicKey, privateKey);
  return { ts, apikey: publicKey, hash };
}
