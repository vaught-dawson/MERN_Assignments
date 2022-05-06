const Box = (props) => {
  const style = {
    width: `${props.size}px`,
    height: `${props.size}px`,
    backgroundColor: props.color,
  };
  return <div style={style}></div>;
};

export default Box;
