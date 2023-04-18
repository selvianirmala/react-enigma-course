import React from "react"
import {Button, ButtonGroup, Col} from "react-bootstrap"
import { StyledButton, StyledTitle } from "./CourseItemstyled"

const CourseItem = ({data}) => {
    // const {title, description} = props
    
    return (
        <>
            <Col>
                <StyledTitle>{data?.title}</StyledTitle>
                <p>{data?.description}</p>
            </Col>

            <ButtonGroup>
                <StyledButton variant="primary">Edit</StyledButton>
                <StyledButton variant="danger">Delete</StyledButton>
                <StyledButton variant="secondary">Download</StyledButton>
            </ButtonGroup>
        </>
    )
}

export default React.memo(CourseItem)