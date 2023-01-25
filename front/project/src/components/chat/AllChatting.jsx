import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as regularCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as solidCircle } from '@fortawesome/free-solid-svg-icons';


const Container = styled.section`
    width: 100%;
    min-height: fit-content;
    font-family: 'Nanum Myeongjo', serif;
    display:flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 100px;
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
const TabCategories = styled.span`
    font-weight: 600;
    font-size: 13px;
    color: ${props => props.theme.tabInfoColor};
    display: flex;
    align-items: center;
`

const TabCategoryLabel = styled.label`
    padding-right: 5px;
    cursor: pointer;
`
const TabCategoryInput = styled.input`
    display: none;
    &:checked + ${TabCategoryLabel} {
        color: ${props => (props.value === 'want' ? props.theme.wantColor : props.theme.willColor)};
    }
`
const Span = styled.span`
    font-size: 10px;
    padding-right: 5px;
    color: ${props => props.theme.proceedingColor};
`

const Wrap = styled.div`
    padding: 40px 7%;
    width: 100%;
    min-height: 200px;

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
    border-color: ${props => props.state === 0 ? props.theme.btnBlockColor : props.state === 1 ? props.theme.willColor : props.theme.wantColor};
    color: ${props => props.state === 0 ? "white" : props.state === 1 ? props.theme.willColor : props.theme.wantColor};
    background-color: ${props => props.state === 0 ? props.theme.btnBlockColor : "white"};
`

const testAll = [
    {
        id: 1,
        state: 0,
        title: "사소한 것도 칭찬하는 방! 칭찬이 필요한 모든 분들 환영합니다.",
        nickname: "민주",
        recommand: 24,
        category: 'will',
    },
    {
        id: 2,
        state: 1,
        title: "답답한 마음을 모두 털어 놓아요. 하나 하나 진심으로 듣고 조언해드릴게요!",
        nickname: "건회",
        recommand: 33,
        category: 'will',
    },
    {
        id: 3,
        state: 2,
        title: "저만 아는 고민이 있어요. 들어주실래요?",
        nickname: "상돈",
        recommand: 2,
        category: 'want',
    },
    {
        id: 4,
        state: 1,
        title: "하고 싶은 말 다 할 수 있는 방. 자유롭게 들어오세요.",
        nickname: "석주",
        recommand: 24,
        category: 'will',
    },
    {
        id: 5,
        state: 2,
        title: "인간 관계는 정말 어려운 것 같아요... 자꾸만 포기하고 싶어지네요",
        nickname: "보경",
        recommand: 82,
        category: 'want',
    },
    {
        id: 6,
        state: 2,
        title: "악몽이 매일 반복돼요. 언제쯤 벗어날 수 있을까요? 비슷한 경험 해보신 분 계신가요? 같이 이야기 나눠요",
        nickname: "개설자",
        recommand: 87,
        category: 'want',
    },
    {
        id: 7,
        state: 1,
        title: "위로가 필요한 당신을 위한 공간",
        nickname: "내닉네임",
        recommand: 87,
        category: 'will',
    },
    {
        id: 8,
        state: 0,
        title: "그냥 웃자!",
        nickname: "내닉네임",
        recommand: 87,
        category: 'will',
    },
    {
        id: 9,
        state: 0,
        title: "어우 졸려라",
        nickname: "내닉네임",
        recommand: 87,
        category: 'will',
    },
]

// category: all - 모두
// category: will - 상담해드려요
// category: want - 상담해주세요
// state: 0 - 채팅 중
// state: 1,2 - 대기 중

function AllChatting () {    
    const [ChatList, setChatList] = useState(testAll);
    const [checkCategory, setCheckCategory] = useState('all');

    const handleChange2 = (e) => {
        let newArr = [];
        const value = e.target.value;
        setCheckCategory(value);
        if(value === 'all') {
            newArr = testAll
        }else{
            newArr = testAll.filter(i => i.category === value);
        } 
        setChatList( newArr );
    }
    console.log(ChatList);

    return(
        <Container>
            <Tab>
                <TabTitle>소통방 목록</TabTitle>
                <TabCategories>
                    <TabCategoryInput 
                        type="radio" 
                        name="categories" 
                        id="all" 
                        value="all"
                        onChange={handleChange2} 
                        checked={checkCategory === "all"}/> 
                    <TabCategoryLabel htmlFor="all">모두</TabCategoryLabel>
                    <Span>|</Span>
                    <TabCategoryInput 
                        type="radio" 
                        name="categories" 
                        id="will2" 
                        value="will"  
                        onChange={handleChange2}
                        checked={checkCategory === "will"}/> 
                    <TabCategoryLabel htmlFor="will2">상담해드려요</TabCategoryLabel>
                    <Span>|</Span>
                    <TabCategoryInput 
                        type="radio" 
                        name="categories" 
                        id="want2" 
                        value="want"  
                        onChange={handleChange2}
                        checked={checkCategory === "want"}/> 
                    <TabCategoryLabel htmlFor="want2">상담해주세요</TabCategoryLabel>
                </TabCategories>
            </Tab>
            <Wrap>
                {ChatList.map(i => 
                    <ChatDiv key={i.id}>
                        <ChatStateDiv>
                            {i.state === 0 
                            ? <ChatStateSpan state={i.state}><FontAwesomeIcon icon={regularCircle} size="2xs" style={{paddingRight: '6px'}}/>상담 진행 중 </ChatStateSpan> 
                            : i.category === 'will' 
                            ? <ChatStateSpan state={i.state}><FontAwesomeIcon icon={solidCircle} size="2xs" style={{paddingRight: '6px'}}/>상담해드려요 </ChatStateSpan>
                            : <ChatStateSpan state={i.state}><FontAwesomeIcon icon={solidCircle} size="2xs" style={{paddingRight: '6px'}}/>상담해주세요 </ChatStateSpan>
                            }
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
                            <ChatBtn state={i.state}>{i.category === 'will' ? '상담받기' : '상담하기'}</ChatBtn>
                        </ChatFooterDiv>
                    </ChatDiv>
                )
                }
            </Wrap>
        </Container>
        
    )
}
export default AllChatting;