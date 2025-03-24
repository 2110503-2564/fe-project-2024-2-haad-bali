'use client'

import Image from "next/image";
import styles from './card.module.css';
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function Card( {venueName, imgSrc, onCompare} : {venueName:string,imgSrc:string,onCompare?:Function} ){
        
        const [value, setValue] = useState<number | null>(0);
        
        return(
                <div onClick={(e)=>e.stopPropagation()}>
                <InteractiveCard contentName={venueName}>
                        <div className="w-full h-[70%] relative rounded-t-lg">
                        <Image src={imgSrc}
                        alt="No"
                        fill={true}
                        className="object-cover rounded-t-lg"
                        />
                        </div>
                        <div className="w-full h-[15%] p-[10px]">{venueName}</div>
                        {onCompare? <Rating
                            data-testid = {`${venueName} Rating`}
                            name={`${venueName} Rating`}
                            id = {`${venueName} Rating`}
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);event.preventDefault();onCompare(newValue);
                            }}
                        /> : ""}
                </InteractiveCard>
                </div>
        );
}