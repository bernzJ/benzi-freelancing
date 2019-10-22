import createCustomReducer from "./createCustomReducer"
import { defaultLocale } from "../data/i18n"

export const { actions, reducer } = createCustomReducer("Language",
  {
    code: defaultLocale
  }, {
  //NOTE: unused, reason: on url reload, store reset.
  //setLanguage: (state, code) => ({ ...state, code })
});