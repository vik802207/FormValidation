# 🚀 Fancy React Form with Validation & Routing

A sleek, modern React application featuring:

- Form validation without third-party libraries  
- Realtime error messages  
- Password visibility toggle  
- Country & city dropdowns  
- Submit button enabled only when the form is valid  
- Fancy CSS styling with gradients, shadows, and smooth transitions  
- Post-submission route displaying a summary of submitted data  

---

## 📦 Installation

Clone the repo and install dependencies:

git clone https://github.com/your-username/fancy-react-form.git
npm install
npm start
## 🛠 Features
🔐 Form Fields: First Name, Last Name, Username, Email, Password, Phone (code + number), Country, City, PAN, Aadhar

✅ Validation:
Email: Valid format
Password: Minimum 6 characters
Phone: 10-digit only
PAN: ABCDE1234F format
Aadhar: 12-digit
🎨 Fancy CSS: Gradients, shadows, transitions, and neumorphism-style inputs
🔀 Uses react-router-dom for routing between form and submitted details

## 📂 Folder Structure
src/
│
├── App.js
├── FormPage.jsx
├── FormPage.css
├── DetailsPage.jsx
├── DetailsPage.css
├── data.js          
└── index.js

## 📤 Submit Behavior
Form submission triggers navigation to /details
Submitted data is passed using React Router’s state prop
Details page displays submitted fields in a styled card layout

## ScreenShot
![Alt text](https://github.com/vik802207/Ticket_Booking/blob/main/image/Screenshot%20(332).png?raw=true)

## 📞 Contact
For any queries, reach out to me at vikashg802207@gmail.com
