import React, { useState } from 'react';
import './AttendanceMarking.css';

const studentsData = [
  { id: 1, name: 'John Doe', rollNumber: '123456', section:'A', attendance: [] },
  { id: 2, name: 'Jane Doe', rollNumber: '234567', section:'B',attendance: [] },
  { id: 3, name: 'Michael Doe', rollNumber: '345678',section:'A', attendance: [] },
  { id: 4, name: 'Emma Doe', rollNumber: '456789',section:'C', attendance: [] },
  { id: 5, name: 'Lucas Doe', rollNumber: '567890',section:'D', attendance: [] },
  // Add more students here
];

const AttendanceMarking = () => {
  const [classValue, setClassValue] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(studentsData);
  const [filtereStudents, setFilteredSectionStudents] = useState(studentsData);

  const handleClassChange = (event) => {
    const classValue = event.target.value;
    setClassValue(classValue);

    setFilteredStudents(
      studentsData.filter((student) => student.rollNumber.includes(classValue))
    );
    
    setFilteredSectionStudents(
      studentsData.filter((student) => student.section.includes(classValue))
    );
  };

  const markAttendance = (studentId, isPresent) => {
    setFilteredStudents(
      filteredStudents.map((student) =>
        student.id === studentId
          ? { ...student, attendance: [...student.attendance, isPresent] }
          : student
      )
    );
    setFilteredSectionStudents(
      filtereStudents.map((student) =>
        student.id === studentId
          ? { ...student, attendance: [...student.attendance, isPresent] }
          : student
      )
    );
  };

  return (
    <div className="attendance-marking">
      <h1>Attendance Marking</h1>
      <div className="filter">
     
        <label htmlFor="class-select">Class:</label>
        <select id="class-select" value={classValue} onChange={handleClassChange}>
          <option value="">Select a class</option>
          {studentsData.map((student) => (
            <option key={student.id} value={student.rollNumber}>
              {student.rollNumber}
            </option>
          ))}
        </select>
        <label htmlFor="class-select">Section:</label>
        <select id="class-select" value={classValue} onChange={handleClassChange}>
          <option value="">Select Section</option>
          {studentsData.map((student) => (
            <option key={student.id} value={student.section}>
              {student.section}
            </option>
          ))}
        </select>
      </div>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Section</th>
            <th>01
         </th>
         <th>02
         </th>
         <th>03
         </th>
         <th>04
         </th>
         <th>05
         </th>
         <th>06
         </th>
         <th>07
         </th>
         <th>08
         </th>
         <th>09
         </th>
         <th>10
         </th>
         <th>10
         </th>
         <th>12
         </th>
         <th>13
         </th>
         <th>14
         </th>
         <th>15
         </th>
         <th>16
         </th>
         <th>17
         </th>
         <th>18
         </th>
         <th>19
         </th>
         <th>20
         </th>
         <th>21
         </th>
         <th>22
         </th>
         <th>23
         </th>
         <th>24
         </th>
         <th>25
         </th>
         <th>26
         </th>
         <th>27
         </th>
         <th>28
         </th>
         <th>29
         </th>
         <th>30
         </th>
         <th>31
         </th>

          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.section}</td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                  onClick={() => markAttendance(student.id, true)}
                >
                
                </button>
                {/* <button
                  className={`attendance-button ${
                    student.attendance.includes(false) ? 'absent' : ''
                  }`}
                  onClick={() => markAttendance(student.id, false)}>
                  Absent
                </button> */}
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                
                >
              
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                  
                >
                
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                 
                >
           
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                
                >
              
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                
                >
             
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                 
                >
            
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                 
                >
                
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                  
                >
            
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                 
                >
              
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                
                >
               
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                
                >
           
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                 
                >
              
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
              
                >
      
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                
                >
           
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                 
                >
          
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                  
                >
                
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
              
                >
                 
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
             
                >
                 
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
             
                >
               
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
             
                >
           
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
             
                >
               
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
            
                >
            
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
               
                >
             
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                 
                >
                
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                
                >
              
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
          
                >
             
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
                 
                >
               
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
               
                >
              
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
        
                >
                 
                </button>
                
              </td>
              <td>
                <button
                  className={`attendance-button ${
                    student.attendance.includes(true) ? 'present' : ''
                  }`}
              
                >
               
                </button>
                
              </td>

           
            
            </tr>
          ))}
        </tbody>
      </table>
      <button className='click'>Submit</button>
    </div>
  );
};

export default AttendanceMarking;