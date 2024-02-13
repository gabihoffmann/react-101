const code = `export function Component(props) {
  return (
    <div>
        <span> props: {props.text}</span>
        
        <button>{props.text}</button>
        
        {props.children}
      </div>
    );
  }`;

export function Component(props) {
  return (
    <div className="container">
      <div className="box">
        <span> props: {props.text}</span>
        <br />
        <br />
        <button>{props.text}</button>
        <br />
        <br />
        {props.children}
      </div>
      <div className="code">
        <div>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
