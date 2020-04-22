import React from "react";
import classNames from "classnames";

export enum ButtonSize {
    Large = "lg",
    Small = "sm",
}

export enum ButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link",
}

interface ButtonBaseProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    href?: string;
    btnType?: ButtonType;
    children: React.ReactNode;
}

type NativeButtonProps = ButtonBaseProps &
    React.ButtonHTMLAttributes<HTMLElement>;
type NativeAnchorProps = ButtonBaseProps &
    React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;

const Button: React.FC<ButtonProps> = (props) => {
    const {
        btnType,
        size,
        children,
        disabled,
        href,
        className,
        ...restProps
    } = props;
    const clss = classNames("btn", className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: btnType === ButtonType.Link && disabled,
    });
    if (btnType === ButtonType.Link && href) {
        return (
            <a className={clss} href={href} {...restProps}>
                {children}
            </a>
        );
    } else {
        return (
            <button className={clss} disabled={disabled} {...restProps}>
                {children}
            </button>
        );
    }
};

Button.defaultProps = { disabled: false, btnType: ButtonType.Default };

export default Button;
