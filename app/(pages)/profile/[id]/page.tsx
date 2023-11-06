import React, { useState, useEffect } from 'react';

const userProfile = ({params}: any) => {

    return (
        <div>
            <h1>userProfile</h1> 
            <p className='text-[1.2em]'>{params.id}</p>
        </div>
    )
}


export default userProfile;