import {initialSessionState, SessionState} from './slices/session/initialState';
import {initSessionGroupState, SessionGroupState} from './slices/sessionGroup/initialState';

export interface SessionStoreState extends SessionGroupState, SessionState {}

export const initialState: SessionStoreState = {
  ...initSessionGroupState,
  ...initialSessionState,
};
