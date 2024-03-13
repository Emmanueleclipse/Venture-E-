
// import { Calendar } from "@/components/ui/calendar"
import Calander from '../../../../lib/Calander'
import EventData from '../[bookingID]/severcomp'
import { Suspense } from "react";

// import { Suspense } from "react";

export default function Page({params}: {params: any}){
    // console.log(params)
    return (
        <div className='calanderAndEventDiv'>
                <Suspense fallback={<div>Loading calendar...</div>}>
                <div className='Calander'>
                    <Calander />
                </div>
                </Suspense>
                <Suspense fallback={<div>Loading event data...</div>}>
                    <EventData params={params}/>
                </Suspense>
        </div>
    )
}


// I NEED TO IMPOMENT THIS PATTEREN
// // ✅ This pattern works. You can pass a Server Component
// // as a child or prop of a Client Component.
// import ClientComponent from "./ClientComponent";
// import ServerComponent from "./ServerComponent";

// // Pages are Server Components by default
// export default function Page() {
//   return (
//     <ClientComponent>
//       <ServerComponent />
//     </ClientComponent>
//   );
// }