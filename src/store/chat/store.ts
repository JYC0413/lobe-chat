import {devtools, subscribeWithSelector} from 'zustand/middleware';
import {shallow} from 'zustand/shallow';
import {createWithEqualityFn} from 'zustand/traditional';
import {StateCreator} from 'zustand/vanilla';

import {isDev} from '@/utils/env';

import {ChatStoreState, initialState} from './initialState';
import {chatEnhance, ChatEnhanceAction} from './slices/enchance/action';
import {chatMessage, ChatMessageAction} from './slices/message/action';
import {chatShare, ShareAction} from './slices/share/action';
import {chatPlugin, ChatPluginAction} from './slices/tool/action';
import {chatTopic, ChatTopicAction} from './slices/topic/action';

export interface ChatStoreAction
  extends ChatMessageAction,
    ChatTopicAction,
    ShareAction,
    ChatEnhanceAction,
    ChatPluginAction {}

export type ChatStore = ChatStoreAction & ChatStoreState;

//  ===============  聚合 createStoreFn ============ //

const createStore: StateCreator<ChatStore, [['zustand/devtools', never]]> = (...params) => ({
  ...initialState,

  ...chatMessage(...params),
  ...chatTopic(...params),
  ...chatShare(...params),
  ...chatEnhance(...params),
  ...chatPlugin(...params),
});

//  ===============  实装 useStore ============ //

export const useChatStore = createWithEqualityFn<ChatStore>()(
  subscribeWithSelector(
    devtools(createStore, {
      name: 'LobeChat_Chat' + (isDev ? '_DEV' : ''),
    }),
  ),
  shallow,
);
