import React, { useState } from 'react'


const Quiz = () => {
    const [score, setScore] = useState(0);
    const correctAns = ["o1", "o2", "o1", "o1", "o1", "o2", "o2", "o3", "o3", "o3" ];
    const onsubmit = (e) => {
        e.preventDefault();
        setScore(0)
        let formData = document.forms[3];
        let data = new FormData(formData);
        let itr = 0;
        for(let entry of data){
            if(entry[1] === correctAns[itr]){
                console.log("true");
                setScore(prev => prev + 1);
            } else {
                console.log(false)
            }
            itr++;
        }
    }
    return (
        <div>
            <form onSubmit = {(e) => onsubmit(e)} id = "myForm" name = "myForm">
                <h2 style = {{textAlign: "center"}}>Quiz Time!</h2>
                <div className = "questionBox"> 
                    <label className = "ques">If a triangle has angles 135<sup>o</sup>, 15<sup>o</sup>, 30<sup>o</sup>. Is it an obtuse triangle?</label>
                    <label for="r1" className= "ans"><input type = "radio" required value = "o1" id = "r1" name = "q1"></input>yes</label>
                    <label for="r2" className= "ans"><input type = "radio" required value = "o2" id = "r2" name = "q1"></input>no</label>
                </div>
                <div className = "questionBox"> 
                    <label className = "ques">If a triangle has angles 115<sup>o</sup>, 25<sup>o</sup>, 40<sup>o</sup>. Is it an acute triangle?</label>
                    <label for="r3" className= "ans"><input type = "radio" required value = "o1" id = "r3" name = "q2"></input>yes</label>
                    <label for="r4" className= "ans"><input type = "radio" required value = "o2" id = "r4" name = "q2"></input>no</label>
                </div>
                <div className = "questionBox"> 
                    <label className = "ques"> If a triangle has angles 90<sup>o</sup>, 60<sup>o</sup>, 30<sup>o</sup>. Is it a right angle triangle?</label>
                    <label for="r5" className= "ans"><input type = "radio" required value = "o1" id = "r5" name = "q3"></input>yes</label>
                    <label for="r6" className= "ans"><input type = "radio" required value = "o2" id = "r6" name = "q3"></input>no</label>
                </div>
                <div className = "questionBox"> 
                    <label className = "ques">A triangle has angles 60<sup>o</sup>, 60<sup>o</sup>, 60<sup>o</sup>. Is it an equilateral triangle?</label>
                    <label for="r7" className= "ans"><input type = "radio" required value = "o1" id = "r7" name = "q4"></input>yes</label>
                    <label for="r8" className= "ans"><input type = "radio" required value = "o2" id = "r8" name = "q4"></input>no</label>
                </div>
                <div className = "questionBox"> 
                    <label className = "ques">If a triangle has angles 25<sup>o</sup>, 75<sup>o</sup>, 80<sup>o</sup>. Is it an acute triangle?</label>
                    <label for="r9" className= "ans"><input type = "radio" required value = "o1" id = "r9" name = "q5"></input>yes</label>
                    <label for="r10" className= "ans"><input type = "radio" required value = "o2" id = "r10" name = "q5"></input>no</label>
                </div>
                <div className = "questionBox"> 
                    <label className = "ques"> If a triangle has 2 sides with equal lengths and 75<sup>o</sup> angle between them. What is the type of triangle?</label>
                    <label for="r11" className= "ans"><input type = "radio" required value = "o1" id = "r11" name = "q6"></input>Equilateral</label>
                    <label for="r12" className= "ans"><input type = "radio" required value = "o2" id = "r12" name = "q6"></input>Isoceles</label>
                    <label for="r13" className= "ans"><input type = "radio" required value = "o3" id = "r13" name = "q6"></input>Right</label>
                </div>
                <div className = "questionBox"> 
                    <label className = "ques">If a triangle has 2 angles of 75<sup>o</sup>. What is the measure of third angle in degree?</label>
                    <label for="r14" className= "ans"><input type = "radio" required value = "o1" id = "r14" name = "q7"></input>25cm</label>
                    <label for="15" className= "ans"><input type = "radio" required value = "o2" id = "r15" name = "q7"></input>30cm</label>
                    <label for="r16" className= "ans"><input type = "radio" required value = "o3" id = "r16" name = "q7"></input>15cm</label>
                </div>
                <div className = "questionBox"> 
                    <label className = "ques"> If a triangle has 2 sides with equal lengths and 60<sup>o</sup> angle between them. What is the type of triangle?</label>
                    <label for="r17" className= "ans"><input type = "radio" required value = "o1" id = "r17" name = "q8"></input>Equilateral</label>
                    <label for="r18" className= "ans"><input type = "radio" required value = "o2" id = "r18" name = "q8"></input>Isosceles</label>
                    <label for="r19" className= "ans"><input type = "radio" required value = "o3" id = "r19" name = "q8"></input>Both</label>
                </div>
                <div className = "questionBox"> 
                    <label className = "ques">The perimeter of an equilateral triangle is 15cm. What is the length of one side?</label>
                    <label for="r20" className= "ans"><input type = "radio" required value = "o1" id = "r20" name = "q9"></input>15cm</label>
                    <label for="r21" className= "ans"><input type = "radio" required value = "o2" id = "r21" name = "q9"></input>45cm</label>
                    <label for="r22" className= "ans"><input type = "radio" required value = "o3" id = "r22" name = "q9"></input>5cm</label>
                </div>
                <div className = "questionBox"> 
                    <label className = "ques">If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?</label>
                    <label for="r23" className= "ans"><input type = "radio" required value = "o1" id = "r23" name = "q10"></input>Equilateral</label>
                    <label for="r24" className= "ans"><input type = "radio" required value = "o2" id = "r24" name = "q10"></input>Isoceles</label>
                    <label for="r25" className= "ans"><input type = "radio" required value = "o3" id = "r25" name = "q10"></input>Scalene</label>
                </div>
                <div className = "questionBox"> 
                    <input type = "submit" value = "submit" id = "submit"/>
                    <h2 style = {{fontSize: "25px"}}>Your Score is: {score === 10? `Congrats! you scored a ` + score : score}</h2>
                </div>
            </form>
        </div>
    )
}

export default Quiz
