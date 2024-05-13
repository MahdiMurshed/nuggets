import { m } from "@/utils"
import { useMotionValue, useScroll } from "framer-motion"
import { useEffect } from "react";

export function Header() {
    const { scrollY } = useScroll();
    const height = useMotionValue(80);

    useEffect(() => {
        return scrollY.onChange(current => {
            const previous = scrollY.getPrevious() || 0;
            const delta = current - previous;

            if (delta > 0) {
                //shrink the header
                height.set(Math.max(50, height.get() - delta * 0.1))
            } else {
                //expand the header
                height.set(Math.min(80, height.get() - delta * 0.1))
            }
        })
    })
    return <m.header style={{ height }} className="flex h-20 fixed inset-x-0">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-8 bg-white shadow">
            <p className="flex origin-left items-center text-xl font-semibold uppercase">
                <span className="-ml-1.5 inline-block -rotate-90 text-[10px] leading-[0]">
                    The
                </span>
                <span className="-ml-1 text-2xl tracking-[-.075em]">
                    Daily Bugle
                </span>
            </p>
            <nav className="flex space-x-4 text-xs font-medium text-slate-400">
                <a href="#">News</a>
                <a href="#">Sports</a>
                <a href="#">Culture</a>
            </nav>
        </div>
    </m.header>
}