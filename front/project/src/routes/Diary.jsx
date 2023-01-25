import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import DiaryMonthly from '../components/diary/monthly';
import DiaryDaily from '../components/diary/daily';

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
    /* min-height: ${props => props.theme.minHeight}; */
    margin: auto;
`
const Wrapper2 = styled.section`
    width : 100%;
    max-width: ${props => props.theme.maxWidth};
    /* min-height: ${props => props.theme.minHeight}; */
    display: flex;
    align-items: center;
`

const pageheader__monthly = {
    title : "질문 일기",
    body1: "오늘의 나, 한 달 전의 나, 일 년 전의 나는 어땠을까요?",
    body2 : "책장을 채우고 넘겨가며 나를 되돌아보고 앞으로의 나를 상상해보세요.",
    width : "125px"
}

const pageheader__daily = {
    title : "오늘의 질문",
    // body1: "오늘 하루 중 가장 행복했던 순간은 언제인가요?",
    width : "155px"
}

function Diary() {    

    return (
        <Container>
            <Wrapper>
                <PageHeader props={pageheader__monthly} />
            </Wrapper>
            <Wrapper2>
                <DiaryMonthly />
            </Wrapper2>
            <Wrapper>
                <PageHeader props={pageheader__daily} />
                <DiaryDaily />
            </Wrapper>
        </Container>
    )
}
export default Diary;