import React from 'react'
import Image from '/src/Assets/Images'
import styles from './pizzaBaking.module.css'


 const PizaBaking = ({items,isChecked}) => {
    console.log(items);
    const flating=items.flatMap(a=>a.value);
   // console.log(flating);
    console.log(isChecked);
    
    const flt=flating.filter(itm=>isChecked[itm.name]=== true)
    console.log(flt);
    
    
    return(
    <>
    {/*<div>{flt.map(m => m.name)}</div> */}
    
<div className={styles.mainContainer}>
<img className={styles.imageContainer} src={Image['panmain']} />
  {Object.entries(Image)
    .filter(([key]) => 
      flt.some(item => item.name.replace(/\s+/g, '').toLowerCase() === key.toLowerCase()) // Remove spaces from flt names
    )
    .map(([key, src]) => (
      <img className={styles.imageContainer} key={key} src={src} alt={key} />
    ))}
</div>

  </>
)
}

export default PizaBaking;