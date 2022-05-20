import styled from "styled-components";

const user1 = "assets/icons/friend1.svg"
const user2 = "assets/icons/friend2.svg"

const plusIcon = "assets/icons/plus-icon.svg"
const inputIcon = "assets/icons/msg-input-icon.svg"
const close = "assets/icons/close-icon.svg"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    //align-self: center;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 100vh;
    position: fixed;
    width: 93.3vw;
    //background: none;
    z-index: 2;
    backdrop-filter: blur(5px);
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    //align-self: center;
    //justify-content: center;
    //position: relative;
    //padding: 0 0 1px 0;
    width: 30vw;
    height: fit-content;
    background: red;
    background: rgba(12, 17, 15, 1);
    background: rgba(221, 164, 252, 1);
    //border: 2px solid black;
    box-shadow: 20px 20px 40px 10px rgba(0, 0, 0, 0.7);
    .close{
        height: 20px;
        position: relative;
        bottom: 12px;
        left: 12px;
        align-self: flex-end;
    }
    .image{
        img{
            width: 96%;
            padding: 0px 8px;
            // border: 4px solid;
            // border-image: linear-gradient(107.63deg, #C8FDCB 64.34%, rgba(0, 0, 0, 0) 112.84%);
            // border-image-slice: 1;
        }
    }
`

const Comments = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0.5rem;
    margin: 0.5rem 0;
    max-height: 15rem;
    gap: 15px;
    //color: black;
    justify-content: space-around;
    scroll-snap-align: end;
    //scroll-snap-type: y proximity;
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    overflow-y: scroll;

    .comment{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        p{
            line-height: 1;
            color: rgba(152, 80, 191, 1);
        }
        font{
            color: rgba(144, 255, 153, 1);
        }
    }

    .user-detail{
        display: flex;
        flex-direction: column;
        width: 3rem;
        align-items: center;
        img{
            height: 30px;
            border: 3px solid;
            border-image: linear-gradient(180deg, #B9FEBD 0%, rgba(0, 0, 0, 0) 100%);
            border-image-slice: 1;
            padding: 4px 4px;
        }
    }
`

const CommentInput = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 10px 10px;
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(185, 11, 122, 0.06) 97.96%);
    background: rgba(144, 255, 153, 1);
    //border: 1px solid #6CFF77; 
    border: 1px solid rgba(13, 3, 51, 1);
    img{
        height: 30px;
    }
    div{
        display: flex;
        gap: 1.5rem;
        input{
            width: 20rem;
            border: none;
            background: none;
            color: black;
            font-size: 18px;
            :focus{
                outline: none;
            }
        }
    }
`

const CommentModal = ({imgSource, setShowComment}) => {

    const handleClose = () => {
        setShowComment(false)
    }

    return(
        <Container>
            <Body>
                <img onClick={handleClose} className="close" src={close} alt="close"/>
                <div className="image">
                    <img src={imgSource} alt=""/>
                </div>
                <Comments>
                    <div className="comment">
                        <div className="user-detail">
                            <img src={user1} alt="user"/>
                            <small>User#2</small>
                        </div>
                        <div>
                            <p>User#2 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur voluptatibus qui nostrum quasi et mollitia sapiente.</p>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="user-detail">
                            <img src={user2} alt="user"/>
                            <small>User#3</small>
                        </div>
                        <div>
                            <font>User#3 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur.</font>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="user-detail">
                            <img src={user1} alt="user"/>
                            <small>User#2</small>
                        </div>
                        <div>
                            <p style={{color: "green"}}>User#2 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur voluptatibus qui nostrum quasi et mollitia sapiente.</p>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="user-detail">
                            <img src={user2} alt="user"/>
                            <small>User#3</small>
                        </div>
                        <div>
                            <font>User#3 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur.</font>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="user-detail">
                            <img src={user1} alt="user"/>
                            <small>User#2</small>
                        </div>
                        <div>
                            <p>User#2 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur voluptatibus qui nostrum quasi et mollitia sapiente.</p>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="user-detail">
                            <img src={user2} alt="user"/>
                            <small>User#3</small>
                        </div>
                        <div>
                            <font>User#3 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur.</font>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="user-detail">
                            <img src={user1} alt="user"/>
                            <small>User#2</small>
                        </div>
                        <div>
                            <p>User#2 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur voluptatibus qui nostrum quasi et mollitia sapiente.</p>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="user-detail">
                            <img src={user2} alt="user"/>
                            <small>User#3</small>
                        </div>
                        <div>
                            <font>User#3 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur.</font>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="user-detail">
                            <img src={user1} alt="user"/>
                            <small>User#2</small>
                        </div>
                        <div>
                            <p>User#2 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur voluptatibus qui nostrum quasi et mollitia sapiente.</p>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="user-detail">
                            <img src={user2} alt="user"/>
                            <small>User#3</small>
                        </div>
                        <div>
                            <font>User#3 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur.</font>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="user-detail">
                            <img src={user1} alt="user"/>
                            <small>User#2</small>
                        </div>
                        <div>
                            <p>User#2 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur voluptatibus qui nostrum quasi et mollitia sapiente.</p>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="user-detail">
                            <img src={user2} alt="user"/>
                            <small>User#3</small>
                        </div>
                        <div>
                            <p>User#3 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur.</p>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="user-detail">
                            <img src={user1} alt="user"/>
                            <small>User#2</small>
                        </div>
                        <div>
                            <font>User#2 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur voluptatibus qui nostrum quasi et mollitia sapiente.</font>
                        </div>
                    </div>

                    <div className="comment">
                        <div className="user-detail">
                            <img src={user2} alt="user"/>
                            <small>User#3</small>
                        </div>
                        <div>
                            <p>User#3 Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur.</p>
                        </div>
                    </div>
                </Comments>

                <CommentInput>
                    <div>
                        <img src={plusIcon} alt="" />
                        <input type="text" placeholder="Type your comment" />
                    </div>
                    <img src={inputIcon} alt=""/>
                </CommentInput>
            </Body>
            
        </Container>
    )
}

export default CommentModal