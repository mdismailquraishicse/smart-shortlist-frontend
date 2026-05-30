import { useState } from 'react'
import './App.css'


const url_resume = "http://127.0.0.1:8000/upload/resume"
const url_jd = "http://127.0.0.1:8000/upload/jd"

function App() {
  const [resume, setResume] = useState(null);
  const [jd, setJD] = useState(null);
  const [matches, setMatches] = useState([]);
  const [uploadResumeMessage, setUploadResumeMessage] = useState("")


  const uploadResume = async ()=>{
    if (!resume){
      alert("Please select a resume first");
      return;
    }

    const formData = new FormData();
    formData.append("file", resume);

    try{
      const response = await fetch(
        url_resume,
        {
          method: "POST",
          body: formData,
        });
      const data = await response.json();
      if (data.status === "success"){
        setUploadResumeMessage(data.message)
      }
    } catch (error){
      console.error("Upload failed: ", error)
    }}


  const uploadJD = async ()=>{
    if (!jd){
      alert("Please select a resume first");
      return;
    }

    const formData = new FormData();
    formData.append("file", jd);

    try{
      const response = await fetch(
        url_jd,
        {
          method: "POST",
          body: formData,
        });
      const data = await response.json();
      if (data.status === "success") {
      setMatches(data.result);
      if (!data.result || data.result.length === 0){
        alert("No user found in the database please upload some resume first")
      }
    }
    else{
      alert(data.message)
    }
    } catch (error){
      console.error("Upload failed: ", error)
    }}


  return (
    <>
    <div className="container">
        <h1>Welcome To Smart Shortlisting</h1>

        <div className="upload-resume">
          <label>Upload resume: </label><input type="file" onChange={(e)=>{
            setResume(e.target.files[0])
          }}/>
          <button onClick={uploadResume}>Upload</button>
          <p className='upload-message'>{uploadResumeMessage}</p>
        </div>

        <div className="upload-jd">
          <label>Upload Job Description:</label><input type="file" onChange={(e)=>{
            setJD(e.target.files[0])
          }} />
          <button onClick={uploadJD}>Upload</button>
        </div>

        <div className="matches">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {matches.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>
                    No match found
                  </td>
                </tr>
              ) : (
                matches.map((candidate) => (
                  <tr key={candidate.id}>
                    <td>{candidate.id}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.city || "-"}</td>
                    <td>{candidate.mobile}</td>
                    <td>{candidate.email}</td>
                    <td>{candidate.score.toFixed(4)}</td>

                    <td>
                      <button
                        onClick={() =>
                          window.open(
                            `http://127.0.0.1:8000/download/resume/${candidate.id}`,
                            "_blank"
                          )
                        }
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
    </div>
    </>
  )
}

export default App
