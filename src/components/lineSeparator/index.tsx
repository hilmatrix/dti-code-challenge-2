interface Props {
    lineColor : "light" | "dark";
}

export default function LineSeparator(props : Props) {
    return (
        <div className="flex justify-center">
            <div className={`w-full ${props.lineColor === "light" ? "bg-light-gray-alpha" : "bg-charcoal-gray-alpha"} h-[2px] my-5`}></div> 
        </div>
      )
}