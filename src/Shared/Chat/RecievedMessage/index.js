import styled from "styled-components";

const userIcon = "assets/icons/signup2.svg"

const Container = styled.div`
width: 20vw;
display: flex;
flex-direction: column;

padding-left: 1rem;
    .content-msg{
        display: flex;
        gap: 5px;
    }
    .rec-message{
        color: black;
        padding: 0 0px 0 8px;
        background: rgba(255, 87, 167, 1);
        border: 1px solid #FF57A7;
        flex-direction: row;
            word-wrap: break-word;
        p{

        }
    }
    small{
        color: gray;
        padding-left: 2.6rem;
    }
`

const RecievedMessage = ({text}) => {
    return(
        <Container>
            <div className="content-msg">
                <img src={userIcon} />
                <div className="rec-message">
                    <p>{text}</p>
                </div>
            </div>
            <small>11:59PM</small>
        </Container>
    )
}

export default RecievedMessage