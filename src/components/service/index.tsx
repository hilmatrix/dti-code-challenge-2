import Image from 'next/image';
import React from 'react';


export default function Service(serviceName : string, imageUrl : string) {
    return (
        <div className="flex justify-left md:justify-center items-center w-[100%] h-[100%] flex-row md:flex-col">
            <Image src={imageUrl} alt="Logo-2D" width={200} height={200} className="mx-5 w-[100px] h-[100px] md:w-[200px] md:h-[200px]"></Image>
            <span className='m-5'>{serviceName}</span>
        </div>
    );
}