import {memo, ReactNode} from 'react';

import {LOADING_FLAT} from '@/const/message';
import {ChatMessage} from '@/types/message';

import BubblesLoading from '../components/BubblesLoading';

export const DefaultMessage = memo<
  ChatMessage & {
    editableContent: ReactNode;
  }
>(({ id, editableContent, content }) => {
  if (content === LOADING_FLAT) return <BubblesLoading />;

  return <div style={{color:"black"}} id={id}>{editableContent}</div>;
});
