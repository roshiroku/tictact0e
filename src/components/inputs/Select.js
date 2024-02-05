import classNames from "classnames";

export default function Select({
  color = undefined,
  primary = false,
  secondary = false,
  outlined = false,
  rounded = false,
  disabled = false,
  className,
  children,
  ...props
}) {
  return (
    <select
      className={classNames(
        className,
        "px-3 py-1 bg-transparent hover:bg-opacity-5 cursor-pointer",
        {
          "text-primary": color === undefined && primary,
          "text-secondary": color === undefined && secondary,
          "border-primary": outlined && primary,
          "border-secondary": outlined && secondary,
          "hover:bg-primary": primary,
          "hover:bg-secondary": secondary,
          "border-2": outlined,
          "rounded-md": rounded,
        }
      )}
      style={{ color }}
      {...props}
    >
      {children}
    </select>
  );
}
