import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Description (){
    const history = useHistory();
    
    const pageChange = () => {
        history.push('/')
    }
    return(
        <>
        <button onClick={(pageChange)}>Cancel</button>
        </>
    )
}

export default Description;