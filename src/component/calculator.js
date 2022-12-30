import { useState } from "react";
import './calculator.css';
//import axios from "axios"


function Calculator() {
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [total, setTotal] = useState()
   

    function Add() {
        setTotal(Number(num1) + Number(num2))
        // const data = {
        //     Num1: num1,
        //     Num2: num2,
        //     Total: total
        // }
        // const url = "";
        // axios.post(url, data).then((result) => {
        //     alert(result.data)
        // }).catch((error) => {
        //     alert(error)
        // })
    }
    function Subtract() {
        setTotal(Number(num1) - Number(num2))
        // const data = {
        //     Num1: num1,
        //     Num2: num2,
        //     Total: total
        // }
        // const url = "";
        // axios.post(url, data).then((result) => {
        //     alert(result.data)
        // }).catch((error) => {
        //     alert(error)
        // })
    }
    function Multiply() {
        setTotal(Number(num1) * Number(num2))
        // const data = {
        //     Num1: num1,
        //     Num2: num2,
        //     Total: total
        // }
        // const url = "";
        // axios.post(url, data).then((result) => {
        //     alert(result.data)
        // }).catch((error) => {
        //     alert(error)
        // })
    }
    function Divide() {
        setTotal(Number(num1) / Number(num2))
        // const data = {
        //     Num1: num1,
        //     Num2: num2,
        //     Total: total
        // }
        // const url = "";
        // axios.post(url, data).then((result) => {
        //     alert(result.data)
        // }).catch((error) => {
        //     alert(error)
        // })
    }
    const clear = () => {
        setNum1('');
        setNum2('');
        setTotal('')
    };
    
    return (
        <div>
            <h1>Calculator</h1>
            <div className="innerdiv">
            <label>Number-1:</label>
            <input type="text" name="num1" class="form-control" value={num1} onChange={(event) => {
                setNum1(event.target.value)
            }}>
            </input>
            <label>Number-2:</label>
            <input type="text" name="num2" class="form-control" value={num2} onChange={(event) => {
                setNum2(event.target.value)
            }}>
            </input>
            <label>Result:</label>
            <input type="text" class="form-control" value={total}></input>
           
            <button onClick={Add} class="btn btn-warning mt-4">Add</button>
            <button onClick={Subtract} class="btn btn-warning mt-4">Diff</button>
            <button onClick={Multiply} class="btn btn-warning mt-4">Multiply</button>
            <button onClick={Divide} class="btn btn-warning mt-4">Divide</button>
            <button onClick={clear} class="btn btn-warning mt-4">Clear</button>
            </div>
            

        </div>

    )


}

export default Calculator


