import React, { useState } from "react";
import ListItem from "./ListItem";

const List = ({ list, setList }) => {
  const [newItem, setNewItem] = useState("");

  const styles = {
    list: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "4px",
    },
    input: {
      fontSize: "1.05em",
    },
    button: {
      backgroundColor: "#0019f8",
      color: "white",
      borderRadius: "4px",
      fontSize: "1.15em",
      padding: "4px 12px",
      border: "none",
      marginLeft: "8px",
    },
  };

  const removeItem = (item) => {
    const newList = list.filter((i) => i !== item);
    setList(newList);
  };

  const setItem = (indx, newItem) => {
    const newList = [...list];
    newList[indx] = newItem;
    setList(newList);
  };

  const addItem = (e) => {
    e.preventDefault();
    const newList = [...list, { value: newItem, checked: false }];
    setList(newList);
    setNewItem("");
  };

  return (
    <div className="list" style={styles.list}>
      <form className="list-input" onSubmit={addItem}>
        <input
          name="value"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          style={styles.input}
        />
        <button style={styles.button}>Add</button>
      </form>

      <div className="list-content">
        {list.map((item, indx) => (
          <ListItem
            key={indx}
            item={item}
            handleCheckClick={(e) =>
              setItem(indx, { ...item, checked: e.target.checked })
            }
            handleDelete={() => removeItem(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
