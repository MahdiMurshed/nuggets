import { cn, m } from "@/utils";
import { CheckIcon } from "@/components/1-steps/checkicon_begin";
type Status = "active" | "inactive" | "complete";

export function StepBegin({
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
        <div className="relative">
            {/* <div className="absolute inset-0 bg-blue-200 rounded-full scale-125" /> */}
            <div
                className={cn("relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold", {
                    "border-slate-200 bg-white text-slate-400": status === "inactive",
                    "border-blue-500 bg-white text-blue-500": status === "active",
                    "border-blue-500 bg-blue-500": status === "complete",
                })}
            >
                <div className="flex items-center justify-center">
                    {status === "complete" ? (
                        <CheckIcon className="h-6 w-6 text-white" />
                    ) : (
                        <span>{step}</span>
                    )}
                </div>
            </div>
        </div>
    );
}