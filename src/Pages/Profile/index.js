import { useSelector } from "react-redux";
import styled from "styled-components";
import Sidebar from "../../Shared/Sidebar";

const profileImg = 'assets/icons/signup1.svg'

const Container = styled.div`
    display: flex;
    background-image: url('assets/images/signup-bg.png');
    background-repeat: no-repeat;
    background-size: 70% 70%;
    overflow-x: hidden;
`
const Body = styled.div`
overflow-x: hidden;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0.01) 97.96%);
    //width: 93%;
    width: 100%;
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(185, 11, 122, 0.06) 97.96%);

    color: #fff;
    display: flex;
    gap: 3rem;
    //align-items: center;
    //justify-content: center;
    flex-direction: column;
    padding: 4rem 0 4rem 0;
    h2{
        align-self: center;
        color: #C8FDCB;
    }
    hr{
        margin: 5rem 5rem 0 3rem;
        width: 85%;
        opacity: 0.3;
    }
    .bottom{
        align-self: center;
        span{
            font-size: 25px;
            color: #6CFF77;
        }
    }
`

const ProfileImage = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    gap: 5rem;
    h3{
        font-size: 24px;
        font-weight: 500;
        color: #C8FDCB;
    }
    span{
        cursor: pointer;
        margin-top: auto;
        color: #6CFF77;
        white-space: nowrap;
    }
    img{
        cursor: pointer;
        border: 1px solid #C8FDCB;
        padding: 50px 50px;
        background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.09) 5.21%, rgba(108, 255, 119, 0.01) 97.96%);
    }
`

const ProfileDetail = styled.div`
    display: flex;
    //margin: 0 24% 0 24%;
    margin: ${
        props=>props.chatDisplay?"0 24% 0 24%":"0 30% 0 30%"
    };
    //align-items: center;
    //gap: 10%;
    justify-content: space-between;
    span{
        font-size: 24px;
        color: #C8FDCB;
    }
   
    input{
        align-self: flex-end;
        height: 40px;
        background: none;
        border: none;
        border-bottom: 0.001rem solid #6CFF77;
        color: #fff;
        font-size: 19px;
        width: 57%;
        padding-left: 8px;
    }
    @media (max-width: 868px) {
        //display: grid;
        //margin: none;
        //grid-template-columns: repeat(2, 1fr);
    }
`

const Profile = (props) => {

    const chatDisplay = useSelector(state=>state.chat)

    return(
        <Container>
            <Body>
                <h2>MY PROFILE</h2>
                <ProfileImage>
                    <h3>Profile image</h3>
                    <img src={profileImg} />
                    <span>EDIT IMAGE</span>
                </ProfileImage>
                <ProfileDetail chatDisplay={chatDisplay}>
                    <span>User Name</span>
                    <input />
                </ProfileDetail>
                <ProfileDetail chatDisplay={chatDisplay}>
                    <span>Email</span>
                    <input />
                </ProfileDetail>
                <ProfileDetail chatDisplay={chatDisplay}>
                    <span>Password</span>
                    <input />
                </ProfileDetail>
                <ProfileDetail chatDisplay={chatDisplay}>
                    <span>Bio</span>
                    <input />
                </ProfileDetail>
                <hr />
                <div className="bottom">
                    <span>Import Network</span>
                </div>
            </Body>

            {/* <div className="sidebar">
                <Sidebar />
            </div> */}
        </Container>
    )
}

export default Profile




// import styled from "styled-components";
// import Sidebar from "../../Shared/Sidebar";

// const profileImg = 'assets/icons/signup1.svg'

// const Container = styled.div`
//     display: flex;
//     background-image: url('assets/images/signup-bg.png');
//     background-repeat: no-repeat;
//     background-size: 70% 70%;
//     overflow-x: hidden;
// `
// const Body = styled.div`
// overflow-x: hidden;
//     //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0.01) 97.96%);
//     //width: 93%;
//     width: 100%;
//     background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(185, 11, 122, 0.06) 97.96%);

//     color: #fff;
//     display: flex;
//     gap: 3rem;
//     flex-direction: column;
//     padding: 4rem 0 4rem 0;
//     h2{
//         align-self: center;
//     }
//     hr{
//         margin-top: 5rem;
//         width: 90%;
//         opacity: 0.3;
//     }
//     .bottom{
//         align-self: center;
//         span{
//             font-size: 25px;
//             color: #6CFF77;
//         }
//     }
// `

// const ProfileImage = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 8%;
//     span{
//         cursor: pointer;
//         margin-top: auto;
//         color: #6CFF77;
//     }
//     img{
//         cursor: pointer;
//         border: 1px solid #C8FDCB;
//         padding: 50px 50px;
//         background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.09) 5.21%, rgba(108, 255, 119, 0.01) 97.96%);
//     }
// `

// const ProfileDetail = styled.div`
//     display: flex;
//     //margin: 0 27vw 0 27vw;
//     align-items: center;
//     gap: 10vw;
//     //justify-content: space-around;
//     div{
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-start;
//         align-items: flex-start;
//     }
//     .inp{
//         align-self: flex-start;
//     }
//     input{
//         height: 40px;
//         background: none;
//         border: none;
//         border-bottom: 0.001rem solid #6CFF77;
//         color: #fff;
//         font-size: 19px;
//         //width: 27vw;
//         padding-left: 8px;
//     }
//     @media (max-width: 868px) {
//         //display: grid;
//         //margin: none;
//         //grid-template-columns: repeat(2, 1fr);
//     }
// `

// const Profile = (props) => {
//     return(
//         <Container>
//             <Body>
//                 <h2>MY PROFILE</h2>
//                 <ProfileImage>
//                     <h2>Profile image</h2>
//                     <img src={profileImg} />
//                     <span>EDIT IMAGE</span>
//                 </ProfileImage>
//                 <ProfileDetail>
//                     <div>
//                     <h2>User Name</h2>
//                     </div>
//                     <div>
//                     <input className="inp" />
//                     </div>
//                 </ProfileDetail>
//                 <ProfileDetail>
//                     <h2>Email</h2>
//                     <input />
//                 </ProfileDetail>
//                 <ProfileDetail>
//                     <h2>Password</h2>
//                     <input />
//                 </ProfileDetail>
//                 <ProfileDetail>
//                     <h2>Bio</h2>
//                     <input />
//                 </ProfileDetail>
//                 <hr />
//                 <div className="bottom">
//                     <span>Import Network</span>
//                 </div>
//             </Body>

//             {/* <div className="sidebar">
//                 <Sidebar />
//             </div> */}
//         </Container>
//     )
// }

// export default Profile