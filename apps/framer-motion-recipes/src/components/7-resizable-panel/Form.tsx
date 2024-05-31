import { AnimatePresence, MotionConfig } from "framer-motion";
import { ComponentPropsWithoutRef, FormEvent, FormEventHandler, createContext, useContext, useState } from "react";
import { m } from "@/utils";
import { Spinner } from "./Spinner";
import { CheckIcon } from "@heroicons/react/solid";
let transition = { type: "ease", ease: "easeInOut", duration: 1 };

let formContext = createContext({ status: '' });

export async function delay(ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

type Props = ComponentPropsWithoutRef<"form"> & {
    afterSave: () => void;
    onSubmit: () => Promise<void>;
}
export function Form({ onSubmit, afterSave, children, ...props }: Props) {
    let [status, setStatus] = useState("idle");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("saving");
        await onSubmit();
        setStatus("success");
        await delay(1250);
        afterSave();
    }

    return (
        <formContext.Provider value={{ status }}>
            <form onSubmit={handleSubmit} {...props}>
                <fieldset disabled={status !== "idle"}>{children}</fieldset>
            </form>
        </formContext.Provider>
    );
}

type ButtonProps = ComponentPropsWithoutRef<"button">
Form.Button = function FormButton({ children, className, ...rest }: ButtonProps) {
    let { status } = useContext(formContext);

    let disabled = status !== "idle";

    return (
        <MotionConfig transition={{ ...transition, duration: 0.15 }}>
            <button
                type="submit"
                disabled={disabled}
                className={`${className} relative transition duration-200 ${disabled ? "bg-opacity-80" : "hover:bg-opacity-80"
                    }`}
                {...rest}
            >
                <AnimatePresence mode="wait">
                    {status === "saving" && (
                        <m.div
                            key="a"
                            initial={false}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex justify-center py-2"
                        >
                            <Spinner />
                        </m.div>
                    )}

                    {status === "success" && (
                        <m.div
                            key="b"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 flex justify-center py-2"
                        >
                            <CheckIcon className="h-full" />
                        </m.div>
                    )}
                </AnimatePresence>
                <span className={status === "idle" ? "" : "invisible"}>{children}</span>
            </button>
        </MotionConfig>
    );
};