import { cn, m } from "@/utils";
import { CheckIcon } from "@/components/1-steps/checkIcon";
type Status = "active" | "inactive" | "complete";

export function Step({
    step,
    currentStep,
}: {
    step: number;
    currentStep: number;
}) {

    function determineStatus(): Status {
        if (currentStep === step) {
            return "active";
        } else if (currentStep < step) {
            return "inactive";
        } else {
            return "complete";
        }
    }
    let status = determineStatus();

    return (
        <m.div animate={status} className="relative">
            <m.div className="absolute inset-0 bg-blue-200 rounded-full"
                variants={{
                    active: {
                        scale: 1,
                        transition: {
                            delay: 0,
                            duration: 0.2,
                        }
                    },
                    complete: {
                        scale: 1.25
                    }
                }}
                transition={{
                    delay: 0.2,
                    duration: 0.6,
                    type: "tween",
                    ease: "circInOut"
                }}
            ></m.div>
            <m.div
                initial={false}
                transition={{
                    duration: 0.2
                }}
                variants={{
                    inactive: {
                        backgroundColor: "var(--white)",
                        borderColor: "var(--slate-200)",
                        color: "var(--slate-400)"
                    },
                    active: {
                        backgroundColor: "var(--white)",
                        borderColor: "var(--blue-500)",
                        color: "var(--blue-500)"
                    },
                    complete: {
                        backgroundColor: "var(--blue-500)",
                        borderColor: "var(--blue-500)",
                    }
                }}
                className={cn("relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold"
                )}
            >
                <div className="flex items-center justify-center">
                    {status === "complete" ? (
                        <CheckIcon className="h-6 w-6 text-white" />
                    ) : (
                        <span>{step}</span>
                    )}
                </div>
            </m.div>
        </m.div>
    );
}
