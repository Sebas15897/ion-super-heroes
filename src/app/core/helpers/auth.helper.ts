import * as CryptoJS from 'crypto-js';

export function generateMarvelHash(ts: string, publicKey: string, privateKey: string): string {
  return CryptoJS.MD5(ts + privateKey + publicKey).toString();
}
