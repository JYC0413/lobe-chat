import {CollapseProps, DividerProps, ImageProps, TypographyProps} from 'antd';
import {CSSProperties} from 'react';

export interface MarkdownProps {
    /**
     * @description The markdown content to be rendered
     */
    children: string;
    /**
     * @description The class name for the Markdown component
     */
    className?: string;
    componentProps?: {
        a?: TypographyProps['Link'] & HTMLAnchorElement;
        details?: CollapseProps;
        hr?: DividerProps;
        img?: ImageProps;
        pre?: any;
    };
    enableImageGallery?: boolean;
    fullFeaturedCodeBlock?: boolean;
    onDoubleClick?: () => void;
    style?: CSSProperties;
}
declare const Markdown: import("react").NamedExoticComponent<MarkdownProps>;
export default Markdown;
