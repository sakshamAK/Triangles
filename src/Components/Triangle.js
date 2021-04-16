import Form from './Form.js'
import { useState } from 'react'

const Triangle = () => {

    const [a1, setA1] = useState('');
    const [a2, setA2] = useState('');
    const [a3, setA3] = useState('');
    const [output, setOutput] = useState('Enter the three angles of triangle and lets see if you can create a triangle');
    const submitAngle = (e) => {
        e.preventDefault();
        if (a1 === '' || a2 === '' || a3 === '') {
            alert("Enter the value first");
        }
        let sum = parseInt(a1) + parseInt(a2) + parseInt(a3);
        if (sum === 180) {
            setOutput("Congrats! you formed a triangle");
        } else {
            setOutput("Triangle cannot be formed with these angles. \n HINT : Sum of angles of trianges is 180 degrees.");
        }
    }

    return (
        <div className="secondpage">
            <Form first = {(e) => setA1(e.target.value)} second = {(e) => setA2(e.target.value)} third = {(e) => setA3(e.target.value)} submit = {submitAngle} output = {output}  display3 = "none" display2 = "none" />
        </div>
    )
}

export default Triangle
