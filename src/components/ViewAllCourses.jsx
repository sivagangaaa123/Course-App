import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewAllCourses = () => {
  const [data, changeData] = useState([])

  const fetchData = () => {
    axios
      .get(" https://host-demo-app.onrender.com/api/courses")
      .then((response) => {
        changeData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <NavigationBar/>

      <h1>
        <center>View All Courses</center>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col col-12">
            <table className="table table-bordered table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Course Name</th>
                  <th>Duration</th>
                  <th>Fee</th>
                  <th>Mode</th>
                  <th>Trainer</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.course_name}</td>
                    <td>{value.duration}</td>
                    <td>{value.fee}</td>
                    <td>{value.mode}</td>
                    <td>{value.trainer}</td>
                    <td>
                      <button className="btn btn-primary">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllCourses