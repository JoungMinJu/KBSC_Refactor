import styled from "styled-components";
import PageHeader from '../components/PageHeader';
import MissionBox from '../components/mission/MissionBox';
import MissionChart from "../components/mission/MissionChart";

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

const pageheader1 = {
    title : "일일 미션",
    body1: "고민 카테고리를 복수 선택하고 매일 매일 주어지는 미션을 수행해보세요!",
    body2 : "차근 차근 따라하다보면 활기찬 하루를 보낼 수 있을거에요.",
    width : "128px"
}

const pageheader2 = {
    title : "달성 기록",
    body1: "오늘의 달성율은 어떤가요? 매일 매일 100%를 목표로 힘내보세요!",
    body2 : "",
    width : "126px"
}

function Mission () {
    return (
        <Container>
            <Wrapper>
                <PageHeader props={pageheader1} />
                <MissionBox />
                <PageHeader props={pageheader2} />
                <MissionChart />
            </Wrapper>
        </Container>
    );
}
export default Mission;