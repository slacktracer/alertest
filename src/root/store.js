import { createLogger, createStore } from "vuex";

import { main } from "../main/store/main.store";

export const store = createStore({
  modules: {
    main,
  },
  plugins: [createLogger()],
});
