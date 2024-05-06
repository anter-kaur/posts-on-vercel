import classes from './header.module.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const initialState={
    name:'',
    email:'',
    age:0
}

const AddPost=()=>{
    const Navigate=useNavigate();
    const [inputs,setInputs]=useState(initialState);
    const [error,setError]=useState("");
    const changeHandler=(e)=>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
        const response=await fetch(`${window.location.origin}/api/user/adduser`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(inputs)
        })
        const result=await response.json();
        if(!response.ok){
            setError(result.error)
        }
        if(response.ok){
            setInputs(initialState)
            setError("");
        }
        Navigate('/posts')
    }

    return(
        <form className={classes.container} onSubmit={submitHandler}>
            <div className={classes.subcontainer}>
            <h2 className={classes['text-align']}>Add Post</h2>
            <label>Name: </label>
            <input type='text' name='name' value={inputs.name} onChange={changeHandler} />
            <label>Email: </label>
            <input type='email' name='email' value={inputs.email} onChange={changeHandler} />
            <label>Age: </label>
            <input type='number' name='age' value={inputs.age} onChange={changeHandler} />
            <button>Add</button>
            </div>
        </form>
    )
}

export default AddPost;