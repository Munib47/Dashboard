import React from 'react'
import './Table.css'

const Table = () => {
    return (
        <div>
            <div className="bg-white tble pl-3 pr-3 pt-3 w-50">
                <table className="w-100">
                    <thead>
                        <tr className=''>
                            <th>Latest results</th>
                            <th><a className='d-flex justify-content-end text-dark' style={{ width: "fit-content", float: "right" }} href='#'>More &rarr;</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-bottom justify-content-between">
                            <td className="pt-3 pb-3 font-weight-bold">Unit 5 - <span className="text-secondary">Technology</span></td>
                            <div className="pt-2">
                                <div className="bar progress">
                                    <div className="bar1 progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div>
                            </div>
                        </tr>
                        <tr className="border-bottom">
                            <td className="pt-3 pb-3 font-weight-bold">Unit 12 - <span className="text-secondary">Ecology</span></td>
                            <div className="pt-2">
                                <div className="bar progress">
                                    <div className="bar2 progress-bar" role="progressbar" style={{ width: "44%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">44%</div>
                                </div>
                            </div>
                        </tr>
                        <tr className="border-bottom">
                            <td className="pt-3 pb-3 font-weight-bold">Unit 9 - <span className="text-secondary">Real estate</span></td>
                            <div className="pt-2">
                                <div className="bar progress">
                                    <div className="bar3 progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
                                </div>
                            </div>
                        </tr>
                        <tr className="border-bottom">
                            <td className="pt-3 pb-3 font-weight-bold">Unit 8 - <span className="text-secondary">Education</span></td>
                            <div className="pt-2">
                                <div className="bar progress">
                                    <div className="bar4 progress-bar" role="progressbar" style={{ width: "15%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">15%</div>
                                </div>
                            </div>
                        </tr>
                        <tr>
                            <td className="pt-3 pb-3 font-weight-bold">Unit 16 - <span className="text-secondary">Job market</span></td>
                            <div className="pt-2">
                                <div className="bar progress">
                                    <div className="bar5 progress-bar" role="progressbar" style={{ width: "76%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">76%</div>
                                </div>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
