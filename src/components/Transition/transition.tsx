import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName =
    | "zoom-in-top"
    | "zoom-in-right"
    | "zoom-in-bottom"
    | "zoom-in-left";

type ITransitionProps = CSSTransitionProps & {
    animation?: AnimationName;
    wrapper?: boolean;
};
const Transition: React.FC<ITransitionProps> = (props) => {
    const { classNames, children, animation, wrapper, ...restProps } = props;
    return (
        <CSSTransition
            classNames={classNames ? classNames : animation}
            {...restProps}
        >
            {wrapper ? <div>{children}</div> : children}
        </CSSTransition>
    );
};

Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
};

export default Transition;
