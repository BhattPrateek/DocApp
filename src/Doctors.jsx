import React, { useState } from "react";

function Doctor({ doctor, id, setActiveDoctor }) {
  return (
    <div
      onClick={e => {
        setActiveDoctor(e, id);
      }}
    ><a className="link">{`${doctor.firstName} ${doctor.lastName}`}</a></div>
  );
}

function Doctors(props) {
  return (
    <div>
      <div className="listHeader">Available Doctors</div>
      {props.doctors
        ? props.doctors.map((item, index) => {
            return (
              <Doctor
                key={`${item.firstName}-${index}`}
                id={index + 1}
                doctor={item}
                setActiveDoctor={props.setActiveDoctor}
              />
            );
          })
        : null}
    </div>
  );
}

export default Doctors;
