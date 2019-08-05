import React, { useState, useEffect } from "react";
import "./App.css";

import Doctor from "./Doctors";
import Appointments from "./Appointments";

function App() {
  const initDoctorState = null;
  const initActiveState = { active: null };
  const initAppointmentState = null;

  const [doctorsState, setDoctorsState] = useState(initDoctorState);

  const [activeState, setActiveState] = useState(initActiveState);

  const [appointmentState, setAppointmentState] = useState(
    initAppointmentState
  );

  function getAllDoctors(url, data = {}) {
    // Default options are marked with *
    return fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer"
      // body: JSON.stringify(data)
    }).then(response => response.json());
  }

  function fetchAppointments(url, id) {
    // Default options are marked with *
    const data = { id: id };
    return fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  const getDoctors = (setDoctorsState, setActiveState) => {
    getAllDoctors("/getDoctors")
      .then(data => {
        console.log(JSON.stringify(data));

        setDoctorsState(data.doctors);
        setActiveState({
          active: 1
        });
        console.log(data.doctors);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getAppointmentsById = (setAppointmentState, id) => {
    fetchAppointments("/getAppointmentById", id)
      .then(data => {
        console.log(JSON.stringify(data));
        setAppointmentState(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const setActiveDoctor = (e, id) => {
    getAppointmentsById(setAppointmentState, id);
  };

  useEffect(() => {
    getDoctors(setDoctorsState, setActiveState);
  }, []);

  useEffect(() => {
    getAppointmentsById(setAppointmentState, 1);
  }, []);

  return (
    <div className="App">
      <header className="Doctor Appointments">
        <div className="appTitle">Doctor Appointment App</div>
        <div className="view">
          <Doctor doctors={doctorsState} setActiveDoctor={setActiveDoctor} />
          <Appointments appointments={appointmentState} />
        </div>
      </header>
    </div>
  );
}

export default App;
