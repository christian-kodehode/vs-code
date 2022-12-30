function StyledInline() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "var(--color-primary-400)",
          color: "var(--color-primary-600)",
          padding: "10px",
          textShadow:
            "0.2rem 0 var(--color-primary-500), -0.2rem 0 var(--color-primary-500), 0 0.2rem var(--color-primary-500), 0 -0.2rem var(--color-primary-500), 0.1rem 0 var(--color-primary-500), -0.1rem 0 var(--color-primary-500), 0 0.1rem var(--color-primary-500), 0 -0.1rem var(--color-primary-500)",
        }}
      >
        Some title
      </h1>
      <h1
        style={{
          backgroundColor: "var(--color-secondary-400)",
          color: "var(--color-secondary-600)",
          padding: "10px",
        }}
      >
        Some title
      </h1>
    </div>
  );
}

export default StyledInline;
