import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faXmark} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useForm } from "react-hook-form";

const HeadContainer = styled.body`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: ${props => props.theme.navmarginTop};
`

const HeadWrapper = styled.section`
    width : ${props => props.theme.width};
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`

const GoToList = styled.span`
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    span{
        font-size: 16px;
        margin-bottom: 4px;
        margin-right: 5px;
    }
`

const Title = styled.h1`
    font-family: 'Nanum Myeongjo', serif;
    font-size: 23px;
    margin-top: 15px;
    font-weight: 600;
`

const HeadInfo = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`

const InfoTap = styled.div`
    display: flex;
    align-items: center;
`

const OutBtn = styled.div`
    color: white;
    background-color: ${props => props.theme.whoColor};
    padding: 8px 25px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
`
const WithWho = styled.div`
    font-family: 'Nanum Myeongjo', serif;
    margin-right: 30px;
    font-size: 15px;
    font-weight: 500;
    span:first-child{
        color : ${props => props.theme.whoColor};
        margin-right: 5px;
    }
`
const Declare = styled.div`
    font-size: 11px;
    color : #A2A2A6;
    cursor: pointer;
`
const Icon = styled(FontAwesomeIcon)`
    margin-right: 3px;
`


const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
    background-color: rgba(0, 0, 0, 0.7);
`;

const BigBox = styled.div`
    width: 40%;
    height: 40%;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const XMark = styled(FontAwesomeIcon)`
    font-size: 20px;
    position: absolute;
    top:20px;
    right: 20px;
    cursor: pointer;
`

const BoxTitle = styled.h1`
    font-family: 'Nanum Myeongjo', serif;
    font-size: 20px;
    font-weight: 600;
    span:first-child{
        color : ${props => props.theme.whoColor};
        margin-right: 5px;
    }
    margin-bottom: 15px;
`
const BoxSubTitle = styled.h6`
    font-family: 'Nanum Myeongjo', serif;
    color : #262626;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 15px;
`
const BoxBtn1 = styled.div`
    color: white;
    background-color: ${props => props.theme.whoColor};
    padding: 8px 25px;
    border-radius: 5px;
    font-size: 15px;
    text-align: center;
    font-weight: 600;
    width: 50%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
`
const BoxBtn2 = styled(BoxBtn1)`

`
const BoxInput = styled.textarea`
    width: 70%;
    border: 1px solid #A2A2A6;
    border-radius: 3px;
    height: 30%;
    padding: 10px;
    margin-bottom: 15px;
    resize:none;
    ::placeholder {
        color: #A2A2A6;
    }
    :focus {
        outline-color: ${props=>props.theme.SubmitBtnBackColor};
    }
`

const LikeSection = styled.section`
    margin-top: 20px;
    margin-bottom: 40px;
    width: 50%;
    display: flex;
    justify-content: space-between;
`

const LikeBtn = styled.div`
    cursor: pointer;
    background-color: ${props => props.isActive ? props.theme.btnColor : "white"};
    color:${props => props.isActive ? "white" : props.theme.btnColor};
    border: 1px solid ${props => props.theme.btnColor};
    border-radius: 20px;
    padding : 10px 40px;
    font-weight: 500;
    font-size: 14px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`


const Chat = styled.section`
    width: 100vw;
    margin-top: 30px;
    background-color: ${props => props.theme.bgColor};
    height: 65vh;
    display: flex;
    justify-content: center;
`

const ChatWrapper = styled.section`
    width : ${props => props.theme.width};
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;
    margin-bottom: 30px;
`

const ChatItem = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    margin-bottom: 30px;
`

const ChatTime = styled.span`
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    color : #A2A2A6;
`

const ChatBodyM = styled.div`
    font-family: 'Nanum Myeongjo', serif;
    line-height: 1.4;
    border-radius: 10px;
    padding: 15px;
    max-width: 52%;
    border-bottom-right-radius: 0px;
    background-color: ${props => props.theme.chatBoxBackColor};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin-left: 15px;
`

const ChatBodyY = styled.div`
    font-family: 'Nanum Myeongjo', serif;
    line-height: 1.4;
    border-radius: 10px;
    padding: 15px;
    max-width: 52%;
    border-bottom-left-radius: 0px;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin-right: 15px;
    
`
const ChatInfo = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    color : #A2A2A6;
    margin-bottom: 70px;
    span:first-child{
        margin-bottom: 10px;
    }
`

const ChatInputSection = styled.section`
    width: 100vw;
    background-color: white;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ChatInputForm = styled.form`
    width : ${props => props.theme.width};
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    justify-content: space-between;
`

const ChatInputInput = styled.input`
    width: 82%;
    border: 1px solid #A2A2A6;
    border-radius: 3px;
    padding: 7px 10px;
    ::placeholder {
        color: #A2A2A6;
    }
    :focus {
        outline-color: ${props=>props.theme.SubmitBtnBackColor};
    }
`

const ChatInputBtn = styled.button`
    width: 13%;
    color:white;
    border: none;
    border-radius: 3px;
    background-color: ${props=>props.theme.SubmitBtnBackColor};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
`


