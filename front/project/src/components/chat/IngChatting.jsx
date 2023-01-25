import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as regularCircle } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

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

const Wrap = styled.div`
    padding: 40px 7%;
    width: 100%;
`

const Span = styled.span`
    font-size: 10px;
    padding-right: 5px;
    color: ${props => props.theme.proceedingColor};
`
const ChatDiv = styled.div`
    width: 100%;
    height: 105px;
    margin-bottom: 13px;
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
    align-items: start;
`

const ChatStateSpan = styled.span`
    display: flex;
    align-items: center;
    /* font-family: 'Apple SD Gothic Neo B00', serif; */
    /* font-weight: 400; */
    font-size: 10px;
    padding-right: 5px;
    color: ${props => props.state === 0 ? props.theme.proceedingColor : props.state === 1 ? props.theme.willColor : props.theme.wantColor};
`

const ChatTitle = styled.div`
    height: 40%;
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;
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

const ChatBtn = styled.button`
    width: 130px;
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

const EmptyChatDiv = styled.div`
    width: fit-content;
    margin: auto;
    color: ${props=>props.theme.navBackColor};
`

const testIng = [
    {
        id: 1,
        state: 0,
        title: "왠지 모르게 울적한 새벽. 혼자 뒤척이지 말고 함께 이야기 나눠요.",
        nickname: "영서",
        recommand: 24,
        category: 'will',
    },
    {
        id: 2,
        state: 0,
        title: "답답한 마음을 모두 털어 놓아요. 하나 하나 진심으로 듣고 조언해드릴게요!",
        nickname: "상담가",
        recommand: 33,
        category: 'will',
    },
    {
        id: 3,
        state: 0,
        title: "저만 아는 고민이 있어요. 들어주실래요?",
        nickname: "몽글몽글",
        recommand: 2,
        category: 'want',
    },
    {
        id: 4,
        state: 0,
        title: "하고 싶은 말 다 할 수 있는 방. 자유롭게 들어오세요.",
        nickname: "석환",
        recommand: 24,
        category: 'will',
    },
]

const testBin = []

function IngChatting () {
    const nav = useNavigate()

    return (
        <Container>
            <Tab>
                <TabTitle>참여 중인 소통방</TabTitle>
            </Tab>
            <Wrap>
                { testIng.length === 0
                ?
                <EmptyChatDiv>아직 참여 중인 채팅방이 없어요.</EmptyChatDiv>
                :
                testIng.map(i => 
                    <ChatDiv key={i.id}>
                        <ChatStateDiv>
                            <ChatStateSpan state={i.state}><FontAwesomeIcon icon={regularCircle} size="2xs" style={{paddingRight: '6px'}}/>상담 진행 중 </ChatStateSpan> 
                        </ChatStateDiv> 
                        <ChatTitle>
                            {i.title}
                        </ChatTitle>
                        <ChatFooterDiv>
                            <ChatFooterInfoDiv>
                                <ChatFooterInfoSpan>{i.nickname}</ChatFooterInfoSpan>
                                <Span>|</Span>
                                <ChatFooterInfoSpan>{i.recommand}명 추천</ChatFooterInfoSpan>
                            </ChatFooterInfoDiv>
                            <ChatBtn onClick={()=>nav("/chat/room/1")} category={i.category}>소통방 가기</ChatBtn>
                        </ChatFooterDiv>
                    </ChatDiv>
                )
                }
            </Wrap>
        </Container>
    )

}
export default IngChatting;