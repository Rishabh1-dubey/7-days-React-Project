import React, { useState } from "react";

const SelctItem = () => {
  const item = ["apple", "banana", "kela", "santara"];

  const [selectedItem, setSelctedItem] = useState([]);

  const onChangeSelect = (item) => {
    if (selectedItem.includes(item)) {
      setSelctedItem(selectedItem.filter((i) => i !== item));
    } else {
      setSelctedItem([...selectedItem, item]);
    }
  };

  const selectAll = () => {
    if (selectedItem.length === item.length) {
      setSelctedItem([]);
    } else {
      setSelctedItem(item);
    }
  };

  return (
    <div>
      <h2>React pratice</h2>
      <button onClick={selectAll}>
        {selectedItem.length === item.length ? "select all" : "Disselect all"}
      </button>
      <ul>
        {item.map((item) => (
          <li key={item}>
            <input
              type="checkbox"
              checked={selectedItem.includes(item)}
              onChange={() => onChangeSelect(item)}
            />
            {item}
          </li>
        ))}
      </ul>

      <h3>Selcted Item</h3>
      {selectedItem.length >0 ? (
        <ul>{selectedItem.map(item=><li key={item}>{item}</li>)}</ul>
      ):(<p>no item seletec</p>)}
    </div>
  );
};

export default SelctItem;
