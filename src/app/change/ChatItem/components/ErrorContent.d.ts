/// <reference types="react" />
import {ChatItemProps} from "../index";

export interface ErrorContentProps {
    error?: ChatItemProps['error'];
    message?: ChatItemProps['errorMessage'];
    placement?: ChatItemProps['placement'];
}
declare const ErrorContent: import("react").NamedExoticComponent<ErrorContentProps>;
export default ErrorContent;
