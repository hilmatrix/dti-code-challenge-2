import Image from 'next/image';

interface Parameters {
    workName : string,
    imageLink : string
}

export default function workImage(parameters : Parameters) {
    return (
        <div className="h-[300px] md:h-[300px] my-4 flex flex-col md:flex-row">
            <div className='flex justify-center md:justify-left'>
                <Image src={parameters.imageLink} alt={parameters.workName} width={320} height={500} className='rounded-[12px]'></Image>
            </div>
        </div>
    );
}