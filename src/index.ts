import { auth } from "./auth.js";
import { getState } from "./get-state.js";
import type { StrategyOptions, State } from "./types.js";
import { VERSION } from "./version.js";

export interface OctotaskAuth {
  (options: Parameters<typeof auth>[1]): Promise<any>;
  hook: State["auth"]["hook"];
}

export function createOctotaskAuth(options: StrategyOptions): OctotaskAuth {
  const state: State = getState(options);

  return Object.assign(auth.bind(null, state), {
    hook: state.auth.hook,
  });
}

createOctotaskAuth.VERSION = VERSION;
