/**
 * COMPONENT WITH HTML ATTRIBUTES
 */

function Velkommen(props) {
  const { navn } = props;
  return (
    <div className="comp velkommen">
      <h2 className={"border"}>Velkommen, {navn} !!</h2>
    </div>
  );
}

export default Velkommen;
