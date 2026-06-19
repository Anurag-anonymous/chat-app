import {
  faBell,
  faComment,
  faDoorOpen,
  faGear,
  faMoon,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons'

export const rooms = [
  {
    id: 'design',
    name: 'Design Room',
    topic: 'Landing page polish and spacing passes',
    members: 5,
    unread: 3,
    status: 'Live now',
    accent: '#55d06f',
    preview: 'Mira sent the latest layout screenshot for review.',
    time: '12:34 PM',
  },
  {
    id: 'frontend',
    name: 'Frontend Squad',
    topic: 'React components, routing, and UI states',
    members: 8,
    unread: 0,
    status: '2 typing',
    accent: '#61c6ff',
    preview: 'Can we keep the composer fixed on mobile?',
    time: '12:06 PM',
  },
  {
    id: 'backend',
    name: 'API Bridge',
    topic: 'Auth hooks and message persistence',
    members: 4,
    unread: 1,
    status: 'Online',
    accent: '#f4bd50',
    preview: 'The socket event names are ready to wire up.',
    time: '11:48 AM',
  },
  {
    id: 'friends',
    name: 'Friends',
    topic: 'Casual Catchups',
    members: 12,
    unread: 0,
    status: 'Online',
    accent: '#fb7185',
    preview: 'Aarav: Movie plan still on for tonight?',
    time: '10:21 AM',
  },
  {
    id: 'project',
    name: 'Project War Room',
    topic: 'Launch checklist and blockers',
    members: 6,
    unread: 5,
    status: 'Live now',
    accent: '#a78bfa',
    preview: 'Priya pinned the deployment checklist.',
    time: 'Yesterday',
  },
]

export const messagesByRoom = {
  design: [
    {
      id: 1,
      author: 'Mira',
      body: 'I cleaned up the room cards and tightened the header spacing.',
      time: '12:24 PM',
      mine: false,
      color: '#55d06f',
    },
    {
      id: 2,
      author: 'You',
      body: 'Nice. The dark panel look is exactly the vibe I wanted.',
      time: '12:27 PM',
      mine: true,
      color: '#61c6ff',
    },
    {
      id: 3,
      author: 'Karan',
      body: 'I added hover states and empty states so it feels finished even before backend data lands.',
      time: '12:31 PM',
      mine: false,
      color: '#f4bd50',
    },
    {
      id: 4,
      author: 'You',
      body: 'Perfect. I will connect the real room data after the API is stable.',
      time: '12:34 PM',
      mine: true,
      color: '#61c6ff',
    },
  ],
  frontend: [
    {
      id: 1,
      author: 'Neha',
      body: 'Mobile now switches to a focused chat view with a back button.',
      time: '12:03 PM',
      mine: false,
      color: '#61c6ff',
    },
    {
      id: 2,
      author: 'You',
      body: 'Good. Keep the controls reachable near the bottom.',
      time: '12:06 PM',
      mine: true,
      color: '#55d06f',
    },
  ],
  backend: [
    {
      id: 1,
      author: 'Dev',
      body: 'Message payload shape: roomId, userId, body, attachments, createdAt.',
      time: '11:48 AM',
      mine: false,
      color: '#f4bd50',
    },
  ],
  friends: [
    {
      id: 1,
      author: 'Aarav',
      body: 'Movie plan still on for tonight?',
      time: '10:21 AM',
      mine: false,
      color: '#fb7185',
    },
  ],
  project: [
    {
      id: 1,
      author: 'Priya',
      body: 'Pinned the deployment checklist. UI polish is the last visible thing.',
      time: 'Yesterday',
      mine: false,
      color: '#a78bfa',
    },
  ],
}

export const navItems = [
  { id: 'chats', label: 'Chats', icon: faComment },
  { id: 'rooms', label: 'Rooms', icon: faDoorOpen },
  { id: 'settings', label: 'Settings', icon: faGear },
]

export const settings = [
  { icon: faBell, title: 'Notifications', text: 'Mentions and room alerts enabled' },
  { icon: faMoon, title: 'Appearance', text: 'Dark glass interface' },
  { icon: faShieldHalved, title: 'Privacy', text: 'Invite-only rooms and safe previews' },
]
