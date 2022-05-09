import React from "react";

const ListItem = ({ item, handleDelete, handleCheckClick }) => {
  const styles = {
    item: {
      display: "flex",
      alignItems: "center",
      margin: "4px",
    },
    button: {
      color: "white",
      backgroundColor: "black",
      padding: "4px 16px",
      marginLeft: "16px",
      fontSize: "1.15em",
      border: "none",
      borderRadius: "4px",
    },
    content: {
      fontSize: "1.15em",
    },
    completed: {
      color: "gray",
      textDecoration: "line-through",
    },
    checkbox: {
      marginLeft: "8px",
    },
  };

  return (
    <div className="item" style={styles.item}>
      <span
        className="content"
        style={
          item.checked
            ? { ...styles.completed, ...styles.content }
            : styles.content
        }
      >
        {item.value}
      </span>
      <input
        type="checkbox"
        name="isCompleted"
        checked={item.checked}
        onChange={handleCheckClick}
        style={styles.checkbox}
      />
      <button style={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default ListItem;
