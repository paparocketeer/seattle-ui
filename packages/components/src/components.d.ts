import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    SuiButton: typeof components.Button;
    SuiIcon: typeof components.Icon;
  }
}
export {};