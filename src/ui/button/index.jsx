function Button({ children, className, ...rest }) {
  return <button {...{ className, ...rest }}>{children}</button>;
}

export function OutlineButton({ children, onClick = () => {} }) {
  return (
    <Button
      {...{
        onClick,
        className: "py-2 px-6 text-blue-600 border-blue-600 border-[3px]",
      }}>
      {children}
    </Button>
  );
}

export function SolidButton({ children, onClick }) {
  return (
    <Button
      {...{
        onClick,
        className:
          "py-2 px-6 text-white bg-blue-600 border-transparent border-[3px]",
      }}>
      {children}
    </Button>
  );
}
