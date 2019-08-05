const DentistSchedules = require('../data/data.js');

const dataHelpers = () => {

    const doctorData = DentistSchedules.physicians;

    const getDoctors = () => {
        const doctors = {
            doctors: []
        };
        if (doctorData.length == 0) {
            return null;
        }
        doctorData.forEach(doctor => {
            const doctorInfo = {
                firstName: doctor.firstName,
                lastName: doctor.lastName
            };
            doctors.doctors.push(doctorInfo);
        });
        return doctors;
    };

    const getAppoinmentsByDoctorId = (id) => {
        for (var i = 0; i < doctorData.length; i++) {
            if (doctorData[i]["id"] == id) {
                return doctorData[i]["appointments"];
            }
        }
        return null;
    }

    return {
        getDoctors,
        getAppoinmentsByDoctorId
    }
}

module.exports = dataHelpers