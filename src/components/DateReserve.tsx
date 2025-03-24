"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from "dayjs"
import { useState } from "react"

export default function LocationDateReserve({onDateChange, onLocationChange}:
        {onDateChange:Function,onLocationChange:Function}
){
        const [bookingDate,setBookingDate] = useState<Dayjs|null>(null)
        const [venue,setVenue] = useState('Bloom')

        return (
                <div className="bg-slate-100 rounded-lg space-x-5
                space-y-2 w-fit p-10 flex flex-col justify-center">

                <TextField id="Name-Lastname" label="Name-Lastname" variant="standard" name=" Name-Lastname"
                InputProps={{classes: { input: "MuiInput-input" },}}/>

                <TextField id="Contact-Number" label="Contact-Number" variant="standard" name="Contact-Number"
                InputProps={{classes: { input: "MuiInput-input" },}}/>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker className="bg-white"
                        value={bookingDate}
                        onChange={(value)=>{onDateChange(value)}}
                        />
                        </LocalizationProvider>

                        <Select variant="standard" name="venue" id="venue"
                        value={venue}
                        onChange={(e,value)=>{onLocationChange(e.target.value);setVenue(e.target.value)}}
                        className="h-[2em] w-[200px]">
                                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                                <MenuItem value="Spark">Spark Space</MenuItem>
                                <MenuItem value="GrandTable">The Grand Table</MenuItem>
                        </Select>
                </div>
        );
}