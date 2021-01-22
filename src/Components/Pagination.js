import React,{useState,useEffect} from "react";

const Pagination =({showPerPage,onPaginationChange,total})=>{
    const [counter,setCounter]=useState(1); 
     

     useEffect(()=>{
       
        const value = showPerPage*counter;
        
        onPaginationChange(value-showPerPage,value)
     },[counter]);

     const onButtonClick =(type)=>{
         if(type==="prev")
         {
             if(counter===1)
             {
                 setCounter(1);
             }
             else{
                 setCounter(counter-1);
             }
         }
         else if(type==="next")
         {
             if(Math.ceil(total/showPerPage)===counter)
             {
                 setCounter(counter);
             }
             else{
                 setCounter(counter+1);
             }
         }
     };
    return(
        <div className="row d-flex justify-content-center mt-3">
            <div className="col-5 d-flex justify-content-evenly">
            <button className="btn btn-success" onClick={()=>{
                onButtonClick("prev");
            }}>Previous</button>
            <button className="btn btn-success " onClick={()=>
            {
                onButtonClick("next");
            }}>Next</button>
            </div>
        </div>

    );
}

export default Pagination;