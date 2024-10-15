import React, { useState } from 'react';
import styles from './Itemlist.module.css';
import PizaBaking from '../PizzaBaking/PizaBaking';
import Image from '/src/Assets/Images'
import OrderButton from '../orderButton/OrderButton';


export const Itemlist = () => {
  const [isChecked, setChecked] = useState({}); // Initialize checked state as an object
  const [totalPrice, setTotalPrice] = useState(0);

  const SelectedShit = (index, itemName, itemPrice, categoryKey) => {
    setChecked(prev => {
      let newCheckedState = { ...prev };

      // For "dough" (radio buttons), ensure only one can be selected
      if (categoryKey === "dough") {
        // Reset all dough items to false
        items.find(i => i.key === "dough").value.forEach(item => {
          newCheckedState[item.name] = false;
        });
      }

      // Toggle the checked state of the selected item
      newCheckedState[itemName] = !newCheckedState[itemName];

      // Calculate the new total price of checked items
      const newTotalPrice = items
        .flatMap(category => category.value)
        .reduce((acc, item) => {
          return newCheckedState[item.name] ? acc + item.price : acc; // Sum prices of checked items
        }, 0);

      setTotalPrice(newTotalPrice); // Update total price state
      return newCheckedState; // Return updated checked state
    });
  };

  const items = [
    {
      key: "dough",
      value: [
        { name: "Fluor", price: 5 },
        { name: "White Fluor", price: 8 },
        { name: "Mix Fluor", price: 7 }
      ]
    },
    {
      key: "sauce",
      value: [
        { name: "Tomato Sauce", price: 10 },
        { name: "Soya Sauce", price: 3 },
        { name: "Yellow Sauce", price: 4 }
      ]
    },
    {
      key: "topping",
      value: [
        { name: "Mashroom", price: 6 },
        { name: "Mozzrela Cheese", price: 5 },
        { name: "Peproni", price: 4 }
      ]
    }
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.listItem}>
      
      {items.map(itemCategory => (
        <ul  key={itemCategory.key}>
          <li>{itemCategory.key}</li>
          {itemCategory.value.map((itemz, index) => (
            <label className={styles.allItems} key={index}>
              {itemCategory.key === "dough" ? ( // Check if category is "dough"
                <>
                  <input 
                    type="radio" // Use "radio" for dough
                    name="dough" // All dough radio buttons must share the same name for single selection
                    onChange={() => SelectedShit(index, itemz.name, itemz.price, itemCategory.key)} 
                    checked={!!isChecked[itemz.name]} 
                  />
                  {itemz.name} - ${itemz.price}
                </>
              ) : (
                <>
                  <input 
                    type="checkbox" 
                    onChange={() => SelectedShit(index, itemz.name, itemz.price, itemCategory.key)} 
                    checked={!!isChecked[itemz.name]} 
                  />
                  {itemz.name} - ${itemz.price}
                </>
              )}
            </label>
          ))}
        </ul>
      ))}
      </div>
      <div className={styles.makeownpizza}>

  <h1 className={styles.text}>
<span className={`${styles.letter} ${styles.letter-1}`}>Make</span>
<span className={`${styles.letter} ${styles.letter-2}`}>Your</span>
<span className={`${styles.letter} ${styles.letter-3}`}>Own</span>
<span className={`${styles.letter} ${styles.letter-4}`}> Pizza</span>
</h1>
        
        
        
        
        
        
        
        </div>
        <div className={styles.arrow}> Ingridients </div>
        <div className={styles.customprice}>
        
        <OrderButton price={totalPrice} />
        </div>
      <div className={styles.baking}>
      <PizaBaking items={items} isChecked={isChecked}  />
      </div>
      <div className={styles.chef}> <img className={styles.chefImage} src={Image['Pizza-chef-smilling']} />Hello Chef</div>
    </div>
    
  );
};
