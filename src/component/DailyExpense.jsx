import React from 'react'

function DailyExpense(props) {
    return (
        <div>
            {props.daily.map(function (value, index) {
                return (
                    < div key={index} className={`item-content ${value.expense ? 'red' : 'dodgerblue'}`} >
                        <div>{value.note}</div>
                        <div>{value.expense ? '-' + value.money.toLocaleString() : '+' + value.money.toLocaleString()}</div>
                    </div>
                )
            })}
        </div >
    )
}

export default DailyExpense