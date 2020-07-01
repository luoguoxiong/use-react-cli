import { Dispatch } from "@/store";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export type DolphinsState = number;

export const dolphins = {
  state: 0,
  reducers: {
    increment: (state: DolphinsState) => state + 1,
  },
  effects: (dispatch: Dispatch) => ({
    async incrementAsync() {
      await delay(500);
      dispatch.dolphins.increment();
    },
  }),
};
