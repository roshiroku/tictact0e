import classNames from "classnames";
import ButtonBase from "@mui/material/ButtonBase";

/**
 * @param {Object} props
 * @param {string} [props.color]
 * @param {boolean} [props.primary=false]
 * @param {boolean} [props.secondary=false]
 * @param {boolean} [props.outlined=false]
 * @param {boolean} [props.rounded=false]
 * @param {boolean | "solid"} [props.ripple=false]
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.className]
 */
export default function Button({
  color = undefined,
  primary = false,
  secondary = false,
  outlined = false,
  rounded = false,
  ripple = false,
  disabled = false,
  className,
  children,
  ...props
}) {
  return (
    <ButtonBase
      className={classNames(className, { "!rounded-md": rounded })}
      disabled={disabled}
      disableRipple={!ripple}
      TouchRippleProps={{
        classes: { rippleVisible: ripple === "solid" ? "!opacity-100" : undefined },
        className: classNames({ "text-primary": primary, "text-secondary": secondary }),
      }}
      {...props}
    >
      <span
        className={classNames(
          className,
          "relative z-10 px-3 py-1 rounded-[inherit] hover:bg-opacity-5",
          {
            "text-primary": color === undefined && primary,
            "text-secondary": color === undefined && secondary,
            "border-primary": outlined && primary,
            "border-secondary": outlined && secondary,
            "hover:bg-primary": primary,
            "hover:bg-secondary": secondary,
            "border-2": outlined,
          }
        )}
        style={{ color }}
      >
        {children}
      </span>
    </ButtonBase>
  );
}
