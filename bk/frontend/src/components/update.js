import { useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import classes from './header.module.css'

const Update = () => {
    const [values, setValues] = useState({ name: '', email: '', age: 0 });
    const [errors, setErrors] = useState();
    const {id} = useParams()

    const navigate=useNavigate()

    const fetchingdata = async () => {
        const response = await fetch(`${window.location.origin}/api/user/getusers/${id}`)
        const result = await response.json();
        if (response.ok) {
            setValues({
                name: result.name,
                email: result.email,
                age: result.age
            })
        }
    }

    const submitHandler=async (e)=>{
        e.preventDefault();
        const response=await fetch(`${window.location.origin}/api/user/updateuser/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(values)
        })
        const result=await response.json()
        if(!response.ok){
            setErrors(result.error)
        }
        if(response.ok){
            setErrors(""); 
            navigate('/posts')
        }
    }
    const changeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        fetchingdata()
    },[])
    return (
        <form className={classes.container} onSubmit={submitHandler}>
            <div className={classes.subcontainer}>
                <h2 className={classes['text-align']}>Update Post</h2>
                <label>Name: </label>
                <input type='text' name='name' value={values.name} onChange={changeHandler} />
                <label>Email: </label>
                <input type='email' name='email' value={values.email} onChange={changeHandler} />
                <label>Age: </label>
                <input type='number' name='age' value={values.age} onChange={changeHandler} />
                <button>Update</button>
            </div>
        </form>
    )
}
export default Update;