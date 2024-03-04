import {Upload} from 'antd';
import {createStyles} from 'antd-style';
import Avatar from 'next/image';
import {CSSProperties, memo} from 'react';

import {DEFAULT_INBOX_AVATAR} from '@/const/meta';
import {useGlobalStore} from '@/store/global';
import {commonSelectors} from '@/store/global/selectors';
import {imageToBase64} from '@/utils/imageToBase64';
import {createUploadImageHandler} from '@/utils/uploadFIle';

const useStyle = createStyles(
  ({css, token}) => css`
    cursor: pointer;
    overflow: hidden;
    border-radius: 50%;
    transition:
      scale 400ms ${token.motionEaseOut},
      box-shadow 100ms ${token.motionEaseOut};

    &:hover {
      box-shadow: 0 0 0 3px ${token.colorText};
    }

    &:active {
      scale: 0.8;
    }
  `,
);

interface AvatarWithUploadProps {
  passAvatar?: string;
  compressSize?: number;
  id?: string;
  size?: number;
  style?: CSSProperties;
}

const AvatarWithUpload = memo<AvatarWithUploadProps>(
  ({passAvatar, size = 40, compressSize = 256, style, id}) => {
    const {styles} = useStyle();
    const [avatar, updateAvatar] = useGlobalStore((s) => [
      commonSelectors.userAvatar(s),
      s.updateAvatar,
    ]);

    const handleUploadAvatar = createUploadImageHandler((avatar) => {
      const img = new Image();
      img.src = avatar;
      img.addEventListener('load', () => {
        const webpBase64 = imageToBase64({img, size: compressSize || 256,type:"image/jpeg"});
        updateAvatar(webpBase64);
      });
    });

    if (!avatar && passAvatar) {
      const img = new Image();
      img.src = passAvatar;
      img.addEventListener('load', () => {
        const webpBase64 = imageToBase64({img, size: compressSize || 256,type:"image/jpeg"});
        updateAvatar(webpBase64);
      });
    }

    return (
      <div className={styles} id={id} style={{maxHeight: size, maxWidth: size, ...style}}>
        <Upload beforeUpload={handleUploadAvatar} itemRender={() => void 0} maxCount={1}>
          {avatar ? (
            <Avatar alt={'avatar'} height={size} src={avatar} width={size}/>
          ) : <div style={{width: size, height: size}}/>}
        </Upload>
      </div>
    );
  },
);

export default AvatarWithUpload;
