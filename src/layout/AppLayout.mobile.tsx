import {type MobileNavBarTitleProps} from '@lobehub/ui';
import {createStyles} from 'antd-style';
import dynamic from 'next/dynamic';
import {CSSProperties, memo, PropsWithChildren, ReactNode} from 'react';
import {Flexbox} from 'react-layout-kit';

import SafeSpacing from '@/components/SafeSpacing';

const MobileTabBar = dynamic(() => import('@/features/MobileTabBar'));

const useStyles = createStyles(({ css, cx, stylish }) => ({
  container: cx(
    stylish.noScrollbar,
    css`
      position: relative;
      overflow: hidden auto;
      width: 100vw;
      height: 100%;
    `,
  ),
  mobileNavBar: css`
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
  `,
  mobileTabBar: css`
    position: fixed;
    z-index: 100;
    right: 0;
    bottom: 0;
    left: 0;
  `,
}));

interface AppMobileLayoutProps extends PropsWithChildren {
  className?: string;
  navBar?: ReactNode;
  showTabBar?: boolean;
  style?: CSSProperties;
  title?: MobileNavBarTitleProps;
}

const AppLayoutMobile = memo<AppMobileLayoutProps>(
  ({ children, showTabBar, navBar, style, className }) => {
    const { styles, cx } = useStyles();

    return (
      <Flexbox className={cx(styles.container, className)} style={style}>
        {navBar && (
          <>
            <div className={styles.mobileNavBar}>{navBar}</div>
            <SafeSpacing mobile position={'top'} />
          </>
        )}
        {children}
        {showTabBar && (
          <>
            <SafeSpacing mobile position={'bottom'} />
            <MobileTabBar className={styles.mobileTabBar} />
          </>
        )}
      </Flexbox>
    );
  },
);

export default AppLayoutMobile;
