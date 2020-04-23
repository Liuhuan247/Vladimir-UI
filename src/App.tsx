import React, { useState } from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Alert from "./components/Alert/alert";

function App() {
    const [show, setShow] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        setShow(!show);
                    }}
                >
                    Hello
                </Button>
                <Button disabled>Hello</Button>
                <Button size={ButtonSize.Large} btnType={ButtonType.Primary}>
                    Large Primary
                </Button>
                <Button
                    size={ButtonSize.Large}
                    btnType={ButtonType.Primary}
                    disabled
                >
                    Large Primary
                </Button>
                <Button size={ButtonSize.Small} btnType={ButtonType.Primary}>
                    Small Primary
                </Button>
                <Button
                    size={ButtonSize.Small}
                    btnType={ButtonType.Primary}
                    disabled
                >
                    Small Primary
                </Button>
                <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
                    Large Danger
                </Button>

                <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>
                    Small Danger
                </Button>
                <Button
                    btnType={ButtonType.Link}
                    href="https://www.baidu.com"
                    target="_blank"
                >
                    Baidu
                </Button>
                <Button
                    btnType={ButtonType.Link}
                    href="https://www.baidu.com"
                    disabled
                >
                    Baidu
                </Button>
                {show && (
                    <Alert title="这是一个Alert" description="副标题"></Alert>
                )}
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
