import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function HeaderWallet(props) {
    const [total, setTotal] = useState(0);


    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < props.expense.length; i++) {
            sum = sum + props.expense[i].money * (props.expense[i].expense == true ? -1 : 1)
        }
        setTotal(sum)
    }, [props.expense])

    return (
        <div className='cash'>Cash : {total.toLocaleString()} $</div>
    )
}

export default HeaderWallet