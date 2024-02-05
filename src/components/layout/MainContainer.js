import classNames from "classnames";

export default function MainContainer({ children, className = "" }) {
  return (
    <div className={classNames("w-full max-w-[900px] mx-auto p-4", className)}>
      {children}
    </div>
  );
}
