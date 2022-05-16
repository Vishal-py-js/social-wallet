import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { shareModalOn } from "../../../../../Redux/Modal/ShareModal/Actions";


const cardImg1 = "./assets/images/nft-card1.png"
const star = "./assets/icons/star.svg"
const starTransparent = "./assets/icons/star-transparent.svg"
const gem = "./assets/icons/gem.svg"
const share = "./assets/icons/share-icon.svg"

const Container = styled.div`
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    width: fit-content;
    padding: 0.5rem 1rem 0rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 10px 10px 20px 0.25px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    //border: 1px solid #C8FDCB;
`

const Image = styled.div`
    
    .star{
        z-index: 1;
        position: relative;
        margin: 0 0rem 9rem 9.3rem;
        padding: 10px 0px 0 0;
    }
    .image{
        position: absolute;
    }
`

const Text = styled.div`
    display: flex;
    align-items: center;
    //position: relative;
    justify-content: space-between;
    //gap: 8px;
    color: #C8FDCB;
    color: rgba(13, 3, 51, 1);
    font-size: 17px;
    div{
        display: flex;
        align-items: center;
    }
    p{
        font-weight: 400;
    }
    img{
        height: 17px;
        cursor: pointer;
    }
`

const ProfileMultiCard = ({imgSrc}) => {

    const dispatch = useDispatch()

    const shareModalHandler = () => {
        dispatch(shareModalOn())
    }

    // const [star, setStar] = useState(false)
    return(
        <Container>
            <Image>
                <img className="image" src={imgSrc} alt=""/>
                <img className="star" src={star} alt=""/>
            </Image>
            <Text>
                <p>COMMENT</p>
                <img onClick={shareModalHandler} src={share} alt="" />
                <div>
                    <img src={gem} alt=""/>
                    <span>11.44</span>
                </div>
            </Text>
        </Container>
    )
}

export default ProfileMultiCard