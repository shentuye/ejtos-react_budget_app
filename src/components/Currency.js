import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    
    const option_currency = [
        {value: "$", label: "$ Dollar"},
        {value: "£", label: "£ Pound"},
    ];

    function setCurrency(e){

    }

    return (
        <div className='alert alert-primary'>
            <select 
                className="selectpicker"
                style={{"background-color":"transparent",  marginLeft: '2rem' , size: 10}}
                required='required'     
                noResultsText=""    
                onChange={(event) => setCurrency(event.target.value)}>
                {option_currency.map((op)=>{
                    let label = "";
                    let selected ="";
                     if (op.value === currency){
                        label = "Currency (" + op.label + ")";
                        selected = true
                    }else{
                        label =op.label;
                    }     
                    return <option value={op.value} selected={selected}>
                           {label}            
                    </option>
                })}
            </select>
        </div>
    );
};

export default Currency;