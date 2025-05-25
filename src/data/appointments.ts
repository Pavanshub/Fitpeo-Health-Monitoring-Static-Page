export interface TimeSlot {
  time: string;
  day: number;
}

export interface AppointmentDay {
  dayNum: number;
  dayName: string;
  slots: TimeSlot[];
}

export const calendarDays: AppointmentDay[] = [
  { 
    dayNum: 25, 
    dayName: 'Mon',
    slots: [
      { time: '10:00', day: 25 },
      { time: '11:00', day: 25 },
      { time: '12:00', day: 25 }
    ] 
  },
  { 
    dayNum: 26, 
    dayName: 'Tues',
    slots: [
      { time: '08:00', day: 26 },
      { time: '09:00', day: 26 },
      { time: '10:00', day: 26 }
    ] 
  },
  { 
    dayNum: 27, 
    dayName: 'Wed',
    slots: [
      { time: '12:00', day: 27 },
      { time: '--:--', day: 27 },
      { time: '13:00', day: 27 }
    ] 
  },
  { 
    dayNum: 28, 
    dayName: 'Thurs',
    slots: [
      { time: '10:00', day: 28 },
      { time: '11:00', day: 28 },
      { time: '--:--', day: 28 }
    ] 
  },
  { 
    dayNum: 29, 
    dayName: 'Fri',
    slots: [
      { time: '--:--', day: 29 },
      { time: '14:00', day: 29 },
      { time: '16:00', day: 29 }
    ] 
  },
  { 
    dayNum: 30, 
    dayName: 'Sat',
    slots: [
      { time: '12:00', day: 30 },
      { time: '14:00', day: 30 },
      { time: '15:00', day: 30 }
    ] 
  },
  { 
    dayNum: 31, 
    dayName: 'Sun',
    slots: [
      { time: '09:00', day: 31 },
      { time: '10:00', day: 31 },
      { time: '11:00', day: 31 }
    ] 
  }
];

export interface AppointmentCard {
  id: string;
  title: string;
  time: string;
  doctor?: string;
  icon: string;
  color?: string;
}

export interface AppointmentGroup {
  day: string;
  appointments: AppointmentCard[];
}

export const featuredAppointments = [
  {
    id: 'dentist',
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: '',
    color: 'blue',
  },
  {
    id: 'physio',
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    icon: '',
    color: 'purple',
  },
];

export const upcomingAppointments: AppointmentGroup[] = [
  {
    day: 'Thursday',
    appointments: [
      {
        id: 'checkup',
        title: 'Health checkup complete',
        time: '11:00 AM',
        icon: 'clipboard-check',
      },
      {
        id: 'eye',
        title: 'Ophthalmologist',
        time: '14:00 PM',
        icon: 'eye',
      },
    ],
  },
  {
    day: 'Saturday',
    appointments: [
      {
        id: 'heart',
        title: 'Cardiologist',
        time: '12:00 AM',
        icon: 'heart',
      },
      {
        id: 'brain',
        title: 'Neurologist',
        time: '16:00 PM',
        icon: 'brain',
      },
    ],
  },
];

export const activityData = [
  { day: 'Mon', appointments: 2 },
  { day: 'Tues', appointments: 1 },
  { day: 'Wed', appointments: 3 },
  { day: 'Thurs', appointments: 2 },
  { day: 'Fri', appointments: 1 },
  { day: 'Sat', appointments: 2 },
  { day: 'Sun', appointments: 1 },
];