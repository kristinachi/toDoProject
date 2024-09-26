import cx from "classnames";

export default function Container({ children, className }: ContainerProps) {
  return <div className={cx("container", className)}>{children}</div>;
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
