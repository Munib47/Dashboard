import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Footer from './Footer';

const DetailResult = () => {
    const [data, setData] = useState([]);
    const { id } = useParams()
    const user = async () => {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = resp.data;
        setData(data)
        // console.log(data)
    };



    useEffect(() => {
        user()
    }, []);
    // console.log(id)
    console.log(data)
    return (
        <div>
            <Navbar />
            <LeftSidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12 rounded pt-4">
                                <table className="table">
                                    <thead className='thead bg-primary'>
                                        <tr>
                                            <th>Name</th>
                                            <th>UserName</th>
                                            <th>Phone #</th>
                                            <th>Company Name</th>
                                            <th>Email</th>
                                            <th>Website</th>
                                            <th>Address</th>
                                            <th>Zipcode</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-secondary">
                                        <tr>
                                            <td className="border border-dark p-1">{data?.name}</td>
                                            <td className="border border-dark p-1">{data?.username}</td>
                                            <td className="border border-dark p-1">{data?.phone}</td>
                                            <td className="border border-dark p-1">{data?.company?.name}</td>
                                            <td className="border border-dark p-1">{data?.email}</td>
                                            <td className="border border-dark p-1">{data?.website}</td>
                                            <td className="border border-dark p-1">{data?.address?.suite},{data?.address?.street},{data?.address?.city}</td>
                                            <td className="border border-dark p-1">{data?.address?.zipcode}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                                <div className="d-flex justify-content-end">
                                    <div className="d-flex justify-content-end pr-5 w-25">
                                        <button className="border-0 bg-success rounded w-25"><Link to={`/latestresults`}>Back</Link></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <RightSidebar />
            <Footer />
        </div>
    )
}

export default DetailResult
