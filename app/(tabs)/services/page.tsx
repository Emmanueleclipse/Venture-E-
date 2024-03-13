import { Events } from "@/app/api/data";
import Link from "next/link";
import { stackApp } from "../../lib/stack";
import { Suspense } from "react";

export default async function Services() {
  await stackApp.getUser({ or: "redirect" });

  const eventInfo = await Events();
  //   console.log(eventInfo);

  const generateCards = () => {
    return (eventInfo.data || []).map((events: any, index: number) => (
      <Link
        key={index}
        href={{
          pathname: `/services/booking/${events.EventID}`,
          query: { EventID: events.EventID },
        }}
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded overflow-hidden shadow-lg m-4 cursor-pointer"
      >
        <div className="flex flex-col justify-between px-6 py-4 bg-neutral-light hover:bg-neutral-dark text-neutral-dark hover:text-foreground h-full">
          <div className="font-bold text-xl mb-2">{events.eventName}</div>
          <p className="text-base">{events.eventDescription}</p>
        </div>
      </Link>
    ));
  };

  return (
    <>
      <Suspense fallback={<p>Loading Events...</p>}>
        <div className="flex flex-wrap">{generateCards()}</div>
      </Suspense>
    </>
  );
}
