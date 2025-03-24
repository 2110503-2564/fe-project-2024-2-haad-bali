'use client'
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch, UseDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"
import { BookingItem } from "../../interface"

export default function BookingList(){

        const bookItems = useAppSelector((state) => state.bookSlice.bookItems)
        const dispatch = useDispatch<AppDispatch>()

        return(
                <>
                {
                        bookItems.map((abc)=>(
                                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                                key={abc.nameLastname}>
                                        <div className="text-xl">{abc.venue}</div>
                                        <div className="text-md">{abc.nameLastname}</div>
                                        <div className="text-md">{abc.tel}</div>
                                        <div className="text-md">{abc.bookDate}</div>
                                        <button name="Book Venue"
                                        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                                        text-white shadow-sm"
                                        onClick={()=>{dispatch(removeBooking(abc))}}>
                                                Remove Booking
                                        </button>
                                </div>
                        ))
                }
                </>
        )
}