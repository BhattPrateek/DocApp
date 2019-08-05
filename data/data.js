const DentistSchedule = {
  physicians: [
    {
      id: 1,
      firstName: "Julias",
      lastName: "Hibbert",
      email: "jhibbert@notablehealth.com",
      appointments: [
        {
          name: "Christina Aguilera",
          time: "9:30AM",
          kind: "New Patient"
        },
        {
          name: "Frederick Kreuger",
          time: "11:00AM",
          kind: "Follow Up"
        },
        {
          name: "Jason Vorhees",
          time: "12:30PM",
          kind: "Check Up"
        },
        {
          name: "Cersei Lannister",
          time: "2:00PM",
          kind: "Follow Up"
        }
      ]
    },
    {
      id: 2,
      firstName: "Algernop",
      lastName: "Krieger",
      email: "kalgernop@notablehealth.com",
      appointments: [
        {
          name: "Prateek Bhatt",
          time: "8:00AM",
          kind: "Check Up"
        },
        {
          name: "Tom Brady",
          time: "10:00AM",
          kind: "Follow Up"
        },
        {
          name: "Tom Bombadil",
          time: "12:00PM",
          kind: "New Patient"
        },
        {
          name: "Rita Romero",
          time: "1:00PM",
          kind: "Check Up"
        },
        {
          name: "Stanley Yelnats",
          time: "3:00PM",
          kind: "New Patient"
        }
      ]
    },
    {
      id: 3,
      firstName: "Nick",
      lastName: "Riviera",
      email: "nriviera@notablehealth.com",
      appointments: [
        {
          name: "Tom Riddle",
          time: "8:00AM",
          kind: "Follow Up"
        },
        {
          name: "Meryl Streep",
          time: "10:00AM",
          kind: "Follow Up"
        },
        {
          name: "Aldo Raine",
          time: "12:00PM",
          kind: "Check Up"
        },
        {
          name: "Bart Simpson",
          time: "1:00PM",
          kind: "New Patient"
        },
        {
          name: "Euron Grayjoy",
          time: "2:30AM",
          kind: "New Patient"
        }
      ]
    }
  ]
};

module.exports = DentistSchedule;
