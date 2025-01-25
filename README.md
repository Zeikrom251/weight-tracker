# Weight Loss Tracker

This project allows users to track their weight loss progress over time. Users can add their weight and the corresponding date, view the data in a table, and visualize it in a chart (using Chart.js). The data is stored in `localStorage` so that it persists even after the page is reloaded.

## ✨ Features

- **Add Data**: Users can enter their weight and the corresponding date.
- **View Data**: The data is displayed in a table and a chart.
- **Persistent Storage**: The data is saved to `localStorage`, so it remains even after the page is refreshed.
- **Dynamic Chart**: The chart updates in real time as data is added.

## 🧩 Technologies Used

- **HTML**: The structure of the web page.
- **CSS**: Styling and responsive layout for a smooth experience on both desktop and mobile devices.
- **JavaScript**: Dynamic data handling, table and chart updates.
- **Chart.js**: A library used to create interactive and visual charts. 

## 🚀 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge).
- No backend server is required. The project can be run locally.

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Zeikrom251/weightLoss-tracker.git
   ```

2. Open the `index.html` file in your browser. No additionnal setup is required.


## 💪 Usage
1. **Add Data :**
    - Enter your weight and date in the respective fields of the form.
    - Click the **"Add"** button to submit the data.
2. **View Data :**
    - The added data will automatically appear in the table bellow the form.
    - The chart will also update in real time to show your weight progress.
3. **Persistent Data :**
    - The data is saved in `localStorage`, so even if you reload the page or comeback later, the data will remain.
4. **Responsive Design :**
    - The layout is responsive and adapts to different screen sizes, including mobile devices.


## 📁 File Structure
Here is the file structure of the project :
```bash
/weight-loss-tracker
│
├── index.html          # The main HTML file
├── /src/css
│   └── index.css       # Stylesheets
├── /src/js
│   └── app.js          # JavaScript file
└── README.md           # This README file
```