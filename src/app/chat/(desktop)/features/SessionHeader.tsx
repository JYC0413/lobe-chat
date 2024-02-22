import {createStyles} from 'antd-style';
import {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Flexbox} from 'react-layout-kit';
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
  const { styles } = useStyles();
  const { t } = useTranslation('chat');
  const [createSession] = useSessionStore((s) => [s.createSession]);

  return (
    <Flexbox style={{backgroundColor:"#247678"}} className={styles.top} gap={16} padding={16}>
      <Flexbox align={'center'} distribution={'space-between'} horizontal>
        {/*<Logo className={styles.logo} size={36} type={'text'} />*/}
        <div style={{fontSize:"2.25rem",fontWeight:700,color:"white"}}>Pastor</div>
        {/*<ActionIcon*/}
        {/*  icon={MessageSquarePlus}*/}
        {/*  onClick={() => createSession()}*/}
        {/*  size={DESKTOP_HEADER_ICON_SIZE}*/}
        {/*  style={{ flex: 'none' }}*/}
        {/*  title={t('newAgent')}*/}
        {/*/>*/}
      </Flexbox>
      {/*<SessionSearchBar />*/}
    </Flexbox>
  );
});

export default Header;
