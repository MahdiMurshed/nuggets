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
        <div
            className={cn("flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold", {
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
    );
}
