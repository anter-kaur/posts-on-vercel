
const Deletepost=async(id,setErrors,fetchingdata)=>{
    
    const response=await fetch(`${window.location.origin}/api/user/deleteuser/`+id,{
        method:"DELETE"
    })
    const result=await response.json()
    if(!response.ok){ 
        setErrors(result.error)
    }
    if(response.ok){
        setTimeout(()=>{
            setErrors("")
            fetchingdata()
        },1000) 
    }
}

export default Deletepost;