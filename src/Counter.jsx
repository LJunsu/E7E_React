import PropsType from "prop-types";
import "./Counter.css";
import { useState } from "react";

Counter.propType = {
    title : PropsType.string.isRequired
    , fsum : PropsType.func.isRequired
};

function Counter({title, fsum}) {
    console.log("Render test");

    //   변수명    함수명        userState(myCount의 초기값)
    let [myCount, setMyCount] = useState(0);

    const fCnt = () => {
        console.log("Function test");
        setMyCount((myCount) => myCount + 1);
        fsum((sum) => sum + 1);
    };

    return(
        <div 
            onClick={fCnt} 
            className="counter"
        >
            <h2>{title}</h2>
            <hr />
            <h1>{myCount}</h1>
        </div>
    );
}

export default Counter;