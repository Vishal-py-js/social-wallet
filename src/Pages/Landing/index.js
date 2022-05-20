import styled from "styled-components";

const logo = "assets/icons/charms-logo.svg"
const dots = "assets/icons/dots.svg"
const image1 = "assets/images/landing1.png"
const image2 = "assets/images/landing2.png"
const image3 = "assets/images/landing3.png"
const image4 = "assets/images/landing4.png"
const twitter = "assets/icons/landing-twitter.svg"
const insta = "assets/icons/landing-insta.svg"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(144, 255, 153, 1);
    color: white;
    //z-index: 555;
    //height: 480vh;
    height: fit-content;
    width: 100vw;
`

const NavBar = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(216, 144, 255, 1);
    padding: 10px 3rem;
    border-radius: 3px;
    margin: 10px 10px 10px 10px;
`

const Component1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .nav{
        display: flex;
        gap: 3rem;
        align-items: center;
        h4{
            display: inline-block;
            position: relative;
            font-size: 20px;
            font-weight: 500;
            cursor: pointer;
            color: rgba(144, 255, 153, 1);
            &:after{
                content: '';
                position: absolute;
                width: 100%;
                transform: scaleX(0);
                height: 3px;
                bottom: -2px;
                left: 0;
                background-color: rgba(144, 255, 153, 1);
                transform-origin: bottom right;
                transition: transform 0.3s ease-out;
                }
            &:hover:after {
                transform: scaleX(1);
                transform-origin: bottom left;
                
            }
        }
        button{
            padding: 0 10px;
            height: 2rem;
            background: rgba(144, 255, 153, 1);
            border-radius: 5px;
            border: none;
            color: rgba(216, 144, 255, 1);
            font-size: 17px;
            cursor: pointer;
        }
    }
`

const Component2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding: 4rem 0;
    .header{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 50%;
        position: relative;
        left: 10rem;
        bottom: 2rem;
        h2{
            font-size: 33px;
            font-weight: 500;
            max-width: 30rem;
            //line-height: 30px;
        }
        small{
            color: rgba(255, 255, 255, 1);
            font-size: 17px;
            max-width: 32rem;
        }
        button{
            width: 12rem;
            margin-top: 2rem;
            padding: 10px 0;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            color: rgba(216, 144, 255, 1);
            font-size: 17px;
            font-weight: 600;
            background: rgba(144, 255, 153, 1);
        }
    }
    .image1{
        margin-right: 11rem;
    }
`

const BodyA = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12rem 0 0 0;
    max-height: 60vh;
    background: rgba(216, 144, 255, 1);
    margin: 10px 10px 10px 10px;
    border-radius: 5px;
    h2{
        color: #90FF99;
        font-size: 32px;
        font-weight: 500;
    }
    span{
        font-size: 18px;
    }
    div{
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        align-items: center;
        position: relative;
        top: 2rem;
        max-width: 73%;
        strong{
            font-size: 20px;
            font-weight: 500;
            text-align: center;
            color: #D890FF;
        }
    }
    img{
        box-shadow: 10px 10px 0px -3px #D890FF;
        border-radius: 5px;
    }
`

const BodyB = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20rem 0 0 0;
    max-height: 60vh;
    background: rgba(216, 144, 255, 1);
    margin: 16rem 10px 10px 10px;
    border-radius: 5px;
    h2{
        color: #90FF99;
        font-size: 32px;
        font-weight: 500;
        max-width: 25rem;
        text-align: center;
    }
    span{
        font-size: 18px;
        max-width: 30rem;
        text-align: center;
    }
    div{
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        align-items: center;
        position: relative;
        top: 2rem;
        max-width: 73%;
        strong{
            font-size: 20px;
            font-weight: 500;
            text-align: center;
            color: #D890FF;
        }
    }
    img{
        box-shadow: 10px 10px 0px -3px #D890FF;
        border-radius: 5px;
    }
`

const BodyC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(216, 144, 255, 1);
    height: fit-content;
    margin: 26rem 10px 10px 10px;
    padding: 4rem 0;
    gap: 3rem;
    border-radius: 5px;
    h2{
        color: rgba(144, 255, 153, 1);
        font-size: 32px;
    }
    button{
        padding: 13px 30px;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 600;
        background: rgba(144, 255, 153, 1);
        color: rgba(216, 144, 255, 1);
        border: none;
        cursor: pointer;
    }
`

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 4rem 0 7rem 0;
    justify-content: center;
    height: fit-content;
    background: rgba(216, 144, 255, 1);
    background: none;
    //border: 2px solid black;
    .contacts{
        display: flex;
        gap: 2rem;
        //align-items: center;
        color: rgba(130, 56, 188, 1);
        strong{
            font-size: 20px;
            cursor: pointer;
        }
        .margin{
            width: 5px;
            height: 19px;
            align-self: center;
            background: rgba(130, 56, 188, 1);
        }
    }
    .social{
        display: flex;
        gap: 6rem;
        img{
            cursor: pointer;
        }
    }
`

const LandingPage = () => {
    return(
        <Container>
            <NavBar>
                <Component1>
                    <img src={logo} alt="CHARMS"/>
                    <div className="nav">
                        <h4>Home</h4>
                        <h4>Contacts</h4>
                        <button>Sign Up</button>
                    </div>
                </Component1>
                <Component2>
                    <img src={dots} alt=""/>
                    <div className="header">
                        <h2><font style={{color:"rgba(144, 255, 153, 1)"}}>CHARMS IS A </font>MULTI-CHAIN NFT SOCIAL NETWORK <font style={{color:"rgba(144, 255, 153, 1)"}}>STUFFED INTO A GOOGLE CHROME WIDGET</font></h2>
                        <small>Build public, private and token-gated chat communities with all of your NFTs in one place.</small>
                        <button>SIGN UP FOR BETA</button>
                    </div>
                    <img className="image1" src={image1} alt=""/>
                </Component2>
            </NavBar>

            <BodyA>
                <h2>HANG OUT</h2>
                <span>Start chat communities and send dms while browsing on other sites.</span>
                <div>
                    <img src={image2} alt=""/>
                    <strong>CHARMS provides a built-in pseudonymous chat platform so we can blah blah blah about NFTs and probably never (ever) go to sleep again, WOW! </strong>
                </div>
            </BodyA>

            <BodyB>
                <h2>MAKE SHAREABLE NFT GALLERIES</h2>
                <span>Create public or private NFT galleries and share them. Browse other peoples galleries and talk to them.</span>
                <div>
                    <img src={image3} alt=""/>
                    <strong>CHARMS can organize all of our NFTs into galleries (even cross chain ones!) and share them as public, or password protected vanity URLs.</strong>
                </div>
            </BodyB>

            <BodyC>
                <h2>WE'RE AN EXPERIMENT</h2>
                <img src={image4} alt=""/>
                <button>SIGN UP FOR BETA</button>
            </BodyC>

            <Footer>
                <div className="contacts"> 
                    <strong>FAQ</strong>
                    <div className="margin"></div>
                    <strong>Contact Us</strong>
                    <div className="margin"></div>
                    <strong>Join Mailing List</strong>
                </div>
                <div className="social">
                    <img src={twitter} alt="twitter"/>
                    <img src={insta} alt="instagram"/>
                </div>
            </Footer>
        </Container>
    )
}

export default LandingPage