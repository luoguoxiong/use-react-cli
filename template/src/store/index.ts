import { init, RematchRootState, RematchDispatch } from "@rematch/core";
import { dolphins } from "@/store/dolphins";

const models: RootModel = { dolphins };

export const store = init({
  models,
});

export type Store = typeof store;

export type Dispatch = RematchDispatch<RootModel>;

export type RootState = RematchRootState<RootModel>;

export interface RootModel {
  dolphins: typeof dolphins;
}
