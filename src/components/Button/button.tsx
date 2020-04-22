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
    disable?: boolean;
    size?: ButtonSize;
    href?: string;
    btnType?: ButtonType;
    children: React.ReactNode;
}

const Button: React.FC<ButtonBaseProps> = (props) => {
    const { btnType, size, children, disable, href } = props;
    const clss = classNames("btn", {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disable: btnType === ButtonType.Link && disable,
    });
    if (btnType === ButtonType.Link && href) {
        return (
            <a className={clss} href={href}>
                {children}
            </a>
        );
    } else {
        return (
            <button className={clss} disabled={disable}>
                {children}
            </button>
        );
    }
};

Button.defaultProps = { disable: false, btnType: ButtonType.Default };

export default Button;
