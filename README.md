# Smart Shortlisting Frontend

A React-based frontend application for uploading resumes and job descriptions, matching candidates against a job description, and downloading shortlisted resumes.

## Features

* Upload candidate resumes
* Upload a job description
* View ranked candidate matches
* Display candidate details:

  * Name
  * Email
  * Mobile Number
  * City
  * Match Score
* Download candidate resumes directly from the results table
* Show upload success messages
* Display "No match found" when no resumes match the job description

---

## Tech Stack

* React
* JavaScript
* HTML
* CSS
* FastAPI (Backend API)

---

## Project Structure

```text
src/
├── App.jsx
├── App.css
└── main.jsx
```

---

## API Endpoints

### Upload Resume

```http
POST http://127.0.0.1:8000/upload/resume
```

Uploads a candidate resume to the backend.

### Upload Job Description

```http
POST http://127.0.0.1:8000/upload/jd
```

Uploads a job description and returns ranked matching candidates.

### Download Resume

```http
GET http://127.0.0.1:8000/download/resume/{candidate_id}
```

Downloads the resume associated with the selected candidate.

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd smart-shortlisting-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Backend Requirements

The frontend expects a FastAPI backend running on:

```text
http://127.0.0.1:8000
```

Required backend routes:

```text
POST /upload/resume
POST /upload/jd
GET  /download/resume/{id}
```

---

## Example Response

```json
{
  "status": "success",
  "message": "file uploaded successfully",
  "result": [
    {
      "id": "1209f7f3-a212-4d76-986a-92fd68d4b72e",
      "score": 0.99999994,
      "name": "Md Ismail Quraishi",
      "mobile": "+91-9876543210",
      "email": "mdismailquraishicse@gmail.com",
      "city": null
    }
  ]
}
```

---

## Usage

### Step 1: Upload Resume

Select a resume file and click **Upload**.

A success message will be displayed after the resume is successfully processed.

### Step 2: Upload Job Description

Select a job description file and click **Upload**.

The application sends the JD to the backend and retrieves ranked matching candidates.

### Step 3: Review Matches

Matching candidates are displayed in a table with:

* Candidate ID
* Name
* City
* Mobile Number
* Email Address
* Matching Score

### Step 4: Download Resume

Click the **Download** button corresponding to a candidate to download their resume.

---

## Future Enhancements

* Upload progress bar
* Processing/loading indicator
* Candidate score filtering
* Search and sorting
* Resume preview
* Pagination for large result sets
* Responsive UI improvements

---

## Author

Md Ismail Quraishi
