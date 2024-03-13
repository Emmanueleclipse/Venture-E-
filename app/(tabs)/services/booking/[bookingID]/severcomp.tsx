import { getEventAndTimes } from "@/app/api/data";

export default async function EventData({ params }: { params: any }) {
  const { bookingID } = params;
  const response = await getEventAndTimes(bookingID);

//   console.log(`booking:${bookingID}`);

  // Accessing nested properties
  const events = response.data.events;
  const eventTimeSlots = response.eventTimeSlots.data;
//   console.log(events)
//   console.log(eventTimeSlots)

  return (
<>
      <div className="events">
        Events:
        {events && events.map((event: any, index: number) => (
            <div key={index} className="eventCard">
                <div className="eventCardContent">
                    <div className="eventName">{event.eventName}</div>
                    <p className="eventDescription">{event.eventDescription}</p>
                    <p className="serviceTimeLength">
                        Service Time Length: {event.serviceTimeLength}
                    </p>
                    <p className="cost">Cost: {event.cost}</p>
                    <p className="status">Status: {event.Status}</p>
                </div>
            </div>
        ))}
      </div>
      <div className="eventTimeSlots">
        Event Time Slots:
        {eventTimeSlots && eventTimeSlots.map((slot: any, index: number) => (
          <div key={index} className="timeSlotCard">
            <div className="timeSlotCardContent">
              <div className="timeSlotTitle">{slot.title_event}</div>
              <p className="dayOfWeek">
                Day of the Week: {slot.day_of_the_week}
              </p>
              <p className="time">
                Time: {slot.time_hr}:{slot.time_minute}
              </p>
              <p className="status">
                Status: {slot.status ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
        ))}
      </div>
      </>
  );
}
