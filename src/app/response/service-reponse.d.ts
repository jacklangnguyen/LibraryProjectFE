export declare class ServiceReponse<T> {
            code?: bigint;
            message?: string;
            data?: T;
            constructor(init?: {
              code?: bigint;
              message?: string;
              data?: T;
            })
}
