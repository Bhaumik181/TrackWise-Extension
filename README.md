# TrackWise

TrackWise is a Chrome Extension that monitors website activity, tracks time spent on websites, and stores usage analytics using a Node.js backend and MongoDB Atlas.

## Features

* Track active website usage in real time
* Automatic time aggregation per website
* Daily activity statistics
* MongoDB Atlas cloud storage
* Chrome Extension (Manifest V3)
* Express.js REST API
* Clean popup dashboard
* Automatic active tab detection
* Idle state detection

## Tech Stack

### Frontend

* Chrome Extension (Manifest V3)
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

## Project Structure

```plaintext
TrackWise

├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── .env
│   └── server.js
│
├── extension
│   ├── manifest.json
│   ├── background.js
│   ├── popup.html
│   ├── popup.css
│   └── popup.js
│
└── README.md
```

## How It Works

1. Chrome Extension detects the currently active website.
2. Every 5 seconds, active browsing time is recorded.
3. Data is sent to the Express backend.
4. Backend aggregates time by domain and date.
5. MongoDB Atlas stores usage statistics.
6. Popup dashboard displays activity analytics.

## API Endpoints

### Save Activity

```http
POST /api/activity
```

Request Body

```json
{
  "domain": "youtube.com",
  "seconds": 5
}
```

### Get Statistics

```http
GET /api/activity/stats
```

Response

```json
[
  {
    "domain": "chatgpt.com",
    "date": "2026-06-04",
    "timeSpent": 630
  }
]
```

## Installation

### Backend

```bash
cd backend
npm install
node server.js
```

### Extension

1. Open Chrome
2. Navigate to:

```plaintext
chrome://extensions
```

3. Enable Developer Mode
4. Click Load Unpacked
5. Select the extension folder

## Future Enhancements

* Google Authentication
* JWT Authorization
* React Dashboard
* Weekly Productivity Reports
* Data Visualization Charts
* AI-Based Productivity Insights

## Author

Bhaumik Verma
B.Tech Computer Engineering
Thapar Institute of Engineering and Technology
