import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import DailyExpense from './DailyExpense'

function ListExpense(props) {

    const [dailyExpense, setDailyExpense] = useState([])



    useEffect(() => {
        let data = {};
        for (let i = 0; i < props.expense.length; i++) {
            let date = props.expense[i].date;
            if (!data[date]) {
                data[date] = [props.expense[i]];
            } else {
                data[date].push(props.expense[i]);
            }
        }

        let list = [];
        for (const key in data) {
            list.push(data[key])
        }
        setDailyExpense(list)



    }, [props.expense])
    return (
        <div>
            {
                dailyExpense.map(function (expense, index) {
                    return <DailyExpense key={index} daily={expense}></DailyExpense>
                })
            }

        </div>
    )
}

export default ListExpense