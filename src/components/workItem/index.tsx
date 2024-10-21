import Image from 'next/image';
import Link from 'next/link';

interface Parameters {
    workName : string,
    imageLink : string,
    hyperLink : string,
}

export default function Work(parameters : Parameters) {
    return (
        <div className="h-[180px] md:h-[100px] my-4 flex flex-col md:flex-row">
            <div className='flex justify-center md:justify-left'>
                <Image src={parameters.imageLink} alt={parameters.workName} width={300} height={100} className='rounded-[12px]'></Image>
            </div>
            <div className='flex flex-col items-center md:items-start md:m-4'>
                <span className='font-semibold '>{parameters.workName}</span>
                <Link href={parameters.hyperLink} className='text-white' target='_blank'>
                <div className='bg-[#000000] w-24 h-10 flex justify-center items-center rounded-full my-2'>
                    Play Now
                </div>
                </Link>
            </div>
        </div>
    );
}