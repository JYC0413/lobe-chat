import { MobileChatInputArea, MobileChatSendButton } from '@lobehub/ui';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import ActionBar from '@/app/chat/features/ChatInput/ActionBar';
import STT from '@/app/chat/features/ChatInput/STT';
import SaveTopic from '@/app/chat/features/ChatInput/Topic';
import { useChatInput } from '@/app/chat/features/ChatInput/useChatInput';

import Files from './Files';

const ChatInputMobileLayout = memo(() => {
  const { t } = useTranslation('chat');

  const { ref, onSend, loading, value, onInput, onStop, expand, setExpand } = useChatInput();

  return (
    <MobileChatInputArea
      expand={expand}
      loading={loading}
      onInput={onInput}
      onSend={onSend}
      placeholder={t('sendPlaceholder')}
      ref={ref}
      setExpand={setExpand}
      style={{ width: '100vw' }}
      textAreaLeftAddons={<STT mobile />}
      textAreaRightAddons={
        <MobileChatSendButton loading={loading} onSend={onSend} onStop={onStop} />
      }
      topAddons={
        <>
          <Files />
          <ActionBar mobile padding={'0 8px'} rightAreaStartRender={<SaveTopic mobile />} />
        </>
      }
      value={value}
    />
  );
});

export default ChatInputMobileLayout;