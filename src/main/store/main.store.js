import * as mutations from "./main.store.mutations";
import { state } from "./main.store.state";

export const main = {
  namespaced: true,
  mutations,
  state,
};
