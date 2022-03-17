import { useSelector } from "react-redux";
import styled from "styled-components";

const image1 = "assets/icons/user-profile1.svg"
const edit = "assets/icons/edit.svg"

const Container = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 4rem 20rem 4rem 20rem;
    padding: ${
        props=>props.chatDisplay?"4rem 15rem 4rem 15rem":"4rem 30rem 4rem 30rem"
    };
    transition: 0.7s;
    gap: 1rem;
    //align-items: center;
    h2{
        align-self: center;
        color: #6CFF77;
    }
`

const UserProfile = styled.div`
    display: flex;
    align-items: center;
    //gap: 10rem;
    padding-top: 4rem;
    justify-content: space-between;
`

const Avatar = styled.div`
    display: flex;
    //background: lightgray;
    gap: 1rem;
    flex-direction: column;
    .profile-image{
        padding: 5px 5px;
        cursor: pointer;
        width: 12rem;
        border: 2px solid rgba(108, 255, 119);
        div{
            padding: 25px 25px;
            background: linear-gradient(180deg, #C8FDCB 0%, #0C1B0D 100%);
        }
    }
    button{
        background: linear-gradient(97.02deg, rgba(108, 255, 119, 0) 5.21%, rgba(185, 11, 122, 0) 97.96%);
        border: 2px solid rgba(108, 255, 119);
        padding: 10px 25px;
        color: #C8FDCB;
        font-size: 16px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
    }
`

const UserName = styled.div`
    display: flex;
    flex-direction: column;
    h3{
        color: #C8FDCB;
        font-size: 22px;
    }
    input{
        background: linear-gradient(97.02deg, rgba(108, 255, 119, 0) 5.21%, rgba(185, 11, 122, 0) 97.96%);
        height: 35px;
        width: 22rem;
        font-size: 20px;
        color: #fff;
        padding-left: 15px;
        border: 1px solid rgba(108, 255, 119);
        :focus{
            outline: 0.001rem solid #6CFF77;
            border-radius: 3px;
        }
    }

`

const Bio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .bio-content{
        h3{
            color: #C8FDCB;
            font-size: 22px;
        }
        textarea{
            width: 22rem;
            height: 10rem;
            color: #fff;
            font-size: 20px;
            padding: 12px 0 0 15px;
            background: linear-gradient(97.02deg, rgba(108, 255, 119, 0) 5.21%, rgba(185, 11, 122, 0) 97.96%);
            border: 1px solid rgba(108, 255, 119);
            :focus{
                outline: 0.001rem solid #6CFF77;
                border-radius: 3px;
            }
        }
    }
`

const Save = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 5rem;
    div{
        width: 23rem;
        display: flex;
        align-items: flex-start;
        button{
            cursor: pointer;
            width: fit-content;
            background: rgba(108, 255, 119, 0.15);
            padding: 12px 40px;
            font-size: 18px;
            font-weight: 600;
            border: 2px solid rgba(108, 255, 119, 1);
            color: rgba(108, 255, 119, 1);
        }
    }
`



const EditProfile = () => {

    const chatDisplay = useSelector(state=>state.chat)

    return(
        <Container chatDisplay={chatDisplay}>
            <h2>EDIT USER PROFILE</h2>
            <UserProfile>
                <Avatar className="profile-detail">
                    <div className="profile-image">
                        <div>
                            <img src={image1} alt="user"/>
                        </div> 
                    </div>
                    <button>EDIT AVATAR<img src={edit}/></button>
                </Avatar>
                <UserName>
                    <h3>User Name</h3>
                    <input placeholder="user_alex" />
                </UserName>
            </UserProfile>
            <Bio>
                <div className="bio-content">
                    <h3>Bio</h3>
                    <textarea placeholder="TYPE YOUR BIO HERE"/>
                </div>
            </Bio>
            <Save>
                <div>
                    <button>SAVE</button>
                </div>
            </Save>
        </Container>
    )
}

export default EditProfile