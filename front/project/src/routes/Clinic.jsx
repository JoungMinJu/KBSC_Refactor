import styled from "styled-components";
import PageHeader from '../components/PageHeader';
import ClinicMap from "../components/clinic/ClinicMap";

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
    title : "상담소 정보",
    body1: "추가적인 상담이 필요한가요? 가까운 상담소를 추천해드릴게요!",
    body2 : "한울은 든든한 울타리가 되어 항상 가까이에서 응원할게요.",
    width : "155px"
}

function Clinic () {
    return (
        <Container>
            <Wrapper>
                <PageHeader props={pageheader} />
                <ClinicMap />
            </Wrapper>
        </Container>
    );
}
export default Clinic;