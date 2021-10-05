import { PayloadAction } from '@reduxjs/toolkit';

export type CallbacksActionType<P = Record<string, unknown>> = PayloadAction<
  P & {
    onSuccess?: () => void;
    onError?: (err: string) => void;
  }
>;
export type PromiseReturnType<T> = T extends PromiseLike<infer U>
  ? U
  : T extends (...args: unknown[]) => Promise<infer UFunc>
  ? UFunc
  : T extends (...args: any[]) => PromiseLike<infer F>
  ? F
  : any;
