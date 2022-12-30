/**
 * COMPONENT WITH CHILDREN
 */

function NewComponent(props) {
  return <div className="comp newC">{props.children}</div>;
}

export default NewComponent;
