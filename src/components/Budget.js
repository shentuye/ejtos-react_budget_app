import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch,remaining  } = useContext(AppContext);

    function setBudget(e) {
        e <= 20000?
        dispatch({
            type: 'SET_BUDGET',
            payload: e,
        }):alert("The upper limit value is 20,000!");
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
            <input
                required='required'
                type='number' 
                step={10}               
                value={budget}
                style={{ marginLeft: '2rem' , size: 10}}
                onChange={(event) => setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};

export default Budget;
