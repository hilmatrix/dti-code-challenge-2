"use client"
import axios from "axios";
import Image from 'next/image';
import { useEffect, useState } from "react";

interface Parameters {
    testimony : string;
    jobTitle : string;
}

export default function Testimony(parameters : Parameters) {
    const [name, setName] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    useEffect(() =>  {
        try {
            const fetchData = async() => {
                const response = await axios("https://randomuser.me/api/")
                const name = response.data.results[0].name;
                setName(name.title + ". " + name.first + " " + name.last);
                setProfilePicture(response.data.results[0].picture.medium)
            };

            fetchData();
        } catch(error) {
            setName("Error")
        }
    }, [])
    
    return (
        <div>
            <div className="italic text-justify">
                "{parameters.testimony}"
            </div>
            <br></br>
            <div className="flex">
                <div >
                    <Image className="rounded-full" src={profilePicture ? profilePicture : ""} alt="profile picture" width={72} height={72}></Image>
                </div>
                <div className="ml-4 flex items-center">
                    {name}, {parameters.jobTitle}
                </div>
            </div>
        </div>
    );
}