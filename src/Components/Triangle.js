import Form from './Form.js'
import { useState } from 'react'

const Triangle = () => {

    const [a1, setA1] = useState('');
    const [a2, setA2] = useState('');
    const [a3, setA3] = useState('');
    const [output, setOutput] = useState('Enter the three angles of triangle to create a triangle.\nPress enter key after filling, to submit the values');
    const submitAngle = e => {
        e.preventDefault();
        if(a1 > 0 && a2 > 0 && a3 > 0){
            if (a1 === '' || a2 === '' || a3 === '') alert("Enter the value first");
            let sum = parseInt(a1) + parseInt(a2) + parseInt(a3);
            (sum === 180) ? setOutput("Congrats! you formed a triangle") : setOutput("Triangle cannot be formed with these angles. \n HINT : Sum of angles of trianges is 180 degrees.");
        }
        else
            setOutput("Enter positive values only")
    }

    return (
        <div className="secondpage">
            <Form first = {(e) => setA1(e.target.value)} second = {(e) => setA2(e.target.value)} third = {(e) => setA3(e.target.value)} submit = {submitAngle} output = {output}  display3 = "none" display2 = "none" />
        </div>
    )
}

export default Triangle
