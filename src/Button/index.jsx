export function Button(props) {
  return (
    <div>
      <span>props: {props.text}</span>
      <br />
      <button>{props.text}</button>
      <br />
      {props.children}
    </div>
  );
}
