import React, { useState } from 'react'
import styles from  './OrderButton.module.css';

export const OrderButton = (props) => {
  const [count,setcount]=useState(1);
  const increase=()=>{
    setcount(c=>c+1)

  }
  const decrease=()=>{
    setcount(c=>c>1?c-1:1)

  }
  return (
    <div>
    <div>

    <h3><button type="button" className={styles.minus} onClick={decrease}>➖ </button></h3>
    <input type="textArea" value={count} />
    <h3><button type="button" className={styles.minus} onClick={increase}>➕ </button></h3>
    <h3>Total Price: CAD: {props.price*count}</h3>
    <button type="Button">Order Now</button>

    </div>

    </div>
  )
}
export default OrderButton;


