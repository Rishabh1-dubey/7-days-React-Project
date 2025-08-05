// Multiple Checkboxes (Select/Deselect All)Create a list of checkboxes with an option to Select All / Deselect All. Show which items are selected.

import React, { useState } from "react";

const items = ["Apple", "Banana", "Orange", "Kiwi"];

const [selectedItems, setSelectedItems] = useState([]);

const onHandleChnage = (item) => {
  if (selectedItems.includes(item) === items.length) {
    selectedItems.filter((i) => i != item);
    setSelectedItems([]);
  } else {
    setSelectedItems(item);
  }
};

const selectAll = () => {
  if (selectedItems === items.length) {
    setSelectedItems([]);
  } else {
    setSelectedItems(items);
  }
};


const SelctItem = () => {
  return (
    <div>
      <h2>Selected item Code</h2>
      <button onClick={selectAll}>
        {selectAll ? "DisSelect All" : "Select All"}
      </button>
      <ul>
        {items.map((item) => {
          <li>
            <input
              type="check"
              checked={onHandleChnage ? "checked" : "unchecked"}
            />
          </li>;
        })}
      </ul>
    </div>
  );
};

export default SelctItem;
