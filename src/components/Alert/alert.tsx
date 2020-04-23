import React, { FC, useState } from "react";
import classNames from "classnames";
import Transition from "../Transition/transition";

export type AlertType = "success" | "default" | "danger" | "warning";

export interface IAlertProps {
    title: string;
    description?: string;
    type?: AlertType;
    onClose?: () => void;
    closable?: boolean;
}

const Alert: FC<IAlertProps> = (props) => {
    const [hide, setHide] = useState(false);

    const { title, type, description, onClose, closable } = props;

    const classes = classNames("vladimir-alert", {
        [`vladimir-alert-${type}`]: type,
    });
    const titleClass = classNames("vladimir-alert-title", {
        "bold-title": description,
    });

    const handleClose = (e: React.MouseEvent) => {
        if (onClose) {
            onClose();
        }
        setHide(true);
    };
    return (
        <Transition in={!hide} timeout={300} animation="zoom-in-right">
            <div className={classes}>
                <span className={titleClass}>{title}</span>
                {description && (
                    <p className="vladimir-alert-desc">{description}</p>
                )}
                {closable && (
                    <span
                        className="vladimir-alert-close"
                        onClick={handleClose}
                    >
                        X
                    </span>
                )}
            </div>
        </Transition>
    );
};

Alert.defaultProps = {
    type: "default",
    closable: true,
};

export default Alert;
