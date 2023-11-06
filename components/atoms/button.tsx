 'use client'
 import React from "react";
 
 const Button = (props: any) => {
    return(
        <div>
            <button className="w-[200px] md:w-[350px] my-4 py-2 px-4 border rounded-md bg-primary text-white">{props.text}</button>
        </div>
    )
};

export default Button;