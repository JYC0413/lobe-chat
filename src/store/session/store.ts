import {devtools, subscribeWithSelector} from 'zustand/middleware';
import {shallow} from 'zustand/shallow';
import {createWithEqualityFn} from 'zustand/traditional';
import {StateCreator} from 'zustand/vanilla';

import {isDev} from '@/utils/env';

import {initialState, SessionStoreState} from './initialState';
import {AgentAction, createAgentSlice} from './slices/agent/action';
import {createSessionSlice, SessionAction} from './slices/session/action';
import {createSessionGroupSlice, SessionGroupAction} from './slices/sessionGroup/action';

//  ===============  聚合 createStoreFn ============ //

export interface SessionStore
  extends SessionAction,
    AgentAction,
    SessionGroupAction,
    SessionStoreState {}

const createStore: StateCreator<SessionStore, [['zustand/devtools', never]]> = (...parameters) => ({
  ...initialState,
  ...createAgentSlice(...parameters),
  ...createSessionSlice(...parameters),
  ...createSessionGroupSlice(...parameters),
});

//  ===============  implement useStore ============ //

export const useSessionStore = createWithEqualityFn<SessionStore>()(
  subscribeWithSelector(
    devtools(createStore, {
      name: 'LobeChat_Session' + (isDev ? '_DEV' : ''),
    }),
  ),
  shallow,
);
