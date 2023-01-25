import styled from "styled-components";
import PageHeader from '../components/PageHeader';
import MyChatting from '../components/chat/MyChatting';
import IngChatting from '../components/chat/IngChatting';
import AllChatting from '../components/chat/AllChatting';

const Container = styled.body`
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: ${props => props.theme.navmarginTop};
`

const Wrapper = styled.section`
    width : ${props => props.theme.width};
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
`

const Wrapper2 = styled.section`
    width : 100%;
    max-width: ${props => props.theme.maxWidth};
    background-color: ${props => props.theme.bgColor};
    display: flex;
    align-items: center;
    margin-top: 40px;
`

const pageheader = {
    title : "친구 상담",
    body1: "고민과 위로, 그리고 응원을 나눌 수 있는 소통방을 개설하거나 참여해보세요!",
    body2 : "사용자 간 1:1로 소통할 수 있어요",
    width : "128px"
}

function Chat () {
    return (
        <Container>
            <Wrapper>
                <PageHeader props={pageheader} />
            </Wrapper>
            <Wrapper2>
                <MyChatting />
            </Wrapper2>
            <Wrapper2>
                <IngChatting />
            </Wrapper2>
            <Wrapper2>
                <AllChatting />
            </Wrapper2>
        </Container>
    );
}
export default Chat;