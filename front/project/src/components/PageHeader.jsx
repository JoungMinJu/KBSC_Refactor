import styled from "styled-components";

const Header = styled.header`
    display: flex;
    flex-direction: column;
    font-family: 'Nanum Myeongjo', serif;
`

const Head = styled.div`
    margin-top: 6%;
    position: relative;
    width: fit-content;
`

const Title = styled.h1`
    font-size: 30px;
    font-weight: 700;
`
const Span = styled.span`
    font-size: 30px;
    font-weight: 700;
    color: ${props => props.theme.SubmitBtnBackColor};
`
const HeadUnderLine = styled.div`
    background-color: ${props => props.theme.underLineColor};
    height: 10px;
    border-radius: 10px;
    z-index: -1;
    bottom:-2px;
    position: absolute;
`



const Body = styled.div`
    margin-top: 20px;
`
const BodyItem = styled.p`
    margin-top: 10px;
    font-weight: 500;
`

function PageHeader({props}) {
    return(
        <Header>
            <Head>
                <Title>
                    {props.titlePre}
                    <Span>{props.span1}</Span>
                    {props.title}
                    <Span>{props.span2}</Span>
                    {props.titleNext}
                </Title>
                <HeadUnderLine style={{width : props.width}} />
            </Head>
            <Body>
                <BodyItem>
                    {props.body1}
                </BodyItem>
                <BodyItem>
                    {props.body2}
                </BodyItem>
                <BodyItem>
                    {props.body3}
                </BodyItem>
            </Body>
        </Header>
    );
}
export default PageHeader;