import { useDispatch } from "react-redux";
import styled from "styled-components";
import { shareModalOff } from "../../Redux/Modal/ShareModal/Actions";

const shareImg = "assets/images/share-modal.png"
const copy = "assets/icons/copy-icon1.svg"
const facebook = "assets/icons/facebook.svg"
const twitter = "assets/icons/twitter.svg"
const instagram = "assets/icons/instagram.svg"

const Main = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 111 !important;
    backdrop-filter: blur(18px);
    .modal-handler{
        height: 100vh;
        width: 100vw;
        //background: pink;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem 4rem 4rem 4rem;
    opacity: 0.9;
    gap: 1rem;
    background: linear-gradient(97.02deg, #1A382C 5.21%, #113025 97.96%);
    z-index: 111 !important;
    box-shadow: inset 0 7px 0px -5px #6CFF77,
        inset -5px 0 6px -5px #6CFF77, 
        inset 5px 0 6px -5px #6CFF77;
    position: fixed;
    top: auto;
    bottom: 20rem;
    left: 30rem;
    align-items: center;
    img{
        height: 70px;
        width: 70px;
    }
    h2{
        color: #6CFF77;
    }
`

const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5rem;
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        cursor: pointer;
        img{
            height: 45px;
        }
    }
`

const ShareNFTModal = () => {

    const dispatch = useDispatch()

    const shareModalHandler = () => {
        dispatch(shareModalOff())
    }

    return(
        <Main >
            <div onClick={shareModalHandler} className="modal-handler">

            </div>
        <Container>
            <img src={shareImg} alt="" />
            <h2>SHARE TO YOUR SOCIAL MEDIA</h2>
            <SocialMedia>
                <div>
                    <img src={copy} alt=""/>
                    <span>Copy link</span>
                </div>

                <div>
                    <img src={facebook} alt=""/>
                    <span>Facebook</span>
                </div>

                <div>
                    <img src={twitter} alt=""/>
                    <span>Twitter</span>
                </div>

                <div>
                    <img src={instagram} alt=""/>
                    <span>Instagram</span>
                </div>
            </SocialMedia>
        </Container>
        </Main>
    )
}

export default ShareNFTModal