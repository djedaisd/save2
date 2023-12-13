// import React, { useState, useEffect } from 'react';
// import CreateCourses from '../modals/CreateCourses';
//
// const ParentComponent = () => {
//     const [modal, setModal] = useState(false);
//     const [courses, setCourses] = useState([]);
//
//     // Fetch courses when the component mounts
//     useEffect(() => {
//         fetch('http://localhost:8000/api/courses/')
//             .then(response => response.json())
//             .then(data => setCourses(data.allCourses))
//             .catch(error => console.error('Error fetching courses:', error));
//     }, []);
//
//     const toggle = () => {
//         setModal(!modal);
//     };
//
//     const saveCourse = (newCourse) => {
//         // Handle saving the new course if needed
//         console.log('New course saved:', newCourse);
//     };
//
//     return (
//         <div>
//             {/* Other components or content */}
//             <CreateCourses modal={modal} toggle={toggle} save={saveCourse} courses={courses} />
//         </div>
//     );
// };
//
// export default ParentComponent;