const test = [
    {
        id : 6,
        who: false,
        body : "아니에요 감사하긴요ㅠㅠ 제가 더 감사하죠! 오늘은 꼭 이야기 할 사람이 필요했거든요!",
        time : "오전 5 : 05" 
    },
    {
        id : 5,
        who: false,
        body : "네... 저도 오늘만큼은 용기내서 털어놓아보려구요...",
        time : "오전 5 : 05" 
    },
    {
        id : 4,
        who: true,
        body : "그렇게 말씀해주시니 정말 감사하면서도 걱정이 되네요.. 어떤 일이 있으셨는지 여쭤봐도 될까요? 꺼내기 힘든 일이라면 말해주지 않아도 좋아요. 다만 누군가에게 털어 놓는다면 도움이 되지 않을까 싶어서요!",
        time : "오전 5 : 05" 
    },
    {
        id : 3,
        who: false,
        body : "영서 님의 소통방 제목을 본 순간 한치의 망설임도 없이 바로 들어올 수 밖에 없었달까요?",
        time : "오전 5 : 03" 
    },
    {
        id : 2,
        who: true,
        body : "안녕하세요! 영서 입니다! 들어와주셔서 감사해요.",
        time : "오전 5 : 02" 
    },
    {
        id : 1,
        who: false,
        body : "안녕하세요! 처음 뵙겠습니다. 저는 한울이에요",
        time : "오전 4 : 58" 
    },
]

function ChatRoom() {
    const navigate = useNavigate();
    // 신고하기
    const [declareClick, setDeclareClick] = useState(false);
    const [declareValue, setDeclareValue] = useState("");
    const declareSubmit = async() => {
        // declareValue 보내기
    }

    // 채팅 끝내기
    const [outClick, setOutClick] = useState(false);
    const [like, setLike] = useState("");
    const outSubmit = async() => {
        if (like === ""){
            alert("솔직한 평가는 서비스 개선에 큰 도움이 됩니다.")
        }else{
            //like 내용에 따라서 전송하기
        }
    }

    // 채팅
    const { register, handleSubmit, setValue } = useForm()
    const onValid = (data) => {
        setValue("chat", "")
    }

    return (
       <>
        <HeadContainer>
            <HeadWrapper>
                <GoToList onClick={()=>navigate("/chat")}><span>&lt; </span>목록으로</GoToList>
                <Title>왠지 모르게 울적한 새벽. 혼자 뒤척이지 말고 함께 이야기 나눠요.</Title>
                <HeadInfo>
                    <InfoTap>
                        <WithWho>
                            <span>이영서</span>
                            <span>님과 소통 중</span>
                        </WithWho>
                        <Declare onClick={() => setDeclareClick(true)}>
                            <Icon icon={faTriangleExclamation} />
                            <span>신고하기</span>
                        </Declare>
                    </InfoTap>
                    <OutBtn onClick = {() => setOutClick(true)}>
                        소통방 나가기
                    </OutBtn>
                </HeadInfo>
            </HeadWrapper>
        </HeadContainer>

        {/* 신고하기 모달창 */}
        <AnimatePresence>
            {declareClick ? 
                <Overlay 
                    initial={{ opacity : 0}}
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                >
                    <BigBox>
                        <XMark onClick = {() => setDeclareClick(false)} icon={faXmark} />
                        <BoxTitle>
                            <span>개발자닉넴</span>
                            <span>님의 어떤 점이 불편하셨나요?</span>
                        </BoxTitle>
                        <BoxSubTitle>
                            신고 3회 누적 시 사용자의 계정이 정지됩니다.
                        </BoxSubTitle>
                        <BoxInput onChange={(event) => {setDeclareValue(event.target.value)}} type="text" value={declareValue} placeholder="내용을 입력해주세요." />
                        <BoxBtn1 onClick={declareSubmit}>
                            저장하고 소통방 나가기
                        </BoxBtn1>
                        
                    </BigBox>
                </Overlay> : null}
        </AnimatePresence>

        {/* 채팅방 나가기 모달창 */}
        <AnimatePresence>
            {outClick ? 
                <Overlay 
                    initial={{ opacity : 0}}
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                >
                    <BigBox>
                    <XMark onClick = {() => setOutClick(false)} icon={faXmark} />
                        <BoxTitle>
                            <span>개발자닉넴</span>
                            <span>님과의 소통, 어떠셨나요?</span>
                        </BoxTitle>
                        <BoxSubTitle>
                            솔직한 평가는 서비스 개선에 큰 도움이 됩니다.
                        </BoxSubTitle>
                        <LikeSection>
                            <LikeBtn isActive={like === "추천해요"} onClick={() => setLike("추천해요")}>
                                추천해요
                            </LikeBtn>
                            <LikeBtn isActive={like === "아쉬워요"} onClick={() => setLike("아쉬워요")}>
                                아쉬워요
                            </LikeBtn>
                        </LikeSection>
                        <BoxBtn2 onClick = {outSubmit}>
                            저장하고 소통방 나가기
                        </BoxBtn2>
                    </BigBox>
                </Overlay> : null}
        </AnimatePresence>

        {/* 채팅내용 */}
        <Chat>
            <ChatWrapper>
                {test.map(i => <>
                    {i.who ? 
                    /* 내 채팅 */
                    <ChatItem key={i.id} style={{justifyContent:"flex-end"}}>
                        <ChatTime>{i.time}</ChatTime>
                        <ChatBodyM>
                            {i.body}
                        </ChatBodyM>
                    </ChatItem>
                    :
                    /* 상대방 채팅 */
                    <ChatItem key={i.id}  style={{justifyContent: "flex-start"}}>
                        <ChatBodyY>
                            {i.body}
                        </ChatBodyY>
                        <ChatTime>{i.time}</ChatTime>
                    </ChatItem>
                    }
                </>)}
                <ChatInfo>
                    <span>2022년 8월 19일</span>
                    <span>한울 님이 입장하였습니다.</span>
                </ChatInfo>
            </ChatWrapper>
        </Chat>

        {/* 채팅 입력창 */}
        <ChatInputSection>
            <ChatInputForm onSubmit={handleSubmit(onValid)}>
                <ChatInputInput {...register("chat", {required : true})} placeholder="전송할 메세지를 입력해주세요"/>
                <ChatInputBtn>
                    전송
                </ChatInputBtn>
            </ChatInputForm>
        </ChatInputSection>
       </>
    )
}
export default ChatRoom;