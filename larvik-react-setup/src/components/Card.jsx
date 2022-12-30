function Card(props) {
  const { tittel, tekst } = props;

  return (
    <article>
      <h1>{tittel}</h1>
      <p>{tekst}</p>
    </article>
  );
}

export default Card;
