import styled from "styled-components";
import Sidebar from "../../Shared/Sidebar";


const Container = styled.div`
    display: flex;
    background: #000000;
    .sidebar{
        flex:1;
    }
`

const Body = styled.div`
    flex: 15;
    height: 140vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Home = () => {
    return(
        <Container>
            <Body>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>

                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>

                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>

                <div>1</div>
                <div>1</div>
            </Body>

            <div className="sidebar">
                <Sidebar />
            </div>
            
        </Container>
    )
}

export default Home