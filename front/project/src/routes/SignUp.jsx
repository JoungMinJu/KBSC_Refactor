import styled from "styled-components";
import SignUpBox from "../components/signup/SignUpBox";
import Img from "../components/img/signupimg.png";

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
    height: 500px;
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

function SignUp () {
    return (
        <Container>
            <Wrapper>
                <ImgSection>
                    <LogInImg src={Img} />
                </ImgSection>
                <SignUpBox />
            </Wrapper>
        </Container>
    );
}
export default SignUp;