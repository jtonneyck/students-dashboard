import React from 'react';
import students from "../students.json";
import Student from '../components/Student';
import {Link, Route} from 'react-router-dom';
import "./StudentWiki.css";

function StudentWiki() {
    return (
        <div className="student-wiki">
            <ul className="student-list">
                {
                    students.map((student)=> 
                        <li>
                            <Link to={`/student-wiki/student-detail/${student.firstname}`}>
                                {student.firstname}
                            </Link>
                        </li>
                    )
                }
            </ul>
            <div className="detail-container">
                <Route path="/student-wiki/student-detail/:firstname" component={Student}/>
            </div>
        </div>
    )
}

export default StudentWiki;
