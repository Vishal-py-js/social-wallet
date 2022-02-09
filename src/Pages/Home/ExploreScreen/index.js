import styled from "styled-components";

const seller1 = "/assets/icons/seller1.svg"
const seller2 = "/assets/icons/seller2.svg"
const seller3 = "/assets/icons/seller3.svg"
const seller4 = "/assets/icons/seller4.svg"
const prevArrow = "/assets/icons/prev-arrow.svg"
const nextArrow = "/assets/icons/next-arrow.svg"
const bids1 = "/assets/images/bids1.png"
const bids2 = "/assets/images/bids2.png"
const bidder1 = "/assets/icons/bidder1.svg"
const bidder2 = "/assets/icons/bidder2.svg"
const bidder3 = "/assets/icons/bidder3.svg"
const gem = "/assets/icons/gem.svg"
const flag = "/assets/icons/top-collection-flag.svg"
const topCollection1 = "/assets/icons/top-collection1.svg"
const topCollection2 = "/assets/icons/top-collection2.svg"
const topCollection3 = "/assets/icons/top-collection3.svg"
const topCollection4 = "/assets/icons/top-collection4.svg"
const topCollection5 = "/assets/icons/top-collection5.svg"
const topCollection6 = "/assets/icons/top-collection6.svg"
const topCollection7 = "/assets/icons/top-collection7.svg"

const Container = styled.div`
    padding: 0 8rem 0 8rem;
    height: fit-content;
    // display: flex;
    // flex-direction: column;
    // line-height;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        color: rgba(108, 255, 119, 1);
        font
    }
    select{
        background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
        color: #C8FDCB;
        height: 3rem;
        border-radius: 5px;
        width: 7vw;
        font-size: 19px;
        text-align: center;
        option{
            color: #C8FDCB;
            background: black;
            border-radius: 5px;
        }
    }
`

const Sellers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;
`

const Bids = styled.div`
    display: flex;
    flex-direction: column;
    //gap: 2rem;
    //margin-top: 4rem;
`
const BidsDetail = styled.div`
    display: flex;
    justify-content: space-between;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(108, 255, 119, 1);

    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.03) 5.21%, rgba(108, 255, 119, 0.0) 97.96%);
    background: linear-gradient(97.02deg, rgba(242, 194, 195, 0.12) 5.21%, rgba(242, 194, 195, 0) 97.96%);

    h4{
        color: #C8FDCB;
    }
    h3{
        font-weight: 500;
        font-size: 16px;
    }
    .card-content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            h3{
                font-weight: 700;
                font-size: 18px;
            }
            span{
                color: rgba(200, 253, 203, 1);
            }
        }
    }
    .bidder-content{
        display: flex;
        gap: 0.5rem;
    }
`

const SellerDetails = styled.div`
    display: flex;
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 0;
        border: 1px solid #FB258B;
        padding: 1rem 2rem 1rem 2rem;
        //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.03) 5.21%, rgba(108, 255, 119, 0.0) 97.96%);
        background: linear-gradient(97.02deg, rgba(242, 194, 195, 0.12) 5.21%, rgba(242, 194, 195, 0) 97.96%);

        h4{
            color: #C8FDCB;
        }
        h3{
            font-weight: 500;
            font-size: 16px;
        }
    }
`

const Navigation = styled.div`
    display: flex;
    gap: 15px;
    justify-content: flex-end;
    //margin-right: 3rem;
    
