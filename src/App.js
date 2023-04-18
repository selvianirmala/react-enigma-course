import './App.css';
import { AddCourse } from './pages/AddCourse/AddCourse';
import CourseList from './pages/CourseList/CourseList';
import React from 'react';
import courseList from "./fixture/courseList.json"

// const DATA = [
//   {title: "title 1", description: "desc 1"},
//   {title: "title 2", description: "desc 2"}
// ]

function App() {
  const [courses, setCourses] = React.useState(courseList)
  const [screenName, setScreenName] = React.useState("/")
  let ScreenComponent
  let props={}

  switch (screenName) {
    case "/":
      ScreenComponent = CourseList
      // props = {courses: DATA}
      props = {
        ...props, courses
      }
      break;
    case "/add-course":
      ScreenComponent = AddCourse
      props = {
        ...props, setCourses: setCourses
      }
      break;
    default:
      ScreenComponent = CourseList
      // props = {courses: DATA}
      props = {
        ...props, courses
      }
      break;
  }

  // const onNavigate = (screenName) => {
  //   setScreenName(screenName)
  // }

  return (
    <div className="App">

      {/* <AddCourse/> */}
      {/* <CourseList courses={DATA}/> */}
      <ScreenComponent onNavigate={setScreenName} {...props} />
      
    </div>
  );
}

export default App;
