import {useRef, useState} from "react";
import MyButton from "./MyButton";
import MyTitle from "./MyTitle";

function Counter2() {
    let refVal = useRef(0);
    const btnK = useRef(null);
    const btnM = useRef(null);
    const h1T = useRef(null);

    const [title, setTitle] = useState("E7E");

    const handelClick = (e) => {
        if(e.target === btnK.current) {
            setTitle("1번");
        } else {
            setTitle("2번");
        }

        refVal.current = ++refVal.current;
        alert(refVal.current);
    };

    return(
        <div>
            <MyTitle ref={h1T}>{title}</MyTitle>

            <MyButton
                ref={btnK}
                style={{color : "yellow"}}
                onClick={handelClick}    
            >
                1번 버튼
            </MyButton>

            <MyButton
                ref={btnM}
                onClick={handelClick}    
            >
                2번 버튼
            </MyButton>
        </div>
    );
}

export default Counter2;