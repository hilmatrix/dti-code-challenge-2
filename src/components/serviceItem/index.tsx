import Image from 'next/image';

interface Parameters {
    serviceName : string,
    imageUrl : string
}

export default function ServiceItem(parameters : Parameters) {
    return (
        <div className="flex justify-left md:justify-center items-center w-[100%] h-[100%] flex-row md:flex-col">
            <Image src={parameters.imageUrl} alt="Logo-2D" width={200} height={200} className="mx-5 w-[100px] h-[100px] md:w-[200px] md:h-[200px]"></Image>
            <span className='m-5'>{parameters.serviceName}</span>
        </div>
    );
}