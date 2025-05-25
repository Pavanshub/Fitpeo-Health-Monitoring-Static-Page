export interface HealthStatus {
  id: string;
  name: string;
  status: 'good' | 'warning' | 'critical';
  date: string;
  position: {
    top: string;
    left: string;
  };
}

export const healthStatuses: HealthStatus[] = [
  {
    id: 'heart',
    name: 'Healthy Heart',
    status: 'good',
    date: '',
    position: {
      top: '22%',
      left: '50%',
    },
  },
  {
    id: 'lungs',
    name: 'Lungs',
    status: 'critical',
    date: '26 Oct 2021',
    position: {
      top: '25%',
      left: '50%',
    },
  },
  {
    id: 'teeth',
    name: 'Teeth',
    status: 'warning',
    date: '26 Oct 2021',
    position: {
      top: '15%',
      left: '50%',
    },
  },
  {
    id: 'bone',
    name: 'Bone',
    status: 'warning',
    date: '26 Oct 2021',
    position: {
      top: '60%',
      left: '55%',
    },
  },
  {
    id: 'leg',
    name: 'Healthy Leg',
    status: 'good',
    date: '',
    position: {
      top: '60%',
      left: '58%',
    },
  },
];