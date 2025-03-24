'use client'
import LocationDateReserve from "@/components/DateReserve"
import { getServerSession } from "next-auth"
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions"
import getUserProfile from "@/libs/getUserProfile"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import { useDispatch, UseDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { BookingItem } from "../../../interface"
import { addBooking } from "@/redux/features/bookSlice"

export default function Booking () {

        const urlParams = useSearchParams()
        const vid = urlParams.get('id')
        const name = urlParams.get('name')
        const initialNameLastname = urlParams.get('nameLastname')
        const initialTel = urlParams.get('tel');

        const [bookingDate,setBookingDate] = useState<Dayjs|null>(null)
        const [venue,setVenue] = useState<string>('Bloom')
        const [nameLastname, setNameLastname] = useState(initialNameLastname);
        const [tel, setTel] = useState(initialTel);

        const dispatch = useDispatch<AppDispatch>()

        const makeBooking = () => {
                if(nameLastname && tel && bookingDate && venue){
                        const item: BookingItem = {
                                nameLastname: nameLastname,
                                tel: tel,
                                venue: venue,
                                bookDate: dayjs(bookingDate).format("YYYY/MM/DD"),
                        }
                        dispatch(addBooking(item))
                }
        }

        return (
                <main className="w-[100%] flex flex-col items-center space-y-4">
                <form className="w-[100%] flex flex-col items-center space-y-4">
                        <div className="text-xl font-medium">Venue Booking</div>
                        <div className="text-xl font-medium">Venue: {name}</div>
                        <LocationDateReserve onDateChange={(value:Dayjs)=>setBookingDate(value)}
                                                onLocationChange={(value:string)=>{setVenue(value)}}/>

                        <button name="Book Venue"
                        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                        text-white shadow-sm"
                        onClick={makeBooking}>
                                Book Venue
                        </button>
                </form>
                </main>
        )
}