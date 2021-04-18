const Form = ({ submit, first, second, third, output, display, placeholder, display2, display3, display4, sides, result, areaOfTriangle, display5, text1, labelText }) => {

    return (
        <form className="secondPage" onSubmit={submit} >
            <h2 style={{
                display: display2
            }}>Enter the sides of {sides}</h2>
            <h2 style={{
                display: display3
            }}>{text1}</h2>
            <p style={{
                display: display2,
                whiteSpace: "pre-wrap"
            }}>{result}</p>
            <p style={{
                whiteSpace: "pre-wrap"
            }}> {output}</p>
            <input type="number" placeholder={"First " + placeholder} className="feed-angles" onChange={first} />
            <input type="number" placeholder={"Second " + placeholder} className="feed-angles" onChange={second} />
            <input type="number" placeholder={"Third " + placeholder} className="feed-angles" onChange={third} style={{ display: display4 }} />
            <input type="submit" className="feed-angles" value="Submit" style={{ display: display }} />
            <button onClick={areaOfTriangle} style={{
                display: display5
            }}>{labelText}</button>
        </form>
    )
}

Form.defaultProps = {
    placeholder: "Angle",
    display5: "none"
}

export default Form
