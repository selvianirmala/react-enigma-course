import Container from "../../component/Container/Container"
import EmptyList from "../../component/EmptyList./EmptyList"
import {StyledListGroup} from "./CourseList.styled"
import CourseItem from "./components/courseItem/CourseItem"
import {Button} from "react-bootstrap"

const ListItem = ({data}) => {
    // const {data} = props
    return (
        <StyledListGroup>
            {/* {
                data.map((course, index) => {
                    return (
                        <CourseItem
                            title = {course.title}
                            description = {course.description}
                            key = {index}
                        />
                    )
                })
            } */}

            {data?.map((item, index) => (
                <CourseItem 
                    data={item} 
                    key={item?.courseId}/>
            ))}
        </ StyledListGroup>
    )
}

const CourseList = ({onNavigate, courses}) => {
    // const {cousrses, onNavigate} = props
    return (
        <Container>
            <h1>Course List Page</h1>
            <Button variant="success" onClick={() => onNavigate("/add-course")}>Add Course</Button>
            {courses?.data?.length > 0 ? <ListItem data={courses?.data}/> : <EmptyList text = "List is empty..." />}
        </Container>
    )
}

export default CourseList