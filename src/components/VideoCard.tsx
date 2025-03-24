'use client'
import { VlogPlayer } from "./VlogPlayer"
import { useState } from "react"

export function VideoCard(){

        const [playing, setPlaying] = useState(true)

        return (
                <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200
                flex flex-row">
                        <VlogPlayer vdoSrc="/video/vlog.mp4" isPlaying={playing}/>
                        <div className="m-5">Tee 1 Ti Koo Maung
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                        text-white shadow-sm"
                        onClick={()=>{setPlaying(!playing)}}>
                                {playing? 'Pause':'Play'}
                        </button>
                        </div>
                </div>
        )

}