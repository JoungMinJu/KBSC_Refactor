import styled from "styled-components";
import LogBox from '../components/login/LogBox';
import Img from "../components/img/loginimg.png";

const Container = styled.body`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: ${props => props.theme.navmarginTop};
`

const Wrapper = styled.section`
    width : ${props => props.theme.width};
    max-width: ${props => props.theme.maxWidth};
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const LogInImg = styled.img`
    height: 400px;
    width: 500px;
`
const ImgSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    width: 100%;
    height: 100%;
`

function LogoIn () {
    return (
        <Container>
            <Wrapper>
                <ImgSection>
                    <LogInImg src={Img} />
                </ImgSection>
                <LogBox />
            </Wrapper>
        </Container>
    );
}
export default LogoIn;