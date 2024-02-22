import {BuiltinToolState, initialBuiltinToolState} from './slices/builtin';
import {CustomPluginState, initialCustomPluginState} from './slices/customPlugin';
import {initialPluginState, PluginState} from './slices/plugin';
import {initialPluginStoreState, PluginStoreState} from './slices/store';

export type ToolStoreState = PluginState & CustomPluginState & PluginStoreState & BuiltinToolState;

export const initialState: ToolStoreState = {
  ...initialPluginState,
  ...initialCustomPluginState,
  ...initialPluginStoreState,
  ...initialBuiltinToolState,
};
