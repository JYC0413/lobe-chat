'use client';

import {memo, PropsWithChildren} from 'react';
import {Flexbox} from 'react-layout-kit';

import AppLayoutDesktop from '@/layout/AppLayout.desktop';
import {useSwitchSideBarOnInit} from '@/store/global';
import {SidebarTabKey} from '@/store/global/initialState';

import ResponsiveSessionList from './features/SessionList';

export default memo(({ children }: PropsWithChildren) => {
  useSwitchSideBarOnInit(SidebarTabKey.Chat);
  return (
    <AppLayoutDesktop>
      <div style={{display:"none"}}>
        <ResponsiveSessionList />
      </div>
      <Flexbox
        flex={1}
        height={'100%'}
        id={'lobe-conversion-container'}
        style={{ position: 'relative' }}
      >
        {children}
      </Flexbox>
    </AppLayoutDesktop>
  );
});
