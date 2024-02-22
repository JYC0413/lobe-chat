import {ChatHeader, ChatHeaderTitle} from '@lobehub/ui';
import {Skeleton} from 'antd';
import {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Flexbox} from 'react-layout-kit';
import {useSessionStore} from '@/store/session';
import {agentSelectors, sessionSelectors} from '@/store/session/selectors';
import AvatarWithUpload from "@/features/AvatarWithUpload";

const Left = memo(() => {
  const {t} = useTranslation('chat');

  const [init, isInbox, title, description, avatar, backgroundColor, model, plugins] =
    useSessionStore((s) => [
      sessionSelectors.isSomeSessionActive(s),
      sessionSelectors.isInboxSession(s),
      agentSelectors.currentAgentTitle(s),
      agentSelectors.currentAgentDescription(s),
      agentSelectors.currentAgentAvatar(s),
      agentSelectors.currentAgentBackgroundColor(s),
      agentSelectors.currentAgentModel(s),
      agentSelectors.currentAgentPlugins(s),
    ]);

  const displayTitle = isInbox ? t('inbox.title') : title;

  return !init ? (
    <Flexbox horizontal>
      <Skeleton
        active
        avatar={{shape: 'circle', size: 'default'}}
        paragraph={false}
        title={{style: {margin: 0, marginTop: 8}, width: 200}}
      />
    </Flexbox>
  ) : (
    <Flexbox align={'center'} gap={12} horizontal>
      <AvatarWithUpload
        id={displayTitle}
        size={40}
        // title={title}
      />
      <ChatHeaderTitle
        // desc={displayDesc}
        // tag={
        //   <>
        //     <ModelTag model={model} />
        //     {showPlugin && plugins?.length > 0 && <PluginTag plugins={plugins} />}
        //   </>
        // }
        title={displayTitle}
      />
    </Flexbox>
  );
});

const Header = memo(() => <ChatHeader style={{
  backgroundColor: "white",
  background: "linear-gradient(to bottom,white,rgba(255, 255, 255,0.9)",
  color: "rgb(84,84,84)"
}} left={<Left/>}/>);

export default Header;
