import React from 'react';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import Navbar from './Navbar';
import RightSidebar from './RightSidebar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './LatestResult.css';
import {
  Link
} from "react-router-dom";

const LatestResult = () => {
    const [data, setData] = useState([])

  const user = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = resp.data;
    setData(data)
    // console.log(data)
  };



  useEffect(() => {
    user()
  }, [])
// console.log(data) //Use state

    return (
        <div>
            <Navbar />
            <LeftSidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12 rounded pt-4 pl-5 pb-4">
                                <table className="table">
                                    <thead className="thead bg-primary">
                                        <tr>
                                            <th>Name</th>
                                            <th>UserName</th>
                                            <th>Phone #</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tbody bg-secondary">
                                        {
                                            data.map((d) => {
                                                return (
                                                    <tr>
                                                        <td>{d.name}</td>
                                                        <td>{d.username}</td>
                                                        <td>{d.phone}</td>
                                                        <td className="d-flex justify-content-center"><button className="bg-success border-0 rounded w-50"><Link to={`/latestresults/detail/${d.id}`}>View</Link></button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        {/* <Table /> */}

                        {/* <Courses /> */}
                    </div>
                </div>

            </div>
            <RightSidebar />
            <Footer />
        </div>
    )
}

export default LatestResult
