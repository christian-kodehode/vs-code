/**
 * COMPONENT WITH HTML ATTRIBUTES
 */

function Velkommen(props) {
  const { navn } = props;
  return <h2 className={"border"}>Velkommen, {navn}</h2>;
}

export default Velkommen;
