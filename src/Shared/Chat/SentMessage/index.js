import styled from "styled-components";

const userIcon = "assets/icons/signup1.svg"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    .msg-content{
        display: flex;
        gap: 5px;
        padding-left: 10rem;
    }
    .sent-message{
        color: black;
        padding: 0 5px 0 8px;
        background: #6CFF77;
        border: 1px solid #6CFF77;
        flex-direction: row;
            word-wrap: break-word;
        p{

        }
    }
    small{
        display: flex;
        align-self: flex-end;
        color: gray;
        padding-right: 2.7rem;
    }
`

const SentMessage = ({text}) => {
    return(
        <Container>
            <div className="msg-content">
                <div className="sent-message">
                    <p>{text}</p>
                </div>
                <img src={userIcon} />
            </div>
            <small>11:59PM</small>
        </Container>
    )
}

export default SentMessage