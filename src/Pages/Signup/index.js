import styled from "styled-components";
import Button from "../../Shared/Button";

const userIcon1 = "assets/icons/signup1.svg"
const userIcon2 = "assets/icons/signup2.svg"
const instaIcon = "assets/icons/signup-insta.svg"
const twitterIcon = "assets/icons/signup-twitter.svg"
const arrowIcon = "assets/icons/arrow-icon.svg"

const Container = styled.div`
    height: 100vh;
    background-image: url('assets/images/signup-bg.png');
    background-repeat: no-repeat;
    background-size: 70% 70%;
    color: #fff; 
    display: flex;
    gap: 5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1{
        background: -webkit-linear-gradient(90.07deg, #C8FDCB 0.06%, #FF57A7 106.93%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    p{
        font-size: 17px;
    }
`

const Header = styled.div`
    strong{
        cursor: pointer;
        font-size: 21px;
        background: #6CFF77;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const UserLogin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    align-items: center;
    div{
        display: flex;
        gap: 4rem;
    }
`

const Signup = (props) => {
    return(
        <Container>
            <Header>
                <h1>WELCOME TO COIN WALLET</h1>
                <p>Already have an account? <strong>Login</strong></p>
            </Header>

            <UserLogin>
                <p>Sign up with your wallet or with your social media</p>
                <div>
                    <Button text="User#01" imageSrc={userIcon1} arrowIcon={arrowIcon}/>
                    <Button text="Usertwin" imageSrc={userIcon2} arrowIcon={arrowIcon}/>
                </div>
            </UserLogin>

            <UserLogin>
                <p>Sign up with Social media accounts</p>
                <div>
                    <Button text="Twitter" imageSrc={twitterIcon} arrowIcon={arrowIcon}/>
                    <Button text="Instagram" imageSrc={instaIcon} arrowIcon={arrowIcon}/>
                </div>
            </UserLogin>
        </Container>
    )
}

export default Signup