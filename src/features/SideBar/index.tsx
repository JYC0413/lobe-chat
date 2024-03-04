import {SideNav} from '@lobehub/ui';
import {memo} from 'react';

import AvatarWithUpload from '@/features/AvatarWithUpload';
import {useGlobalStore} from '@/store/global';
import TopActions from './TopActions';

export default memo(() => {
  const [tab, setTab] = useGlobalStore((s) => [s.sidebarKey, s.switchSideBar]);

  return (
    <SideNav
      avatar={<AvatarWithUpload id={'avatar'} />}
      // bottomActions={<BottomActions setTab={setTab} tab={tab} />}
      bottomActions={<></>}
      style={{ height: '100%',backgroundColor:"#247678" }}
      topActions={<TopActions setTab={setTab} tab={tab} />}
    />
  );
});
