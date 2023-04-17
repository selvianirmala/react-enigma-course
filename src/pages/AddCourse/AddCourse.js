import React from "react";

import FormInput from "../../component/FormInput";
import useAddCourse from "./useAddCourse";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { StyledContainer, StyledForm, StyledFormInput, StyledTitle } from "./AddCourse.styled";

const FORM_LIST = [
    { id: "title", label: "Title", type: "text", placeholder: "Enter course title" },
    { id: "description", label: "Description", type: "textarea", placeholder: "Enter course description" },
    { id: "typeId", label: "Type Id", type: "text", placeholder: "Enter course type id" },
    { id: "courseFile", label: "Course Material", type: "file", placeholder: "Choose course material" },
    { id: "level", label: "Level", type: "text", placeholder: "Enter course level" },
    { id: "duration", label: "Duration", type: "text", placeholder: "Enter course duration" }
]

export const AddCourse = () => {
    const{getter, setter} = useAddCourse()

    return(
        <StyledContainer>
            <StyledTitle color={"green"}>Add Course Page</StyledTitle>

            <Form>
                {FORM_LIST.map(Form => (
                    <FormInput
                        label = {Form.label}
                        type = {Form.type}
                        placeholder = {Form.placeholder}
                        value = {getter[Form.id]}
                        onChange = {setter[Form.id]}>
                    </FormInput>
                )) }
                <ButtonGroup>
                    <Button variant="success">
                        Submit
                    </Button>

                    <Button variant="secondary">
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}