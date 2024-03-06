interface Props {
  children?: React.ReactNode;

  title: string;
}
export function ChildrenA({ children, title }: Props) {
  return (
    <div className="">
      <div className="box">
        <span>children component - {title}</span>
        {children}
      </div>
    </div>
  );
}
