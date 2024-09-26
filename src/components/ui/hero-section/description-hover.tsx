import { Button } from "@/components/ui/primitives/button";
import { TooltipDemo } from "@/components/ui/tooltip";


const DescriptionHover = ({ tooltipContent, buttonContent }: { tooltipContent: string, buttonContent: string }) => {
  return (
    <TooltipDemo content={tooltipContent} className="whitespace-pre-line">
      <Button variant="ghost" className="inline underline font-normal m-0 p-0 mx-2 cursor-pointer">{buttonContent}</Button>
    </TooltipDemo>
  )
}

export default DescriptionHover;