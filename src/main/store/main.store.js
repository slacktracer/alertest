import * as actions from "./main.store.actions";
import * as mutations from "./main.store.mutations";
import { state } from "./main.store.state";

export const main = {
  actions,
  namespaced: true,
  mutations,
  state,
};
