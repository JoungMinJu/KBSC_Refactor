import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import EmptyFence from '../components/emptyemotion/EmptyFence';

const Container = styled.body`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: ${props => props.theme.navmarginTop};
`

const Wrapper = styled.section`
    width : ${props => props.theme.width};
    max-width: ${props => props.theme.maxWidth};
    min-height: ${props => props.theme.minHeight};
`

const pageheader = {
    title : "감정 비우기",
    body1: "오늘의 감정은 어떤가요? 속상했던 일이나 말하기 힘든 고민이 있나요?",
    body2 : "자유롭게 글을 작성하고 마우스로 울타리 밖으로 드래그하여 감정을 비워보세요! 마음이 한결 후련해질거에요!",
    width : "150px"
}


function EmptyEmotion() {
    return (
        <Container>
            <Wrapper>
                <PageHeader props={pageheader} />
                <EmptyFence />
            </Wrapper>
        </Container>
    );
}

export default EmptyEmotion;