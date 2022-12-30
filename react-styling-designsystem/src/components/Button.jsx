/*
 ** BUTTON
 */

function Button(props) {
  const btn = props.children;
  return <button className="comp btn">{btn}</button>;
}

export default Button;
