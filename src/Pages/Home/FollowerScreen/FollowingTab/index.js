import styled from "styled-components";
import { followingDetails } from "./following";
const image1 = "assets/icons/follower1.svg"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

const FollowerCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10rem;
    justify-content: space-between;
    .follower-details{
        display: flex;
        gap: 1.5rem;
        p{
            font-size: 19px;
            font-weight: 500;
            color: rgba(200, 253, 203, 1);

        }
    }
    .remove{
        button{
            padding: 7px 15px;
            color: #6CFF77;
            font-size: 16px;
            font-weight: 600;
            background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
            border: 1px solid #6CFF77;
        }
    }
`
const SingleFollower = ({imgSrc, name}) => {
    return(
        <FollowerCont>
            <div className="follower-details">
                <img src={imgSrc} alt="follower"/>
                <p>{name}</p>
            </div>
            <div className="remove">
                <button>UNFOLLOW</button>
            </div>
        </FollowerCont>
    )
}

const FollowingTab = () => {

    return(
        <Container>
            {
                followingDetails.map(following=>(
                    <SingleFollower imgSrc={following.image} name={following.name}/>
                ))
            }
        </Container>
    )
}

export default FollowingTab