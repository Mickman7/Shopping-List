import React, { useState } from 'react';

function ShoppingList() {
  const [list, setList] = useState([]);

  function handleAddShopping() {
    const newList = document.getElementById('shoppingInput').value;
    document.getElementById('shoppingInput').value = '';

    setList((l) => [...l, newList]); //The ...l is short for ...list and is used to list out the already stated elements of the array before adding a new value
  }

  function handleRemoveShopping(index) {
    setList(list.filter((_, i) => i !== index)); //filter() creates a new array  filled with elements that pass a test provided by a function

    //The _ just means that the paramenter is not used
  }

  return (
    <div className="shoppinglist-container">
      <h1 className="title">Shopping list</h1>

      <div className="input-container">
        <div className="input-box">
          <input type="text" id="shoppingInput" placeholder="Add Item" />
          <button onClick={handleAddShopping} className="btn">
            +
          </button>
        </div>
      </div>

      <ul>
        {list.map((list, index) => (
          <li key={index}>
            {list}
            <button
              onClick={() => handleRemoveShopping(index)}
              className="remove-btn"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
    //map() create a new array with the old value changed depending what the parameters are
  );
}

export default ShoppingList;
