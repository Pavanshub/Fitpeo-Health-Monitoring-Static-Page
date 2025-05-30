# 🩺 Healthcare Dashboard UI

A fully responsive and pixel-perfect healthcare dashboard UI built with **React + Vite** and **Tailwind CSS**, inspired by the [design reference](https://i.ibb.co/B2DdGkgF/Screenshot-2025-05-23-at-3-31-31-PM.png).

## 📸 Preview

![Healthcare Dashboard Preview](https://github.com/user-attachments/assets/0ea356de-57e4-458e-a827-70a4782723c6)


## 🚀 Features

- 🧠 Interactive and clean healthcare-themed design
- 🧾 Dashboard view with body anatomy indicators
- 📅 Appointment calendar with static schedule
- 📊 Weekly activity chart
- 🧩 Modular components
- 💨 Fast styling with **Tailwind CSS**
- 📱 Fully responsive (mobile to desktop)

## 🛠️ Tech Stack

- ⚛️ React (with Vite)
- 🎨 Tailwind CSS
- 💡 Lucide Icons or FontAwesome
- 📁 Static mock data (no backend)

## 📂 Folder Structure

```
.
├── public/
│   └── images/          # Anatomy images, avatars
├── src/
│   ├── components/      # Reusable UI components
│   ├── data/            # Static data files (appointments, schedule, etc.)
│   ├── hooks/           
│   ├── lib/          
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── index.html
└── README.md
```

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/Pavanshub/Fitpeo-Health-Monitoring-Static-Page.git

# 2. Navigate to the project directory
cd Fitpeo-Health-Monitoring-Static-Page

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

## 💡 Usage

- The UI is entirely static and intended for design replication or prototyping.
- All appointment data and visual indicators are pulled from static files located in `src/data/`.

## 📌 Components

- `Sidebar.tsx` - Navigation and icons
- `Header.tsx` - Search, profile, and actions
- `DashboardLayout.tsx` - Human anatomy status cards
- `CalendarView.tsx` - Weekly appointment slots
- `UpcomingSchedule.tsx` - Grouped appointment list
- `ActivityFeed.tsx` - Bar chart for activity summary
- `AnotomySection.tsx` - Human body for indicating

## 🧪 Customization

You can update mock data from:

```bash
/src/data/appointments.ts
/src/data/schedule.ts
/src/data/navLinks.ts
```

Change assets (like the body diagram or profile image) in:

```bash
/public/images/
```

## 📱 Responsive Design

Built with mobile-first responsiveness in mind using Tailwind's utility-first approach. It gracefully adapts from mobile to tablet to desktop screens.

## 📋 TODO (Optional Enhancements)

- [ ] Add real-time data fetching (e.g., using Supabase or Firebase)
- [ ] Implement interactive anatomy status
- [ ] Add dark mode toggle
- [ ] Form-based appointment creation

## 🤝 Contributing

Feel free to fork and contribute to improve this design or integrate real-world features. Pull requests are welcome!

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).

## 🧑‍💻 Author

**Pavan Krishna D**  
Frontend Developer  
📫 [krishna.dirishala05@gmail.com](mailto:krishna.dirishala05@gmail.com)

---

> Inspired by a modern healthcare dashboard UI concept.