`

const Explore = (props) => {
    return(
        <Container>
            <Header>
                <h2>Popular Sellers</h2>
                <select>
                    <option>TODAY</option>
                    <br/>
                    <option>THIS WEEK</option>
                    <br/>
                    <option>2 WEEKS</option>
                </select>
            </Header>
            
            <Sellers>
                <Navigation>
                    {/* <div> */}
                        <img src={prevArrow} alt="" />
                        <img src={nextArrow} alt=""/>
                    {/* </div> */}
                </Navigation>
                <SellerDetails>
                    <div>
                        <img src={seller1} alt=""/>
                        <h4>NFT seller#01</h4>
                        <h3>138.0942 ETH</h3>
                    </div>

                    <div>
                        <img src={seller2} alt=""/>
                        <h4>NFT seller#01</h4>
                        <h3>138.0942 ETH</h3>
                    </div>

                    <div>
                        <img src={seller3} alt=""/>
                        <h4>NFT seller#01</h4>
                        <h3>138.0942 ETH</h3>
                    </div>

                    <div>
                        <img src={seller4} alt=""/>
                        <h4>NFT seller#01</h4>
                        <h3>138.0942 ETH</h3>
                    </div>

                    <div>
                        <img src={seller1} alt=""/>
                        <h4>NFT seller#01</h4>
                        <h3>138.0942 ETH</h3>
                    </div>

                    <div>
                        <img src={seller2} alt=""/>
                        <h4>NFT seller#01</h4>
                        <h3>138.0942 ETH</h3>
                    </div>

                </SellerDetails>

            </Sellers>

            <br />
            <br />
            <br />
            <br />
            <br />
            <Header>
                <h2>Hot Bids</h2>
                <Navigation>
                    {/* <div> */}
                        <img src={prevArrow} alt=""/>
                        <img src={nextArrow} alt=""/>
                    {/* </div> */}
                </Navigation>
                
            </Header>
            
            <Bids>
                <BidsDetail>
                    <CardContainer>
                        <img src={bids1} alt=""/>
                        <div className="card-content">
                            <div>
                                <h3>CoinwalletNFT</h3>
                                <span>40k Bids</span>
                            </div>
                            <div>
                                <div className="bidder-content">
                                    <img src={bidder1} alt=""/>
                                    <img src={bidder2} alt=""/>
                                    <img src={bidder3} alt=""/>
                                </div>
                                <div>
                                    <img src={gem} alt="gem" />
                                    <span>11.44</span>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <img src={bids2} alt=""/>
                        <div className="card-content">
                            <div>
                                <h3>CoinwalletNFT</h3>
                                <span>40k Bids</span>
                            </div>
                            <div>
                                <div className="bidder-content">
                                    <img src={bidder1} alt=""/>
                                    <img src={bidder2} alt=""/>
                                    <img src={bidder3} alt=""/>
                                </div>
                                <div>
                                    <img src={gem} alt="gem" />
                                    <span>11.44</span>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <img src={bids1} alt=""/>
                        <div className="card-content">
                            <div>
                                <h3>CoinwalletNFT</h3>
                                <span>40k Bids</span>
                            </div>
                            <div>
                                <div className="bidder-content">
                                    <img src={bidder1} alt=""/>
                                    <img src={bidder2} alt=""/>
                                    <img src={bidder3} alt=""/>
                                </div>
                                <div>
                                    <img src={gem} alt="gem" />
                                    <span>11.44</span>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <img src={bids2} alt=""/>
                        <div className="card-content">
                            <div>
                                <h3>CoinwalletNFT</h3>
                                <span>40k Bids</span>
                            </div>
                            <div>
                                <div className="bidder-content">
                                    <img src={bidder1} alt=""/>
                                    <img src={bidder2} alt=""/>
                                    <img src={bidder3} alt=""/>
                                </div>
                                <div>
                                    <img src={gem} alt="gem" />
                                    <span>11.44</span>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                </BidsDetail>

            </Bids>
            <br />
            <br />
            <br />
            <br />

            <Header>
                <h2>Top Collections</h2>
                <Navigation>
                    {/* <div> */}
                        <img src={prevArrow} alt=""/>
                        <img src={nextArrow} alt=""/>
                    {/* </div> */}
                </Navigation>
                
            </Header>
            
            <Bids>
                <BidsDetail>
                    <CardContainer>
                        <img src={bids1} alt=""/>
                        <div className="card-content">
                            <div>
                                <h3>CW-NFT Collections</h3>
                                <img src={flag} alt=""/>
                            </div>
                            <div className="image-content">
                                <img src={topCollection1} alt=""/>
                                <img src={topCollection2} alt=""/>
                                <img src={topCollection3} alt=""/>
                            </div>
                            <div>
                                <div className="bidder-content">
                                    <img src={bidder1} alt=""/>
                                    <span>By NFTuser#012</span>
                                </div>
                                <div>
                                    <img src={gem} alt="gem" />
                                    <span>11.44</span>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <img src={bids2} alt=""/>
                        <div className="card-content">
                            <div>
                                <h3>CW-NFT Collections</h3>
                                <img src={flag} alt=""/>
                            </div>
                            <div className="image-content">
                                <img src={topCollection4} alt=""/>
                                <img src={topCollection5} alt=""/>
                                <img src={topCollection6} alt=""/>
                            </div>
                            <div>
                                <div className="bidder-content">
                                    <img src={bidder1} alt=""/>
                                    <span>By NFTuser#012</span>
                                </div>
                                <div>
                                    <img src={gem} alt="gem" />
                                    <span>11.44</span>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <img src={bids1} alt=""/>
                        <div className="card-content">
                            <div>
                                <h3>CW-NFT Collections</h3>
                                <img src={flag} alt=""/>
                            </div>
                            <div className="image-content">
                                <img src={topCollection7} alt=""/>
                                <img src={topCollection7} alt=""/>
                                <img src={topCollection7} alt=""/>
                            </div>
                            <div>
                                <div className="bidder-content">
                                    <img src={bidder1} alt=""/>
                                    <span>By NFTuser#012</span>
                                </div>
                                <div>
                                    <img src={gem} alt="gem" />
                                    <span>11.44</span>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <img src={bids2} alt=""/>
                        <div className="card-content">
                            <div>
                                <h3>CW-NFT Collections</h3>
                                <img src={flag} alt=""/>
                            </div>
                            <div className="image-content">
                                <img src={topCollection4} alt=""/>
                                <img src={topCollection2} alt=""/>
                                <img src={topCollection1} alt=""/>
                            </div>
                            <div>
                                <div className="bidder-content">
                                    <img src={bidder1} alt=""/>
                                    <span>By NFTuser#012</span>
                                </div>
                                <div>
                                    <img src={gem} alt="gem" />
                                    <span>11.44</span>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                </BidsDetail>

            </Bids>
        </Container>
    )
}

export default Explore