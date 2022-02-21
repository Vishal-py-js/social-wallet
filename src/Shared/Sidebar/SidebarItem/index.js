import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    line-height: 0;
    align-items: center;
    p{
        font-size: 12px;
        color: #fff;
    }
`

const SideBarItem = ({imgSrc, title, onClick}) => {

    useEffect(() => {
        const x = document.getElementsByClassName("sidebar-item")
        // console.log(x);
        // console.log(x.length);
        for(let i=0; i<x.length;i++) {
            // console.log(x[i]);
            x[i].addEventListener("click", function(){
                const selectedOne = document.querySelector(".selected-item")
                if(selectedOne){
                    selectedOne.classList.remove("selected-item")
                }
                this.classList.add("selected-item")
            }, false)
        }
    }, [])

    return(
        <Container className="sidebar-item">
            <img  onClick={onClick} src={imgSrc} alt="user"/>
            <p>{title}</p>
        </Container>
    )
}

export default SideBarItem