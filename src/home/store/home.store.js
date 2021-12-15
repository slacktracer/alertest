import * as mutations from "./home.store.mutations";
import { state } from "./home.store.state"

export const home = {
  namespaced: true,
  mutations,
  state
}
