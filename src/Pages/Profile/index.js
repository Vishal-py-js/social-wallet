import styled from "styled-components";
import Sidebar from "../../Shared/Sidebar";

const profileImg = 'assets/icons/signup1.svg'

const Container = styled.div`
    display: flex;
    background-image: url('assets/images/signup-bg.png');
    background-repeat: no-repeat;
    background-size: 70% 70%;
    .sidebar{
        flex:1;
    }
`

const Body = styled.div`
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0.01) 97.96%);
    flex: 15;
    color: #fff;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    padding: 4rem 0 4rem 0;
    h2{
        align-self: center;
    }
    hr{
        margin-top: 5rem;
        width: 90%;
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
    align-items: center;
    justify-content: center;
    gap: 8vw;
    span{
        cursor: pointer;
        margin-top: auto;
        color: #6CFF77;
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
    margin: 0 27vw 0 27vw;
    align-items: center;
    gap: 1vw;
    justify-content: space-between;
    input{
        height: 40px;
        background: none;
        border: none;
        border-bottom: 0.001rem solid #6CFF77;
        color: #fff;
        font-size: 19px;
        width: 27vw;
        padding-left: 8px;
    }
`

const Profile = (props) => {
    return(
        <Container>
            <Body>
                <h2>MY PROFILE</h2>
                <ProfileImage>
                    <h2>Profile image</h2>
                    <img src={profileImg} />
                    <span>EDIT IMAGE</span>
                </ProfileImage>
                <ProfileDetail>
                    <h2>User Name</h2>
                    <input />
                </ProfileDetail>
                <ProfileDetail>
                    <h2>Email</h2>
                    <input />
                </ProfileDetail>
                <ProfileDetail>
                    <h2>Password</h2>
                    <input />
                </ProfileDetail>
                <ProfileDetail>
                    <h2>Bio</h2>
                    <input />
                </ProfileDetail>
                <hr />
                <div className="bottom">
                    <span>Import Network</span>
                </div>
            </Body>

            <div className="sidebar">
                <Sidebar />
            </div>
        </Container>
    )
}

export default Profile