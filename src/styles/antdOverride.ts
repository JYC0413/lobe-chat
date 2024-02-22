import {css, Theme} from 'antd-style';

export default ({ token }: { prefixCls: string; token: Theme }) => css`
  .${token.prefixCls}-popover {
    z-index: 1100;
  }
`;
