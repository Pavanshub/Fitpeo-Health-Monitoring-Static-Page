export interface NavLink {
  id: string;
  title: string;
  icon: string;
  category: 'general' | 'tools';
}

export const navLinks: NavLink[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: 'layout-dashboard',
    category: 'general',
  },
  {
    id: 'history',
    title: 'History',
    icon: 'history',
    category: 'general',
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: 'calendar',
    category: 'general',
  },
  {
    id: 'appointments',
    title: 'Appointments',
    icon: 'calendar-clock',
    category: 'general',
  },
  {
    id: 'statistics',
    title: 'Statistics',
    icon: 'bar-chart',
    category: 'general',
  },
  {
    id: 'tests',
    title: 'Tests',
    icon: 'test-tube',
    category: 'general',
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: 'message-square',
    category: 'tools',
  },
  {
    id: 'support',
    title: 'Support',
    icon: 'help-circle',
    category: 'tools',
  },
  {
    id: 'setting',
    title: 'Setting',
    icon: 'settings',
    category: 'tools',
  },
];