import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    function setBudget(e) {
        if(e <= 20000){
            if (e > totalExpenses){
                dispatch({
                    type: 'SET_BUDGET',
                    payload: e,
                });
            }else{
                alert("You cannot reduce the budget lower than the spending");
            }
        }else{
            alert("The upper limit value is 20,000!");
        };
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input
                required='required'
                type='number' 
                step={10}               
                value={budget}
                style={{ size: 10}}
                onChange={(event) => setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};

export default Budget;
