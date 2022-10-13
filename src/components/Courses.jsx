import React from 'react'
import './courses.css'

const Courses = () => {
    return (
        <div>
            <h6 className="pt-3 pb-3 font-weight-bold">Your Courses</h6>
            <div className="d-flex">
                <div className="main main1 d-flex m-0 w-25 text-white">
                    <div className="btm btm1 ml-3 mt-3 rounded d-inline-flex justify-content-center align-items-center">
                        <h6>B2</h6>
                    </div>
                    <div className="ml-4 mr-3 mt-2 w-75">
                        <p className=" m-0">Business English</p>
                        <h6 className="m-0 d-flex justify-content-between font-weight-bold">Grammar <span><a href="#" className="text-white">&rarr;</a></span></h6>
                    </div>
                </div>
                <div className="main main2 d-flex ml-2 w-25 text-white">
                    <div className="btm btm2 ml-3 mt-3 rounded d-inline-flex justify-content-center align-items-center">
                        <h6>B2</h6>
                    </div>
                    <div className="ml-4 mr-3 mt-2 w-75">
                        <p className="m-0">Common English</p>
                        <h6 className="m-0 d-flex justify-content-between font-weight-bold">Phrasal verbs <span><a href="#" className="text-white">&rarr;</a></span></h6>
                    </div>
                </div>
                <div className="main main3 d-flex ml-2 w-25">
                    <div className="btm btm3 ml-3 mt-3 rounded d-inline-flex justify-content-center align-items-center">
                        <h6>C1</h6>
                    </div>
                    <div className="ml-4 mr-3 mt-2 w-75">
                        <p className="m-0">Business Spanish</p>
                        <h6 className="m-0 d-flex justify-content-between font-weight-bold">Vocabulary <span><a href="#" className="text-white">&rarr;</a></span></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
