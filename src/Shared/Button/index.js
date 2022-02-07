import styled from "styled-components";

const ButtonContainer = styled.button`
    padding: 15px 30px 15px 30px;
    color: #C8FDCB;
    font-size: 20px;
    display: flex;
    gap: 17px;
    align-items: center;
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.12) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    border: 4px solid linear-gradient(107.63deg, #C8FDCB 38.04%, rgba(0, 0, 0, 0) 112.84%);
`

const Button = (props) => {
    return(
        <ButtonContainer>
            <img src={props.imageSrc} />
            {props.text}
            <img src={props.arrowIcon} />
        </ButtonContainer>
    )
}

export default Button