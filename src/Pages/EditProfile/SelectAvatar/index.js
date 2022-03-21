import { useSelector } from "react-redux";
import styled from "styled-components";

const avatar1 = "assets/icons/avatar1.svg"
const avatar2 = "assets/icons/avatar2.svg"
const avatar3 = "assets/icons/avatar3.svg"
const avatar4 = "assets/icons/avatar4.svg"
const avatar5 = "assets/icons/avatar5.svg"
const avatar6 = "assets/icons/avatar6.svg"
const avatar7 = "assets/icons/avatar7.svg"
const avatar8 = "assets/icons/avatar8.svg"
const avatar9 = "assets/icons/avatar9.svg"

const arrow = "assets/icons/more-arrow.svg"
const close = "assets/icons/close-icon.svg"

const Container = styled.div`
    position: absolute;
    z-index: 2;
    //left: 54rem;
    //left: 32.4rem;
    left: ${
        props=>props.chatDisplay?"32.4rem":"54rem"
    };
    top: 13.5rem;
    transition: 0.9s;
    background: black;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0) 5.21%, rgba(185, 11, 122, 0) 97.96%);
    height: 37rem;
    width: 23.5rem;
    border: 1px solid #C8FDCB;
    
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px 0 15px;
        h3{
            font-weight: 300;
            font-size: 17px;
        }
    }
    .explore-more{
        display: flex;
        align-items: center;
        gap: 2rem;
        h2{
            font-size: 19px;
            font-weight: 500;
            padding-left: 15px;
            cursor: pointer;
        }
        img{
            cursor: pointer;
        }
    }
`

const Collection = styled.div`
    display: grid;
    grid-gap: 1rem;
    padding: 0 1rem 0 1rem;
    max-height: 30rem;
    grid-template-columns: repeat(3, minmax(0, 1fr)); 
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    overflow-y: scroll;
`

const CardContainer = styled.div`
    display: flex;
    background: linear-gradient(180deg, #C8FDCB 0%, #0C1B0D 100%);
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid rgba(108, 255, 119);
    //align-items: center;
    justify-content: center;
`

const AvatarCard = ({imgSrc}) => {
    return(
        <CardContainer>
            <img src={imgSrc} alt="avatar"/>
        </CardContainer>
    )
}

const SelectAvatar = ({setSelectAvatar}) => {

    const chatDisplay = useSelector(state=>state.chat)

    const handleAvatarModal = () => {
        setSelectAvatar(false)
    }

    return(
        <Container chatDisplay={chatDisplay}>
            <div className="header">
                <h3>SELECT YOUR FAVORITE AVATAR</h3>
                <img onClick={handleAvatarModal} src={close} alt="close"/> 
            </div>
            <Collection>
                <AvatarCard imgSrc={avatar1}/>
                <AvatarCard imgSrc={avatar2}/>
                <AvatarCard imgSrc={avatar3}/>
                <AvatarCard imgSrc={avatar4}/>
                <AvatarCard imgSrc={avatar5}/>
                <AvatarCard imgSrc={avatar6}/>
                <AvatarCard imgSrc={avatar7}/>
                <AvatarCard imgSrc={avatar8}/>
                <AvatarCard imgSrc={avatar9}/>
                <AvatarCard imgSrc={avatar4}/>
                <AvatarCard imgSrc={avatar5}/>
                <AvatarCard imgSrc={avatar6}/>
                <AvatarCard imgSrc={avatar1}/>
                <AvatarCard imgSrc={avatar2}/>
                <AvatarCard imgSrc={avatar3}/>
                <AvatarCard imgSrc={avatar7}/>
                <AvatarCard imgSrc={avatar8}/>
                <AvatarCard imgSrc={avatar9}/>
            </Collection>
            <div className="explore-more">
                <h2>SEE MORE AVATARS</h2>
                <img src={arrow} alt="see more"/>
            </div>
        </Container>
    )
}

export default SelectAvatar