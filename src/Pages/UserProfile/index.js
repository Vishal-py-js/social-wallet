import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CommentModal from "../Home/NFTScreen/ProfileScreen/multiGridCard/CommentModal";
import PostModal from "./PostModal";

const image1 = "assets/icons/user-profile1.svg"
const edit = "assets/icons/edit.svg"
const urlIcon = "assets/icons/url-icon.svg"

const nft1 = "assets/images/nft-card7.png"
const nft2 = "assets/images/nft-card8.png"
const nft3 = "assets/images/nft-card9.png"
const nft4 = "assets/images/nft-card10.png"
const nft5 = "assets/images/nft-card11.png"
const nft6 = "assets/images/nft-card12.png"

const Container = styled.div`
    display: flex;
    //width: 90vw;
    width: ${
        props=>props.chatDisplay?"58vw": "90vw"
    };
    background: rgba(223, 162, 255, 1);
    transition: 0.7s;
    flex-direction: column;
    //align-items: center;
    justify-content: center;
    padding: 5rem 0 3rem 4rem;
    //margin-right: 2rem;
    gap: 3rem;
    h2{
        //color: #C8FDCB;
        color: rgba(13, 3, 51, 1);
    }
`

const ProfileDetails = styled.div`
    display: flex;
    gap: 2rem;
    padding-bottom: 3rem;
    .profile-detail{
        display: flex;
        //background: lightgray;
        gap: 1rem;
        flex-direction: column;
        .profile-image{
            padding: 5px 5px;
            //border: 2px solid rgba(108, 255, 119);
            box-shadow: 10px 10px 20px 0.25px rgba(0, 0, 0, 0.35);
            border-radius: 5px;
            div{
                padding: 25px 25px;
                background: linear-gradient(180deg, #C8FDCB 0%, #0C1B0D 100%);
            }

        }
    }
    .user{
        width: 35vw;
        //background: red;
        color: white;
        color: rgba(13, 3, 51, 1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .user-name{
            display: flex;
            align-items: center;
            gap: 3vw;
            strong{
                font-size: 24px;
                //color: #C8FDCB;
                color: rgba(13, 3, 51, 1);

            }
        }
        .user-bio{
            span{
                //color: #C8FDCB;
                color: rgba(13, 3, 51, 1);
                font-size: 20px;
                font-weight: 700;
            }
            p{
                font-size: 17px;
            }
        }
        .user-url{
            display: flex;
            gap: 2rem;
            align-items: center;
            small{
                //color: #C8FDCB;
                color: rgba(13, 3, 51, 1);
                font-size: 16px;
            }
        }
        button{
            width: fit-content;
            font-weight: 600;
            font-size: 17px;
            //color: #6CFF77;
            color: rgba(13, 3, 51, 1);
            border: 2px solid rgba(13, 3, 51, 1);
        }
    }
    button{
        //color: rgba(200, 253, 203, 1);
        color: rgba(13, 3, 51, 1);
        background: linear-gradient(97.02deg, rgba(108, 255, 119, 0) 5.21%, rgba(185, 11, 122, 0) 97.96%);
        padding: 10px 20px;
        margin-top: 0.5rem;
        //border: 1px solid rgba(108, 255, 119);
        border: 1px solid rgba(13, 3, 51, 1);
    }
`

const Collection = styled.div`
    display: grid;
    grid-gap: 3rem;
    padding-right: 2rem;
    //grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-columns: ${
        props=>props.chatDisplay?"repeat(4, minmax(0, 1fr))":"repeat(6, minmax(0, 1fr))"
    };
`

const CardContainer = styled.div`
    padding: 4px 5px 0 5px;
    //border: 2px solid rgba(108, 255, 119);
    box-shadow: 10px 10px 20px 2px rgba(0, 0, 0, 0.35);
    border-radius: 5px;
    width: fit-content;
    div{
        padding: 25px 25px;
        //background: linear-gradient(180deg, #C8FDCB 0%, #0C1B0D 100%);
    }
`

const NFTCard = ({imgSrc}) => {

    const [showPost, setShowPost] = useState(false);

    const handlePost = () => {
        setShowPost(true)
    }

    return(
        <CardContainer>
            <img onClick={handlePost} src={imgSrc} alt="user"/>
            {/* {
                showPost?<PostModal imgSource={imgSrc} setShowPost={setShowPost}/>:""
            } */}
        </CardContainer>
    )
}

const UserProfile = () => {

    const chatDisplay = useSelector(state=>state.chat)

    return(
        <Container chatDisplay={chatDisplay}>
            <ProfileDetails>
                <div className="profile-detail">
                    <div className="profile-image">
                        <div>
                            <img src={image1} alt="user"/>
                        </div> 
                    </div>
                    {/* <button>EDIT PROFILE</button> */}
                </div>
                <div className="user">
                    <div className="user-name">
                        <strong>user_alex</strong>
                        {/* <img src={edit} alt="edit" /> */}
                    </div>
                    <div className="user-bio">
                        <span>Bio</span>
                        <p>Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur voluptatibus qui nostrum quasi et mollitia sapiente.</p>
                    </div>
                    <div className="user-url">
                        <img src={urlIcon} alt=""/>
                        <small>www.nftuser123.com</small>
                    </div>
                    <button>UPLOAD NFT</button>
                </div>
            </ProfileDetails>

            <h2>NFT Collection</h2>
            <Collection chatDisplay={chatDisplay}>
                <NFTCard imgSrc={nft1}/>
                <NFTCard imgSrc={nft2}/>
                <NFTCard imgSrc={nft3}/>
                <NFTCard imgSrc={nft4}/>
                <NFTCard imgSrc={nft5}/>
                <NFTCard imgSrc={nft6}/>
                <NFTCard imgSrc={nft4}/>
                <NFTCard imgSrc={nft3}/>
                <NFTCard imgSrc={nft2}/>
                <NFTCard imgSrc={nft1}/>
                <NFTCard imgSrc={nft6}/>
                <NFTCard imgSrc={nft3}/>
                <NFTCard imgSrc={nft2}/>
                <NFTCard imgSrc={nft5}/>
                <NFTCard imgSrc={nft4}/>
                <NFTCard imgSrc={nft1}/>

            </Collection>
        </Container>
    )
}

export default UserProfile