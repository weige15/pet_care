"use client";

import { useEffect, useState } from "react";

function getTomorrowMorningValue() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(9, 30, 0, 0);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}T09:30`;
}

export default function BookingDateTimeInput({ className }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(getTomorrowMorningValue());
  }, []);

  return (
    <input
      className={className}
      type="datetime-local"
      name="arrivalAt"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
