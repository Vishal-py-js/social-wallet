import styled from "styled-components";

const ButtonContainer = styled.button`
    padding: 15px 30px 15px 30px;
    color: #C8FDCB;
    color: black;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    gap: 17px;
    align-items: center;
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.12) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    border: 4px solid linear-gradient(107.63deg, #C8FDCB 38.04%, rgba(0, 0, 0, 0) 112.84%);
    
      
    transition: all 350ms;
    &:hover{
        // transition-duration: 0.3s;
        // transform: scale(1.04); 
        }
        
        position: relative;
        cursor:pointer;
        user-select:none;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        transition-duration: 0.3s;
        -webkit-transition-duration: 0.2s; /* Safari */
          
          
          &:hover {
            transition-duration: 0.3s;
          }
          
          &:after {
            content: "";
            position: absolute;
            border-radius: 4em;
            left: 0;
            top:0;
            width: 100%;
            height: 100%;
            opacity: 0;
            //transition: all 0.2s;
            
          }
          
          &:active:after {
            //position: absolute;
            left: 0;
            top:0;
            opacity: 1;
            //transition: 0.2s;
          }
          
          &:active {
            top: 2px;
            //transform: scale(1.05);
          }
`

const Button = (props) => {
    return(
        <ButtonContainer onClick={props.onClick}>
            <img src={props.imageSrc} />
            {props.text}
            <img src={props.arrowIcon} />
        </ButtonContainer>
    )
}

export default Button