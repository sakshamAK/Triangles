import Form from './Form.js';
import { useState } from 'react';

const SidesBased = () => {
    const triangleTypes = ['isosceles', 'equilateral', 'scalene']
    const [sides, setSides] = useState(triangleTypes[Math.floor(Math.random() * triangleTypes.length)] + " triangle");
    const [result, setResult] = useState("Press Enter After Filling The Sides");
    const [s1, setS1] = useState('');
    const [s2, setS2] = useState('');
    const [s3, setS3] = useState('');

    const onsubmit = (e) => {
        e.preventDefault();
        let Side1 = parseInt(s1);
        let Side2 = parseInt(s2);
        let Side3 = parseInt(s3);
        const setResultSides = () => {
            setResult(`This is correct, Let's go for another one. \n (Press enter again if statement is still the same)`);
            setSides(triangleTypes[Math.floor(Math.random() * triangleTypes.length)] + " triangle");
        }
        switch (sides) {
            case 'isosceles triangle': (Side1 === Side2 || Side2 === Side3 || Side3 === Side1) ? setResultSides() : setResult("This doesn't forms an isoceles triangle");
            break;
            case 'equilateral triangle': (Side1 === Side2 && Side2 === Side3) ? setResultSides() : setResult("This doesn't forms an equilateral triangle");
            break;
            case 'scalene triangle': (Side1 !== Side2 && Side2 !== Side3) ? setResultSides() : setResult("This doesn't forms an scalene triangle");
            break;
            default: ;
        }

    }
    return (
        <div className="fourthPage">
            <Form display="none" submit={onsubmit} display3 = "none" placeholder="Side" sides={sides} result={result} first={(e) => setS1(e.target.value)} second={(e) => setS2(e.target.value)} third={(e) => setS3(e.target.value)} />
        </div>
    )
}

export default SidesBased
