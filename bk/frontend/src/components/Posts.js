import { useEffect, useState } from "react";
import {Link } from 'react-router-dom'
import Deletepost from './deletepost'

const Posts = () => {
    const [data, setData] = useState();
    const [errors, setErrors] = useState();
    let a;
    const fetchingdata = async () => {
        const response = await fetch(`${window.location.origin}/api/user/getusers`);
        const result = await response.json();
        if (!response.ok) {
            setErrors(result.error);
        }
        if (response.ok) {
            setData(result);
            setErrors("");
        }
    };

    useEffect(() => {
        fetchingdata();
    }, []);

    const handleDel=(id)=>Deletepost(id,setErrors,fetchingdata); 

    return (

        <div className="container my-2">
            <div className="row" style={{ marginTop: "90px" }}>
                <div className="col-3">
                    {data?.map((user) => (<div className="card" key={user._id}>
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                            <p className="card-text">{user.age}</p>
                            <div className="card-link">
                                {/* {a='update/'+user._id} */}
                                {/* <Link to={`/posts/update/:id`}>Edit</Link> */}
                                <Link to={`/posts/update/${user._id}`}>Edit</Link>
                            </div>
                            <div className="card-link" style={{cursor:"pointer"}} onClick={()=>handleDel(user._id)}>
                                Delete
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Posts;
