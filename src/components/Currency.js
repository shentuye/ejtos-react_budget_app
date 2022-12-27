import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    
    const option_currency = [
        {value: "$", label: "$ Dollar"},
        {value: "£", label: "£ Pound"},
        {value: "€", label: "€ Euro"},
        {value: "₹", label: "₹ Ruppee"},
    ];

    let option_text = option_currency.map((op)=>{
        let label = "Currency (" + op.label + ")";;
        let selected ="";
        if (op.value === currency){                        
            selected = true
        }  
        return <option value={op.value}  selected={selected}>
               {label}            
        </option>
    });

    function setCurrency(e){
        console.log(e);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e,
        });
    }

    return (
        <div className='alert alert-primary'>
            <select 
                class="selectpicker"
                style={{border: 0, 
                       "background-color": "transparent",  
                        marginLeft: '2rem' , size: 10}}
                required='required'  
                onChange={(event) => setCurrency(event.target.value)}>
                {option_text}
            </select>
        </div>
    );
};

export default Currency;