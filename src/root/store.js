import { createLogger, createStore } from "vuex";

import { home } from "../home/store/home.store";

export const store = createStore({
  modules: {
    home,
  },
  plugins: [createLogger()],
});
