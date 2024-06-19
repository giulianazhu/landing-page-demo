import styles from "./Box.module.css";

export default function Box({ type, headline, children: text }) {
  return (
    <div className={`${styles.box} ${styles[type]}`}>
      <Box.Headline>{headline}</Box.Headline>
      <Box.Text>{text}</Box.Text>
    </div>
  );
}

function Headline({ children }) {
  return <h3>{children}</h3>;
}

function Text({ children }) {
  return <p>{children}</p>;
}

Box.Headline = Headline;
Box.Text = Text;
