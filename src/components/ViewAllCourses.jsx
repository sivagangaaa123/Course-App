import axios from 'axios'
import React, { useEffect, useState } from 'react'

import NavigationBar from './NavigationBar'

const ViewAllCourses = () => {
 const [data, changeData] = useState([])
const fetchData = () => {
    
      axios.get(
        "https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json"
      )
      .then((Response) => {
        changeData(Response.data)
      })
      .catch()
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
  <NavigationBar />

      <h1>
        <center>View All Registrations</center>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <table className="table table-bordered table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Registration Number</th>
                  <th>Full Name</th>
                  <th>Branch</th>
                  <th>SSLC Mark</th>
                  <th>Plus Two Mark</th>
                  <th>UG Mark</th>
                  <th>PG Mark</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{value.regNo}</td>
                      <td>{value.fullName}</td>
                      <td>{value.branch}</td>
                      <td>{value.sslcMark}</td>
                      <td>{value.plusTwoMark}</td>
                      <td>{value.ugMark}</td>
                      <td>{value.pgMark}</td>
                      <td>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
    </div>




    