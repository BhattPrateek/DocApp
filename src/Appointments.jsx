import React from 'react';
import './App.css';

const Appointment = ({id, name, time, kind})=>{
    return(
        <div className="appointmentInformation">
            <div className="id">{id}.</div>
            <div className="name">{name}</div>
            <div className="time">{time}</div>
            <div className="kind">{kind}</div>
        </div>
    )
}

const Appointments =(props)=>{
    return (
        <div className="appointmentColumn">
            <div className="listHeader">Appointments</div>
            <div className="header">
                <div>#</div>
                <div>Name</div>
                <div>Time</div>
                <div>Kind</div>
            </div>
            <div className="Appointment">
                {
                    props.appointments?
                    props.appointments.map((item, index)=>{
                        return <Appointment id={index+1} name={item.name} time={item.time} kind={item.kind}/>
                    })
                    :
                    null
                }
            </div>

        </div>
    )
}

export default Appointments;