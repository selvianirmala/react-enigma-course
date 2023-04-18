import Styled from 'styled-components'

const EmptyText = Styled.h3`
    margin: 20px 0
`

const EmptyList = (props) => {
    return (
        <p>{props.text}</p>
    )
}

export default EmptyList