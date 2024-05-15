import { m } from "@/utils"
import { useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion"
import { useEffect } from "react";

let clamp = (number: number, min: number, max: number) => Math.min(Math.max(number, min), max);

const useBoundedScroll = (bounds: number) => {
    const { scrollY } = useScroll();
    const value = useMotionValue(0);
    const scrollYBoundedProgress = useTransform(value, [0, bounds], [0, 1]);

    useEffect(() => {
        return scrollY.onChange(current => {
            const previous = scrollY.getPrevious() || 0;
            const delta = current - previous;
            const newValue = value.get() + delta;
            value.set(clamp(newValue, 0, bounds));
        })
    }, [scrollY, value])

    return { scrollYBoundedProgress }
}

export function Header() {
    const { scrollYBoundedProgress } = useBoundedScroll(100);
    const height = useTransform(scrollYBoundedProgress, [0, 1], [80, 50])
    const opacity = useTransform(scrollYBoundedProgress, [0, 1], [1, 0])
    const scale = useTransform(scrollYBoundedProgress, [0, 1], [1, 0.9])
    const backgroundOpacity = useTransform(scrollYBoundedProgress, [0, 1], [1, 0.1])

    const backgroundColor = useMotionTemplate`rgb(255 255 255 / ${backgroundOpacity})`;

    return <m.header style={{ height }} className="flex fixed inset-x-0">
        <m.div
            style={{
                backgroundColor
            }}
            className="mx-auto flex w-full max-w-3xl items-center justify-between backdrop-blur-md px-8 shadow">
            <m.p
                style={{ scale }}
                className="flex origin-left items-center text-xl font-semibold uppercase">
                <span className="-ml-1.5 inline-block -rotate-90 text-[10px] leading-[0]">
                    The
                </span>
                <span className="-ml-1 text-2xl tracking-[-.075em]">
                    Daily Bugle
                </span>
            </m.p>
            <m.nav
                style={{ opacity }}
                className="flex space-x-4 text-xs font-medium text-slate-400">
                <a href="#">News</a>
                <a href="#">Sports</a>
                <a href="#">Culture</a>
            </m.nav>
        </m.div>
    </m.header>
}