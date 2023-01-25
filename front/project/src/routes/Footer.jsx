import styled from "styled-components";
import logoImg from "../components/img/logo.png";

const Container = styled.body`
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.footerBackColor};
    height: 220px;
`

const Wrapper = styled.section`
    width : ${props => props.theme.width};
    max-width: ${props => props.theme.maxWidth};
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 55px;
    color : ${props => props.theme.footerColor};
`

const Item = styled.div`
    &:first-child{
        width: 300px;
        margin-left: 20px;
    }
    &:nth-child(2){
    }
    &:last-child{
        display: flex;
        flex-direction: column;
        width: 300px;
    }
`

const Logo = styled.img`
    width: 80px;
    cursor: pointer;
    height: 80px;
`

const Items = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const Part = styled.span`
    width:50%;
`
const Name = styled.span`
    width: 50%;
    text-align: left;
`

function Footer() {
    const gotoTop = () => {
        window.scrollTo({top : 0 ,behavior : 'smooth'});
    }
    return(
        <Container>
            <Wrapper>
            <Item>
                <Logo onClick={gotoTop} src={logoImg} />
            </Item>
            <Item>
                ⓒ 2022 한울 All Rights Reserved
            </Item>
            <Item>
                <Items>
                    <Part>
                        기획자, 디자이너
                    </Part>
                    <Name>
                        이영서
                    </Name>
                </Items>
                <Items>
                    <Part>
                        프론트엔드 개발자
                    </Part>
                    <Name>
                        이상돈  이보경
                    </Name>
                </Items>
                <Items>
                    <Part>
                        백엔드 개발자
                    </Part>
                    <Name>
                        안석환  정민주  홍석주
                    </Name>
                </Items>
            </Item>
        </Wrapper>
        </Container>
    )
}

export default Footer;