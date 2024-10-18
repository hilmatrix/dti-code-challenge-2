import Image from "next/image";

interface Props {
    imageUrl : string;
    name : string;
    role : string,
    description : string;
}

export default function TeamMember(props : Props) {
    return (
        <div className="flex h-[300px] md:h-[200px] m-4">
            <div className="w-[150] flex items-center ">
                <Image className="rounded-[20px]" src={props.imageUrl} alt={props.name} width={150} height={200}></Image>
            </div>
            <div className="flex-1 flex flex-col h-[100%] mx-4 justify-center text-justify">
                <span className="h-1/8 md:h-1/5 font-semibold">{props.name}</span>
                <span className="h-1/8 md:h-1/5 italic">{props.role}</span>
                <span className="md:h-1/5">{props.description}</span>
            </div>
        </div>
    );
}