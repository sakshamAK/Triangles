import Form from './Form.js'
import { useState } from 'react'

const Hypotenous = () => {
    const [side1, setSide1] = useState('')
    const [side2, setSide2] = useState('')
    const [output, setOutput] = useState('')
    const [text1, setText1] = useState('Enter the two sides of right triangle, press enter and find out the hypotenous.')
    const [text2, setText2] = useState('Get The Area')
    const [toggle, setToggle] = useState(true)
    let s1 = parseInt(side1);
    let s2 = parseInt(side2);
    const getHypo = () => {
        setOutput("Hypotenous is : " + parseInt(Math.sqrt((s1 * s1) + (s2 * s2))));
    }
    const getArea = () => {
        setOutput("Area is : " + (0.5*s1*s2))
    }

    const toggleTrue = () => {
        setToggle(false);
        setText1('Enter the base and height of triangle and press enter to get the area.');
        setText2('Get Hypotenous')
    }
    const toggleFalse = () => {
        setToggle(true)
        setText1('Enter the two sides of right triangle, press enter and find out the hypotenous.');
        setText2('Get The Area')
    }

    const areaOfTriangle = (e) => {
        e.preventDefault();
        toggle ? toggleTrue() : toggleFalse()
    }
    return (
        <div className="hypotenous">
            <Form display2="none" display="none" placeholder="side" text1={text1} output={output} display4="none" first={(e) => setSide1(e.target.value)} second={(e) => setSide2(e.target.value)} submit={(e) => { e.preventDefault(); toggle ? getHypo() : getArea() }} display5="block" areaOfTriangle={areaOfTriangle} labelText={text2} />

        </div>
    )
}

export default Hypotenous
