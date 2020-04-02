import React from 'react';
import "./Student.css";
import students from '../students.json';
function Student(props) {
    let leStudent = students.find((student)=> student.firstname === props.match.params.firstname);
    return (
        <div className="student">
            <h1>{leStudent.firstname} {leStudent.lastname}</h1>
        </div>
    )
}

export default Student;
