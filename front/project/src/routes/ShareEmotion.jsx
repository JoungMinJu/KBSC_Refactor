import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import RealTime from '../components/shareemotion/RealTime';

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
    title : "감정 나누기",
    body1: "비우기 전에 나누고 싶은 감정이 있나요? 공개 설정으로 업로드 된 감정들을 확인할 수 있어요.",
    body2 : "공감 버튼을 눌러 지지를 보내주세요!",
    width : "150px"
}


function ShareEmotion () {
    return(
        <Container>
            <Wrapper>
                <PageHeader props={pageheader} />
                <RealTime />
            </Wrapper>
        </Container>
    )
}
export default ShareEmotion;