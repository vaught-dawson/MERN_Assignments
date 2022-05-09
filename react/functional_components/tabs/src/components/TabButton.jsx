const TabButton = ({
  name,
  index,
  setActiveTab,
  isActive,
  callback = () => null,
}) => {
  const styles = {
    padding: "4px 12px",
    color: isActive ? "white" : "black",
    backgroundColor: isActive ? "black" : "white",
    border: "1px solid black",
  };

  const handleClick = (e) => {
    e.preventDefault();
    setActiveTab(index);
    callback();
  };

  return (
    <button className="tab-button" onClick={handleClick} style={styles}>
      {name}
    </button>
  );
};

export default TabButton;
