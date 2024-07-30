import { cn } from "@/lib/utils";

export default function () {
    return (
        <div id="app"
            className={cn(
                "h-32 w-fit",
                "flex flex-col justify-center items-center",
                " bg-red-500",
                "font-semibold text-3xl"
            )}>
            hi omed!
            <p className="text-white text-base">Lorem ipsum dolor .</p>
        </div>
    )
}