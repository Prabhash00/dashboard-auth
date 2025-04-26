import React, { useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";


export default function TimeCard() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const tid = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(tid);
  }, []);

  return (
    <div>
      <h3>Current Time & Date</h3>
      <p>{now.toLocaleTimeString()}</p>
      <p>{now.toLocaleDateString()}</p>
      <br />
      <div className="flex justify-center ">
        <Clock value={now} size={180}/>
      </div>
    </div>
  );
}
