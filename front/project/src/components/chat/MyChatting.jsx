import { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as solidCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

const Container = styled.section`
    width: 100%;
    min-height: fit-content;
    font-family: 'Nanum Myeongjo', serif;
    display:flex;
    align-items: center;
    flex-direction: column;
`
const Tab = styled.div`
    width: 100%;
    background-color: white;
    margin: 0;
    padding: 0 7%;
    display: flex;
    justify-content: space-between;
`
const TabTitle = styled.span`
    width: 180px;
    height: 35px;
    background-color: ${props => props.theme.tabTitleColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;
    color: white;
    font-weight: 600;
`
const TabInfo = styled.span`
    font-weight: 600;
    font-size: 13px;
    color: ${props => props.theme.tabInfoColor};
    display: flex;
    align-items: center;
`

const Wrap = styled.div`
    padding: 40px 7%;
    width: 100%;
`
const ChatDiv = styled.div`
    width: 100%;
    height: 105px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5% 2%;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`
const ChatForm = styled.form`
    width: 100%;
    height: 105px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5% 2%;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`

const ChatStateDiv = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    ${props => (props.exist === 'false' ? css`align-items: start;` : css`justify-content: space-between;`)};
`

const Span = styled.span`
    font-size: 10px;
    padding-right: 5px;
    color: ${props => props.theme.proceedingColor};
`

const DeleteBtn = styled.button`
    font-size: 10px;
    padding-right: 5px;
    color: ${props => props.theme.btnBlockColor};
    background-color: white;
    border: none;
    cursor: pointer;
`

const ChatStateSpan = styled.span`
    font-size: 10px;
    padding-right: 5px;
    color: ${props => props.category === 'will' ? props.theme.willColor : props.theme.wantColor};
`
const ChatStateLabel = styled.label`
    font-size: 10px;
    padding-right: 5px;
    cursor: pointer;
    color: ${props => props.theme.proceedingColor};
`
const ChatStateInput = styled.input`
    display: none;
    &:checked + ${ChatStateLabel} {
        color: ${props => props.value === 'will' ? props.theme.willColor : props.theme.wantColor};
    }
`

const ChatTitle = styled.div`
    height: 40%;
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;
`
const ChatTitleInput = styled.input`
    width: 50%;
    height: 100%;
    border: none;
    font-weight: 600;
    font-size: 15px;
    ::placeholder{
        font-family: 'Nanum Myeongjo', serif;
        color: black;
    }
    :focus {
        /* outline-color: ${props => props.category === 'will' ? props.theme.willColor : props.theme.wantColor}; */
        outline: none;
        opacity: 0.2;
    }
`

const ChatFooterDiv = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: end;
    justify-content: space-between;
    font-size: 12px;
`
const ChatFooterInfoDiv = styled.div`
    color: rgba(162, 162, 166, 1);
`

const ChatFooterInfoSpan = styled.span`
    padding-right: 5px;
`

const SubmitBtn = styled.button`
    width: 125px;
    height: 25px;
    border-style: solid;
    border-width: thin;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    border-color: ${props => props.category === 'will' ? props.theme.willColor : props.theme.wantColor};
    color: ${props => props.category === 'will' ? props.theme.willColor : props.theme.wantColor};
    background-color: white;
`

const ChatBtn = styled.button`
    width: 130px;
    height: 25px;
    border-style: solid;
    border-width: thin;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    border-color: ${props => props.state === 0 ? props.theme.btnBlockColor : props.state === 1 ? props.theme.willColor : props.theme.wantColor};
    color: ${props => props.state === 0 ? "white" : props.state === 1 ? props.theme.willColor : props.theme.wantColor};
    background-color: ${props => props.state === 0 ? props.theme.btnBlockColor : "white"};
`

// category: will - 상담 해드려요 
// category: want - 상담 해주세요 
// exist: false - 채팅방 개설 전
// exist: true - 채팅방 개설 후
// state: 0 - 채팅자 없음
// state: 1,2 - 채팅자 있음

function MyChatting () {
    const [checkCategory, setCheckCategory] = useState("will");
    const [state, setState] = useState(1);
    const [formData, setFormData] = useState(
        {
            exist: false,
            category: checkCategory,
            title: "",
            nickname: "내닉네임",
            recommand: 0,
            state: state,
            partner: 'someone',
        },
    );

    const handleChange = (e) => {
        const {name, value} = e.target;
        // console.log(name, value);
        name === 'category' && setCheckCategory(value);
        setFormData(prev => {
            return {...prev,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(formData.title === "") {
            alert('제목을 입력해주세요.');
        }else{
            setFormData(prev => ({...prev, exist : true}));
        }
    }

    const resetFormData = () => {
        setFormData(prev => {
            return {...prev, 
                exist: false,
                category: setCheckCategory('will'),
                title: "",
                nickname: "내닉네임",
                recommand: 0,
                state: setState(0),
            }
        })
    }

    const handleDelete = () =>{
        // e.preventDefault();
        window.confirm('삭제하시겠습니까?') && resetFormData()
    }

    return(
        <Container>
            <Tab>
                <TabTitle>내 소통방</TabTitle>
                {formData.exist === false
                ? <TabInfo>* 아직 내 상담방이 없어요. 하단의 폼을 채워 상담방을 개설해보세요!</TabInfo>
                : <TabInfo></TabInfo>
                }
            </Tab>
            <Wrap>
                {formData.exist === false
                ? <ChatForm onSubmit={handleSubmit}>
                    <ChatStateDiv exist='false'>
                        <ChatStateInput 
                        type="radio" 
                        name="category" 
                        id="will" 
                        value="will"
                        onChange={handleChange} 
                        checked={checkCategory === "will"}/> 
                        <ChatStateLabel htmlFor="will">상담해드려요</ChatStateLabel>
                        <Span>|</Span>
                        <ChatStateInput 
                        type="radio" 
                        name="category" 
                        id="want" 
                        value="want"  
                        onChange={handleChange}
                        checked={checkCategory === "want"}/> 
                        <ChatStateLabel htmlFor="want">상담해주세요</ChatStateLabel>
                    </ChatStateDiv>
                    <ChatTitle>
                        <ChatTitleInput onChange={handleChange} placeholder="소통방의 제목을 입력해주세요." value={formData.title} name="title" category={checkCategory}></ChatTitleInput>
                    </ChatTitle>
                    <ChatFooterDiv>
                        <ChatFooterInfoDiv style={{opacity: '0.5'}}>
                            <ChatFooterInfoSpan>한울</ChatFooterInfoSpan>
                            <Span>|</Span>
                            <ChatFooterInfoSpan>0명 추천</ChatFooterInfoSpan>
                        </ChatFooterInfoDiv>
                        <SubmitBtn category={checkCategory}>소통방 개설하기</SubmitBtn>
                    </ChatFooterDiv>
                </ChatForm>
                : 
                <ChatDiv>
                    <ChatStateDiv exist={formData.exist}>
                        <ChatStateSpan category={formData.category}><FontAwesomeIcon icon={solidCircle} size="2xs" style={{paddingRight: '6px'}}/>
                        {formData.category === 'will' && formData.state === 0 ? '상담해드려요' : 
                        formData.category === 'want' && formData.state === 0 ? '상담해주세요' : 
                        `${formData.partner} 님과 상담 중`}
                        </ChatStateSpan>
                        <DeleteBtn onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /></DeleteBtn>
                    </ChatStateDiv>
                    <ChatTitle>
                        {formData.title}
                    </ChatTitle>
                    <ChatFooterDiv>
                        <ChatFooterInfoDiv>
                            <ChatFooterInfoSpan>내닉네임</ChatFooterInfoSpan>
                            <Span>|</Span>
                            <ChatFooterInfoSpan>{formData.recommand}명 추천</ChatFooterInfoSpan>
                        </ChatFooterInfoDiv>
                        <ChatBtn state={formData.state}>
                            {formData.state === 0 ? '아직 참여자가 없어요' : '소통방 가기'}
                        </ChatBtn>
                    </ChatFooterDiv>
                </ChatDiv>
                }
            </Wrap>
        </Container>
        
    )
}
export default MyChatting;