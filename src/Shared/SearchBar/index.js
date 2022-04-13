import React , {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { hideSuggestions, showSuggestions } from '../../Redux/SearchSuggestions/Actions';
//import Input from '../../Input'
const magnifier = '/assets/icons/magnifier.svg'
const close = '/assets/icons/close-white.svg'
const history = '/assets/icons/history.svg'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index:3;
    backdrop-filter: blur(5px);
`

const SearchbarContainer = styled.div`

//start of sidebar search design
    position: fixed;
    right: 6.7vw;
    right: ${
        props=>props.chatDisplay?"40.3vw":"6.7vw"
    };
    width: 30vw;
    top: 23vh;
    transition: 0.7s;


    .close-button{
        position: fixed;
        right: ${
            props=>props.chatDisplay?"41vw":"7vw"
        };
        transition: 0.7s;
    }
//end of sidebar search design


    z-index: 3;
    //width:538.84px; 
    //width: 40vw;
    min-width: 200px;
    form{
        div[role="searchbar"]{
            width: 80%
        } 
        //background: rgba(250, 250, 250, 0.2);
        background: black;
        //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.00) 5.21%, rgba(108, 255, 119, 0) 97.96%);
        //border: 1px solid rgba(222, 222, 222, 0.32);
        border: 1px solid rgba(200, 253, 203, 1);
        box-sizing: border-box;
        //border-radius: 8px; 
        position: relative;
        z-index: 5;
        display: flex;
        width: 100%;
        justify-content:space-between;
        align-items:center;
        padding:8px 30px; 
        input{
            background : none;
            color: rgba(200, 253, 203, 0.5);
            border:none;
            font-size: 20px;
            width: 25vw;
            :focus{
                outline: none;
                //border-radius: 3px;
            }
        }  
        button{
            background : none;
            border:none;
        }
        .me-2{
            border-right: 2px solid grey;
        }
    }
    .form-bg{
        //background: rgba(250, 250, 250, 0.2);
        width: 100%;
        height: 135%;
        transform: scaleX(1.05) ;  
        position: absolute;
        border-radius: 17px 17px 0 0;
        top:-10px;
        z-index: 0 ;
    }
    .suggestions{
        position: absolute;
        left: 0.8rem;
        width: 95%;
        height: 15rem;
        cursor:pointer;
        transform: scalex(1.05); 
        border-radius: 0 0 17px 17px;
        background: #042F1A;
        //background: black;
        //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.7) 5.21%, rgba(108, 255, 119, 0) 97.96%);
        z-index: -1;
        div{
            padding: 25px;
            border-bottom: 1px solid rgba(224, 224, 224, 0.12); 
            img{
                margin-right: 6px
            }
        }
    }
    .search-icon{
        height: 23px;
    }
    
`
const Searchbar = () => {
    //const [isDropdownShown, setDropdownShow] = useState(false)
    const showDropdown = () => {
        dispatch(showSuggestions())
    }
    const hideDropdown = () => {
        dispatch(hideSuggestions())
    }
    const [query, setQuery] = useState('')
    const handleChangeQuery = (e) => {
        setQuery(e.target.value)
    }

    const isDropdownShown = useSelector(state=>state.suggestions)
    const chatDisplay = useSelector(state=>state.chat)
    const dispatch = useDispatch()

    return(
        <Container>
        <SearchbarContainer chatDisplay={chatDisplay}>
            <form>
                <div style={{display: "flex",alignItems: "center",gap:"1rem"}}>
                    <button  type="submit" className="">
                        <img className='search-icon' src={magnifier} alt="magnifier" />
                    </button>
                    <input 
                        type="text" 
                        value={query} 
                        onChange={handleChangeQuery} 
                        onFocus = {showDropdown} 
                        placeholder={"Search your interest"} 
                    />
                </div>
                <div className="close-button">
                    <button type="button" onClick = {hideDropdown}>
                        <img src={close} onClick = {hideDropdown} alt="close" />
                    </button>
                    
                </div>
            </form>
            {
                isDropdownShown && <>
                    {/* <div className="form-bg"></div> */}
                    <div className="suggestions">
                        {/* <div onClick={() => setQuery('Karen Kultra')}>
                            <img src={history} alt="history" />
                            Karen Kultra
                        </div>
                        <div onClick={() => setQuery('Kultra Karen')}>
                            <img src={history} alt="history" />
                            Kultra Karen 
                        </div>
                        <div onClick={() => setQuery('')}>
                            <img src={history} alt="history" />
                            Karen Kultra
                        </div>
                        <div onClick={() => setQuery('')}>
                            <img src={history} alt="history" />
                            Karen Kultra
                        </div> */}
                    </div> 
                </>
            }
            </SearchbarContainer>
            </Container>
    )
}

export default Searchbar