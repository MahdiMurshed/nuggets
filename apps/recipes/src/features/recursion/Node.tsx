import { ChevronRight, File, Folder } from "lucide-react";
import { type Node } from "./types";
import { memo, useState } from "react";
import { cn, m } from "../../utils";
import { AnimatePresence } from "framer-motion";
import MotionListItem from "./MotionListItem";

type Props = {
  node: Node;
};
const Node = ({ node }: Props) => {
  const { children, name } = node;
  const [expanded, setExpanded] = useState(false);

  const isFolder = typeof children !== "undefined";
  const hasChildren = isFolder && children?.length > 0;

  const Icon = isFolder ? Folder : File;

  return (
    <MotionListItem className={cn(!hasChildren && "pl-4")}>
      <div className="flex items-center gap-1">
        <button
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="focus:outline-none"
        >
          {hasChildren && (
            <ChevronRight
              size={16}
              className={cn("transition-transform", expanded && "rotate-90")}
            />
          )}
        </button>
        <Icon size={16} />
        <span>{name}</span>
      </div>
      <AnimatePresence initial={false}>
        {expanded && hasChildren && (
          <m.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pl-4"
          >
            {children.map((child) => (
              <Node key={child.name} node={child} />
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </MotionListItem>
  );
};

export default memo(Node);
