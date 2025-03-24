export default async function getVenues(){

        await new Promise( (resolve)=>setTimeout(resolve,5000) )

        const response = await fetch("http://localhost:5000/api/v1/cars")
        if(!response.ok){
                throw new Error("Failed to fetch venues")
        }

        return await response.json()
}