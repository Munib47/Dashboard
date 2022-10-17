import React from 'react';
import Table from 'react-bootstrap/Table';
import './Table.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Prog = () => {
    return (
        <div>
            <div className="bg-white tble pl-3 pr-3 pt-3 w-50">
                <Table className="w-100">
                    <thead>
                        <tr>
                            <th>Latest results</th>
                            <th><a className='d-flex justify-content-end text-dark' style={{ width: "fit-content", float: "right" }} href='#'>More &rarr;</a></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-bottom justify-content-between">
                            <td className="pt-3 pb-3 font-weight-bold">Unit 5 - <span className="text-secondary">Technology</span></td>
                            <div className="pt-2">
                            <ProgressBar className="bar" variant="danger" now={25} label={`25%`}/>
                            </div>
                        </tr>
                        <tr className="border-bottom">
                            <td className="pt-3 pb-3 font-weight-bold">Unit 12 - <span className="text-secondary">Ecology</span></td>
                            <div className="pt-2">
                            <ProgressBar className="bar" now={44} label={`44%`}/>
                            </div>
                        </tr>
                        <tr className="border-bottom">
                            <td className="pt-3 pb-3 font-weight-bold">Unit 9 - <span className="text-secondary">Real estate</span></td>
                            <div className="pt-2">
                            <ProgressBar className="bar" now={40} label={`40%`}/>
                            </div>
                        </tr>
                        <tr className="border-bottom">
                            <td className="pt-3 pb-3 font-weight-bold">Unit 8 - <span className="text-secondary">Education</span></td>
                            <div className="pt-2">
                            <ProgressBar className="bar" variant="danger" now={55} label={`55%`}/>
                            </div>
                        </tr>
                        <tr>
                            <td className="pt-3 pb-3 font-weight-bold">Unit 16 - <span className="text-secondary">Job market</span></td>
                            <div className="pt-2">
                            <ProgressBar className="bar" now={76} label={`76%`}/>
                            </div>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Prog
