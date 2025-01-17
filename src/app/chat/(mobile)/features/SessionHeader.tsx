import {Logo, MobileNavBar} from '@lobehub/ui';
// import MobileNavBar from '/change/MobileNavBar/index';
import {createStyles} from 'antd-style';
import {useRouter} from 'next/navigation';
import {memo} from 'react';
import {useGlobalStore} from '@/store/global';
import {commonSelectors} from '@/store/global/selectors';
import {useSessionStore} from '@/store/session';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    fill: ${token.colorText};
  `,
  top: css`
    position: sticky;
    top: 0;
  `,
}));

const Header = memo(() => {
  const [createSession] = useSessionStore((s) => [s.createSession]);
  const router = useRouter();
  const avatar = useGlobalStore(commonSelectors.userAvatar);
  return (
    <MobileNavBar
      style={{background:"#247678"}}
      center={<Logo type={'text'} />}
      // left={
      //   <div onClick={() => router.push('/settings')} style={{ marginLeft: 8 }}>
      //     {avatar ? <Avatar avatar={avatar} size={28} /> : <Logo size={28} />}
      //   </div>
      // }
      // right={
      //   <ActionIcon
      //     icon={MessageSquarePlus}
      //     onClick={() => createSession()}
      //     size={MOBILE_HEADER_ICON_SIZE}
      //   />
      // }
    />
  );
});

export default Header;
