import {type ReactNode} from 'react';
import {ChatItemProps} from "../index";

export interface MessageContentProps {
    editing?: ChatItemProps['editing'];
    message?: ReactNode;
    messageExtra?: ChatItemProps['messageExtra'];
    onChange?: ChatItemProps['onChange'];
    onDoubleClick?: ChatItemProps['onDoubleClick'];
    onEditingChange?: ChatItemProps['onEditingChange'];
    placement?: ChatItemProps['placement'];
    primary?: ChatItemProps['primary'];
    renderMessage?: ChatItemProps['renderMessage'];
    text?: ChatItemProps['text'];
    type?: ChatItemProps['type'];
}
declare const MessageContent: import("react").NamedExoticComponent<MessageContentProps>;
export default MessageContent;
