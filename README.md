# Student Management System

A modern, responsive web application for managing student records with smooth animations and an intuitive user interface.

## 🚀 Features

- **Student Registration**: Add new students with detailed information
- **Student Dashboard**: View and manage all student records
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Enhanced with Framer Motion for fluid user experience
- **Modern UI**: Built with Tailwind CSS for clean, professional design
- **Fast Performance**: Powered by Vite for quick development and builds

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Routing**: React Router DOM

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saadmughal0987/student-management-system.git
   cd student-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Usage

1. **Welcome Page**: Start with the animated welcome screen
2. **Add Student**: Click "Get Started" to navigate to the form page
3. **Fill Form**: Enter student details (Name, Roll Number, Course, Department)
4. **Submit**: Add the student to the system
5. **View Students**: Navigate to the dashboard to see all students
6. **Manage Records**: Remove students if needed

## 🏗️ Project Structure

```
src/
├── Components/
│   ├── Dashboard/
│   │   ├── DashboardHeader.jsx
│   │   ├── EmptyState.jsx
│   │   └── StudentList.jsx
│   ├── Form/
│   │   ├── FormFields.jsx
│   │   ├── FormHeader.jsx
│   │   ├── SubmitButton.jsx
│   │   └── ViewStudentsButton.jsx
│   ├── StudentCard/
│   │   └── StudentCard.jsx
│   └── Welcome/
│       ├── BouncingBall.jsx
│       ├── GetStartedButton.jsx
│       ├── Logo.jsx
│       └── Title.jsx
├── pages/
│   ├── Dashboard/
│   │   └── DashboardPage.jsx
│   ├── Form/
│   │   └── FormPage.jsx
│   └── Welcome/
│       └── WelcomePage.jsx
├── assets/
│   ├── logo.png
│   └── bg.png
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Key Features

- **Smooth Page Transitions**: All page changes are animated with easeInOut easing
- **Interactive Elements**: Hover effects on buttons and cards with smooth scaling
- **Bouncing Ball Animation**: Engaging welcome animation with optimized timing
- **Responsive Grid**: Student cards adapt to different screen sizes
- **Form Validation**: Basic form structure ready for validation implementation

## 🚀 Deployment

The application is deployed on Vercel and can be accessed at: [Your Vercel URL]

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- GitHub: [@saadmughal0987](https://github.com/saadmughal0987)
- YouTube: [Your Channel](https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ)

---

Made with ❤️ using React and Vite
