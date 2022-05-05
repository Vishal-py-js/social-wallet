import styled from "styled-components";

const userIcon = "assets/icons/signup1.svg"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    max-width: 100%;
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
            max-width: 21rem;
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
    var date = new Date
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return(
        <Container>
            <div className="msg-content">
                <div className="sent-message">
                    <p>{text}</p>
                </div>
                <img src={userIcon} />
            </div>
            <small>{strTime}</small>
        </Container>
    )
}

export default SentMessage