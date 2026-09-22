# MealTrain Direct — Community Support Coordination Platform

**MealTrain Direct** is a modern, responsive web application designed for organizing neighborhood care and home-cooked meal coordination for families in need.

---

## 📁 Repository & Folder Structure

```
Local_Meal_Train_Community_Support_Coordination_Platform/
├── index.html                 # Primary Home Landing Page (Home 1 - Family-first Care)
├── assets/                    # General static assets & resources
├── images/                    # Dedicated website images (Hero banners, meal photos, volunteer cards)
├── css/
│   └── styles.css             # Main stylesheet (Tailwind utilities, custom cards, dark mode & dashboard UI)
├── js/
│   ├── main.js                # Core JS (theme toggles, RTL/LTR mode, search filters, form handlers)
│   └── dashboard.js           # Dashboard JS (scrolling navigation, reminders, workspace controls)
├── pages/
│   ├── home2.html             # Home 2 (Volunteer Mobilization & Ops View)
│   ├── how-it-works.html      # Detailed 3-step workflow guide for coordinators & volunteers
│   ├── start-meal-train.html  # Interactive creation form for new meal schedules
│   ├── browse-support.html    # Live search and category filter for active community meal trains
│   ├── dashboard.html        # Full Coordinator Hub workspace (schedule, dietary notes, reminders)
│   ├── contact.html           # Contact information, message form, and interactive Google Map
│   ├── login.html             # Coordinator authentication screen
│   └── register.html          # Coordinator account registration screen
└── README.md                  # Project documentation
```

---

## ⚡ Features & Capabilities

- 📂 **Separate `assets/` & `images/` Folders**: Clean directory separation for site assets and local image media.
- 🎨 **Theme & RTL Controls**: Toggle between Light and Dark mode, or switch to Right-To-Left layout anywhere on the site.
- 📱 **Fully Responsive Layout**: Built with TailwindCSS and custom CSS for seamless mobile, tablet, and desktop viewports.
- 🔍 **Real-Time Filter**: Search community trains by family name, city, or support type on `browse-support.html`.
- 📊 **Coordinator Workspace**: Comprehensive dashboard (`dashboard.html`) managing schedule calendar slots, dietary alerts, volunteer rosters, and automated reminders.
- 🧭 **Standard Navigation**: Open any HTML page directly in your browser or navigate seamlessly between pages using clean header links.
