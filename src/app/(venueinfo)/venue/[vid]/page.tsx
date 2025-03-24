import Image from "next/image"
import getVenue from "@/libs/getVenue"
import Link from "next/link";

export default async function VenueDetailPage({params}:{params:{vid:string}}){
        
        const venueDetail = await getVenue(params.vid)

        
        return(
                <main className="text-center p-5">
                        <h1 className="text-lg font-medium">{venueDetail.data.brand}</h1>
                        <div className="flex flex-row my-5">
                                <Image src={venueDetail.data.picture}
                                        alt="No"
                                        width={0} height={0} sizes="100vw"
                                        className="rounded-lg w-[30%]"
                                />
                                <div className="text-md mx-5 text-left">
                                <div className="text-md mx-5">Brand: {venueDetail.data.brand}</div>
                                <div className="text-md mx-5">Seat: {venueDetail.data.seat}</div>
                                <div className="text-md mx-5">Gear type: {venueDetail.data.gearType}</div>
                                <div className="text-md mx-5">Price: {venueDetail.data.price}</div>
                                <div className="text-md mx-5">Pickup address: {venueDetail.data.tel}</div>
                                
                                <Link href={`/booking?id=${params.vid}&brand=${venueDetail.data.brand}`}>
                                <button name="Book Venue"
                                className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                                text-white shadow-sm">
                                Make Booking
                                </button>
                                </Link>
                                
                                </div>
                        </div>
                </main>
        );
}

export async function generateStaticParams(){
        return [{vid:"67d044e0c0062950a985c509"},{vid:"67d04663c0062950a985c50c"},{vid:"67d047cec0062950a985c50f"}]
}