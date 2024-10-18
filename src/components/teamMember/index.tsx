import Image from "next/image";

interface Props {
    imageUrl : string;
    name : string;
    role : string,
    contact : string;
    description : string;
}

export default function TeamMember(props : Props) {
    return (
        <div className="flex h-[300px] md:h-[200px] m-4">
            <div className="w-[150] flex items-center ">
                <Image className="rounded-[20px]" src={props.imageUrl} alt={props.name} width={150} height={200}></Image>
            </div>
            <div className="flex-1 flex flex-col h-[100%] mx-4 justify-center text-justify">
                <div className="flex flex-col">
                    <span className="font-semibold">{props.name}</span>
                    <span className="italic">{props.role}</span>
                    <span className="underline">{props.contact}</span>
                </div>
                <span className="">{props.description}</span>
            </div>
        </div>
    );
}