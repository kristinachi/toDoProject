import cx from "classnames";
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={cx("container", className)}>{children}</div>;
}
