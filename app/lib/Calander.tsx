'use client'

import { useState } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useEffect } from 'react';

export default function Calander() {
  const [selected, setSelected] = useState<Date>();
  useEffect(() => {
    if (selected) {
      const day = format(selected, 'd'); // Day of the month
      const month = format(selected, 'MMMM'); // Month name
      const year = format(selected, 'yyyy'); // Year
  
    //   console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
  }, [selected]);

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }

  const handleSelect = (date: any) => {
    setSelected(date);
  };
  const currentMonth = new Date();
  currentMonth.setDate(1); // Set the day to the 1st to ensure it's always the current month

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={handleSelect}
      footer={footer}
      fromDate={new Date()}
      fromMonth={currentMonth}
      disabled={(date: Date) => date.getDate() < new Date().getDate()}
    />
  );
}