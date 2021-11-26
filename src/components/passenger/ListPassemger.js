import React, { useState } from "react";
import Passenger from "./Passenger";
import styles from "./passenger.module.css";

const ListPaseenger = () => {
  const [passengers, setPassengers] = useState([
    { id: 1, name: "زهرا رضایی", codeMeli: "3256145", number: 1236655 },
    { id: 2, name: "امیر آفایی", codeMeli: "3256145", number: 1236655 },
    { id: 3, name: "علی احمدی", codeMeli: "3256145", number: 1236655 },
  ]);

  return (
    <div className={`d-flex flex-column ${styles.flexMain}`}>
      {passengers.map((passenger) => {
        return <Passenger key={passenger.id} passenger={passenger} />;
      })}
    </div>
  );
};

export default ListPaseenger;
