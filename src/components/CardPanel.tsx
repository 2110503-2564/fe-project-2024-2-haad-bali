"use client"
import { useReducer, useEffect, useState } from "react";
import Card from "./Card";
import Link from "next/link";
import getVenues from "@/libs/getVenues";
import { VenueItem, VenueJson } from "../../interface";

export default function CardPanel(){

        const [venueResponse,setVenueResponse] = useState<VenueJson|null>(null)

        useEffect(()=>{
                const fetchData = async () => {
                        const venues = await getVenues()
                        setVenueResponse(venues)
                }

                fetchData()
        }, [])

        const defaultVenue = new Map<string, number>([
                ["The Bloom Pavilion", 0],
                ["Spark Space", 0],
                ["The Grand Table", 0]
            ]);

            const compareReducer = (
                compareList: Map<string, number>, 
                action: { type: string; venueName: string; rating?: number }
            ) => {
                switch (action.type) {
                    case 'add': {
                        return new Map(compareList).set(action.venueName, action.rating ?? 0);
                    }
                    case 'remove': {
                        const newList = new Map(compareList);
                        newList.delete(action.venueName);
                        return newList;
                    }
                    default:
                        return compareList;
                }
            };
            

        const [compareList, dispatchCompare] = useReducer(compareReducer, defaultVenue)

        if(!venueResponse) return (<p>Venue Panel is Loading ... </p>)

        return (
                <div>
                        <div style={{margin:"20px", display:"flex",flexDirection:"row",
                                flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-around"}}>
                                {venueResponse.data.map((venueItem:VenueItem)=>(
                                        <Link href={`/venue/${venueItem.id}`} className="w-1/5">
                                        <Card venueName={venueItem.name} imgSrc={venueItem.picture}
                                        onCompare={(value:number)=>dispatchCompare({type:"add",venueName:venueItem.name,rating:value})}/>
                                        </Link>
                                ))
                                }
                        </div>
                        <div className="w-full text-xl font-medium">Compare List : {compareList.size}</div>
                        {Array.from(compareList).map(([venueName, rating]) => (
                                <div key={venueName} data-testid={venueName} onClick={() => dispatchCompare({ type: "remove", venueName })}>{venueName} : {rating}</div>
                        ))}
                </div>
        );
}