declare module "cybexjs-ws" {
  class Apis {
    static setRpcConnectionStatusCallback(handler: (status: any) => any): void;
    static instance(cs: string, connect: boolean, connectTimeout?: number, enableCrypto?: boolean): Apis;
    init_promise: Promise<any>
  }
  const ChainConfig: any;
}