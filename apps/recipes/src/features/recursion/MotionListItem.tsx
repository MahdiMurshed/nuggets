import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { m } from "../../utils";

type Props = PropsWithChildren<ComponentPropsWithoutRef<"li">>;
const MotionListItem = ({ children, className }: Props) => {
  return (
    <m.li
      initial={{
        opacity: 0,
        height: 0,
      }}
      animate={{
        opacity: 1,
        height: "auto",
      }}
      exit={{
        opacity: 0,
        height: 0,
      }}
      className={className}
    >
      {children}
    </m.li>
  );
};

export default MotionListItem;
