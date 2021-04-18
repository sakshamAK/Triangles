import { useState } from 'react';
// import Triangle from './triangle.svg'

const ThreeTriangles = () => {
    let [a, setA] = useState(Math.floor(Math.random() * 100));
    let [b, setB] = useState(100 - a);
    let [c, setC] = useState(180 - a - b);
    const [answer, setAnswer] = useState('');
    const [toggleDisplay, setToggleDisplay] = useState(true);
    const [instruction, setInstruction] = useState('Three angles of a triangle are given.');
    const [instruction2, setInstruction2] = useState('Tell whether they form an acute, obtuse, or right triangle.');
    const randAngles = () => {
        let angle1 = Math.floor(Math.random() * 100);
        setA(angle1);
        a = angle1;
        let angle2 = Math.abs((Math.floor(Math.random() * 50)) - a);
        setB(angle2);
        b = angle2;
        let angle3 = 180 - a - b;
        setC(angle3);
    }
    const random = () => {
        randAngles();
        setToggleDisplay(true);
        setInstruction('Three angles of a triangle are given.');
        setInstruction2('Tell whether they form an acute, obtuse, or right triangle.');
    }
    const ans = (e) => {
        if (a > 90 || b > 90 || c > 90) {
            if (e.toLowerCase() === "obtuse") {
                setAnswer("you're correct! Answer is obtuse triangle");
            } else {
                setAnswer("Oops! Try Again.");
            }
        }
        else if (a < 90 || b < 90 || c < 90) {
            if (e.toLowerCase() === "acute") {
                setAnswer("you're correct! Answer is acute triangle");
            } else {
                setAnswer("Oops! Try Again.");
            }
        }
        else if (a === 90 || b === 90 || c === 90) {
            if (e.toLowerCase() === "right") {
                setAnswer("you're correct! Answer is right triangle");
            } else {
                setAnswer("Oops! Try Again.");
            }
        }
        else {
            setAnswer("Oops! Try Again.");
        }
    }

    const findThird = (e) => {
        setToggleDisplay(false);
        if (b + c + parseInt(e) === 180) {
            setAnswer("You're Correct!");
        } else {
            setAnswer("Oops! Try Again");
        }
        randAngles();
        setInstruction("Enter the third angle to form a triangle");
        setInstruction2("");
    }
    return (
        <div className="thirdPage">
            <p>{instruction}</p>
            <img src="triangle.svg" id="triangleImg" alt="triangle" />
            <h2 className={toggleDisplay ? 'show' : 'hide'}>{a}°</h2>
            <input className={toggleDisplay ? 'hide' : 'show'} type="number" placeholder="Angle" onChange={(e) => findThird(e.target.value)} />
            <h2>{b}°</h2>
            <h2>{c}°</h2>
            <p>{instruction2}</p>
            <input type="text" id="takeInput" placeholder="Your answer" onChange={(e) => ans(e.target.value)} disabled={!toggleDisplay} />
            <button onClick={random}>Get Angles</button>
            <button onClick={findThird}>Find The Third</button>
            <p id="answer">{answer}</p>
        </div>
    )
}

export default ThreeTriangles
