import {memo, PropsWithChildren} from 'react';
import {Flexbox} from 'react-layout-kit';

import SafeSpacing from '@/components/SafeSpacing';
import {HEADER_HEIGHT} from '@/const/layoutTokens';

import Layout from '../../(desktop)/layout.desktop';
import Header from './features/Header';

export default memo(({ children }: PropsWithChildren) => (
  <Layout>
    <Header />
    <Flexbox align={'center'} flex={1} gap={16} padding={24} style={{ overflow: 'auto' }}>
      <SafeSpacing height={HEADER_HEIGHT - 16} />
      {children}
    </Flexbox>
  </Layout>
));
