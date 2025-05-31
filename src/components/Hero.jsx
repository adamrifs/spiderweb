import React, { useState } from 'react'
import '../css/Hero.css'
import { IoAddSharp } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { GiCircle } from "react-icons/gi";

const Hero = () => {
    const [event, setEvent] = useState(false)

    return (
        <div className='hero-container'>
            <div className="sidebar">
                <div className="sidebar-box">
                    <div className="event">
                        <p>Events</p>
                        <ul>
                            <div className='vector-line'></div><li>New Requests</li>
                            <div className='vector-line'></div><li>Estimate</li>
                            <div className='vector-line'></div><li>Events</li>
                            <div className='vector-line'></div><li>Partial Requests</li>
                        </ul>
                    </div>
                    <h3>Positions</h3>
                    <h3>Contractors</h3>
                    <div className="users">
                        <h3>Users</h3>
                        <ul>
                            <div className='vector-line'></div><li>Admins</li>
                            <div className='vector-line'></div> <li>Clients</li>
                            <div className='vector-line'></div> <li>Coordinators</li>
                        </ul>
                    </div>
                    <button>Logout</button>
                </div>
            </div>

            <div className="right-box">
                {
                    event ? (
                        <div className="event-box">
                            <div className="event-head">
                                <FiArrowLeft onClick={() => setEvent(false)} />
                                <h2>Event Name</h2>
                                <h5>(venue details)</h5>
                            </div>
                            <div className="event-sub-box">
                                <p>Event Details</p>
                                <p>Assign Coordinator/Coordinator</p>
                                <p>Session Management</p>
                                <p>Generate SOW</p>
                            </div>
                            <div className="assign-coordinator-box">
                                <div className="assign-left">
                                    <h2>Assign Coordinator</h2>
                                    <input type="text" placeholder='Search Coordinator' />
                                    <p>Add New Coordinator</p>
                                </div>
                                <div className="assign-right">
                                    <div className="assign-right-head">
                                        <h2>Event Name</h2>
                                        <p>(Venue Here)</p>
                                    </div>
                                    <div className="date">
                                        <div className="start">
                                            <p>Start:12-12-2023</p>
                                        </div>
                                        <div className="end">
                                            <p>Ends:15-12-2023</p>
                                        </div>
                                    </div>
                                    <div className="address">
                                        <p>Venue Address :</p>
                                        <h6>Some Location 12, Name Here,City,State.</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="assign-contractor">
                                <div className="assign-contractor-head">
                                    <h2>Assign Contractor</h2>
                                </div>
                                <div className="contractor-box">
                                    <div className="contractor-left-box">
                                        <div className="contractor-small-box">
                                            <div className="small-box-head">
                                                <h3>Meeting Room 1</h3>
                                                <h6>12 Positions</h6>
                                            </div>
                                            <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                                        </div>
                                        <div className="contractor-small-box">
                                            <div className="small-box-head">
                                                <h3>Meeting Room 1</h3>
                                                <h6>12 Positions</h6>
                                            </div>
                                            <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                                        </div>
                                        <div className="contractor-small-box">
                                            <div className="small-box-head">
                                                <h3>Meeting Room 1</h3>
                                                <h6>12 Positions</h6>
                                            </div>
                                            <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                                        </div>
                                        <div className="contractor-small-box">
                                            <div className="small-box-head">
                                                <h3>Meeting Room 1</h3>
                                                <h6>12 Positions</h6>
                                            </div>
                                            <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                                        </div>
                                        <div className="contractor-small-box">
                                            <div className="small-box-head">
                                                <h3>Meeting Room 1</h3>
                                                <h6>12 Positions</h6>
                                            </div>
                                            <p>Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
                                        </div>
                                    </div>
                                    <div className="contractor-right-box">
                                        <div className="contractor-right-head">
                                            <h4>Positions</h4>
                                        </div>
                                        <div className="contractor-card">
                                            <div className="contractor-head">
                                                <h4>Position</h4>
                                                <h4>Time</h4>
                                                <h4>Info</h4>
                                                <h4>Quantity</h4>
                                                <h4></h4>
                                            </div>
                                            <div className="contractor-details">
                                                <p>Camera 1 (video)</p>
                                                <p>9 am - 7 pm</p>
                                                <p>LP default</p>
                                                <p>20</p>
                                                <button>Select contractor</button>
                                            </div>
                                            <div className="contractor-details">
                                                <p>Camera 1 (video)</p>
                                                <p>9 am - 7 pm</p>
                                                <p>LP default</p>
                                                <p>20</p>
                                                <button>Select contractor</button>
                                            </div>
                                            <div className="contractor-details">
                                                <p>Camera 1 (video)</p>
                                                <p>9 am - 7 pm</p>
                                                <p>LP default</p>
                                                <p>20</p>
                                                <button>Select contractor</button>
                                            </div>
                                            <div className="contractor-details">
                                                <p>Camera 1 (video)</p>
                                                <p>9 am - 7 pm</p>
                                                <p>LP default</p>
                                                <p>20</p>
                                                <button>Select contractor</button>
                                            </div>
                                            <div className="contractor-details">
                                                <p>Camera 1 (video)</p>
                                                <p>9 am - 7 pm</p>
                                                <p>LP default</p>
                                                <p>20</p>
                                                <button>Select contractor</button>
                                            </div>
                                            <div className="contractor-details">
                                                <p>Camera 1 (video)</p>
                                                <p>9 am - 7 pm</p>
                                                <p>LP default</p>
                                                <p>20</p>
                                                <button>Select contractor</button>
                                            </div>
                                            <div className="btns">
                                                <FiArrowLeft />
                                                <GiCircle />
                                                <GiCircle />
                                                <FiArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contractor-button">
                                    <button>Save Edits</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="right-head">
                                <h2>Event Requests</h2>
                                <div className="right-search">
                                    <input type='text' placeholder='Search here' />
                                    <IoAddSharp />
                                </div>
                            </div>
                            <div className="right-boxes-head">
                                <p>Event Name</p>
                                <p>Event Start</p>
                                <p>Event End</p>
                                <p>Client Name</p>
                                <p>Contact Info</p>
                                <p>Venue</p>
                            </div>
                            <div className="right-boxes-sub">
                                <p><IoEyeOutline onClick={() => setEvent(true)} />Filled Name</p>
                                <p>Jan 12,2024</p>
                                <p>Jan 14,2024</p>
                                <p>Adam Rifsal</p>
                                <p>+ 1234567890</p>
                                <p>Lorem Ipsum Dolor Sit Amet</p>
                            </div>
                            <div className="right-boxes-sub">
                                <p><IoEyeOutline onClick={() => setEvent(true)} />Filled Name</p>
                                <p>Jan 12,2024</p>
                                <p>Jan 14,2024</p>
                                <p>Adam Rifsal</p>
                                <p>+ 1234567890</p>
                                <p>Lorem Ipsum Dolor Sit Amet</p>
                            </div>
                            <div className="right-boxes-sub">
                                <p><IoEyeOutline onClick={() => setEvent(true)} />Filled Name</p>
                                <p>Jan 12,2024</p>
                                <p>Jan 14,2024</p>
                                <p>Adam Rifsal</p>
                                <p>+ 1234567890</p>
                                <p>Lorem Ipsum Dolor Sit Amet</p>
                            </div>
                            <div className="right-boxes-sub">
                                <p><IoEyeOutline onClick={() => setEvent(true)} />Filled Name</p>
                                <p>Jan 12,2024</p>
                                <p>Jan 14,2024</p>
                                <p>Adam Rifsal</p>
                                <p>+ 1234567890</p>
                                <p>Lorem Ipsum Dolor Sit Amet</p>
                            </div>
                            <div className="right-boxes-sub">
                                <p><IoEyeOutline onClick={() => setEvent(true)} />Filled Name</p>
                                <p>Jan 12,2024</p>
                                <p>Jan 14,2024</p>
                                <p>Adam Rifsal</p>
                                <p>+ 1234567890</p>
                                <p>Lorem Ipsum Dolor Sit Amet</p>
                            </div>
                            <div className="right-boxes-sub">
                                <p><IoEyeOutline onClick={() => setEvent(true)} />Filled Name</p>
                                <p>Jan 12,2024</p>
                                <p>Jan 14,2024</p>
                                <p>Adam Rifsal</p>
                                <p>+ 1234567890</p>
                                <p>Lorem Ipsum Dolor Sit Amet</p>
                            </div>
                            <div className="right-boxes-sub">
                                <p><IoEyeOutline onClick={() => setEvent(true)} />Filled Name</p>
                                <p>Jan 12,2024</p>
                                <p>Jan 14,2024</p>
                                <p>Adam Rifsal</p>
                                <p>+ 1234567890</p>
                                <p>Lorem Ipsum Dolor Sit Amet</p>
                            </div>
                            <div className="right-boxes-sub">
                                <p><IoEyeOutline onClick={() => setEvent(true)} />Filled Name</p>
                                <p>Jan 12,2024</p>
                                <p>Jan 14,2024</p>
                                <p>Adam Rifsal</p>
                                <p>+ 1234567890</p>
                                <p>Lorem Ipsum Dolor Sit Amet</p>
                            </div>
                            <div className="right-boxes-sub">
                                <p><IoEyeOutline onClick={() => setEvent(true)} />Filled Name</p>
                                <p>Jan 12,2024</p>
                                <p>Jan 14,2024</p>
                                <p>Adam Rifsal</p>
                                <p>+ 1234567890</p>
                                <p>Lorem Ipsum Dolor Sit Amet</p>
                            </div>
                            <div className="right-boxes-sub">
                                <p><IoEyeOutline onClick={() => setEvent(true)} />Filled Name</p>
                                <p>Jan 12,2024</p>
                                <p>Jan 14,2024</p>
                                <p>Adam Rifsal</p>
                                <p>+ 1234567890</p>
                                <p>Lorem Ipsum Dolor Sit Amet</p>
                            </div>
                            <div className="right-boxes-sub">
                                <p><IoEyeOutline onClick={() => setEvent(true)} />Filled Name</p>
                                <p>Jan 12,2024</p>
                                <p>Jan 14,2024</p>
                                <p>Adam Rifsal</p>
                                <p>+ 1234567890</p>
                                <p>Lorem Ipsum Dolor Sit Amet</p>
                            </div>
                            <div className="right-boxes-sub">
                                <p><IoEyeOutline onClick={() => setEvent(true)} />Filled Name</p>
                                <p>Jan 12,2024</p>
                                <p>Jan 14,2024</p>
                                <p>Adam Rifsal</p>
                                <p>+ 1234567890</p>
                                <p>Lorem Ipsum Dolor Sit Amet</p>
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default Hero