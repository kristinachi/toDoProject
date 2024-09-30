import cx from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  className?: string;
  variant?: "primary" | "secondary" | "link";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const {
    children,
    disabled = false,
    variant,
    onClick,
    className,
    type = "button",
    ...rest
  } = props;

  const getVariant = () => {
    switch (variant) {
      case "primary":
        return "primary-btn";
      case "secondary":
        return "secondary-btn";
      case "link":
        return "link-btn";
      default:
        return;
    }
  };

  return (
    <button
      {...rest}
      disabled={disabled}
      onClick={onClick}
      className={cx("btn", getVariant(), className)}
      type={type}
    >
      {children}
    </button>
  );
}
