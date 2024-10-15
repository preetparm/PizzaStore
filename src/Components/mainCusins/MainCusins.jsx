import React, { useState } from 'react'
import Image from '/src/Assets/Images'
import styles from './MainCusin.module.css';
import OrderButton from '../orderButton/OrderButton';
 const MainCusins = () => {
    
  return (
    <>
    <div className={styles.CusinMain1}>

             <h1 className={styles.HeadingMain}>Main cuisine</h1>
             <div className={styles.CusinMain}>
        <div className={styles.card}>
  <img  className={styles.pics} src={Image['masroomMeat']} alt="Avatar" />
  <div className={styles.container}>
    <h4><b>Meat & Mashrrom Pizza Large</b></h4>
    <p>$16</p>
    <OrderButton price={16}/>
  </div>
</div>


<div className={styles.card}>
  <img className={styles.pics} src={Image['peproniPizza']} alt="Avatar" />
  <div className={styles.container}>
    <h4><b>peproni Pizza Large</b></h4>
    <h3>$15</h3>
    <OrderButton price={15}/>

    
  </div>
</div>

<div className={styles.card}>
  <img className={styles.pics} src={Image['pizza-with-veggies-ham']} alt="Avatar" />
  <div className={styles.container}>
    <h4><b>Veggie Ham Pizaa Large</b></h4>
    <p>$20</p>
    <OrderButton price={20}/>
  </div>
</div>

<div className={styles.card}>
  <img className={styles.pics} src={Image['shrimp-salmon-olivesPizza']} alt="Avatar" />
  <div className={styles.container}>
    <h4><b>Shrimp Pizza Small</b></h4>
    <p>$18</p>
    <OrderButton price={18}/>
  </div>
</div>

    </div>
    </div>

    </>
  )
}
export default MainCusins;
