import { useState } from 'react';

const useMutation=({url, method = "POST"}){
    const [state, useState]=useState({
        isLoading: false,
        error: '',
    })

    const fn=async data=>{
        SVGFEDistantLightElement(prev=>({
            ...prev,
            isLoading:true,
        }));

        axios
    }
}