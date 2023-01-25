import gservice from "../components/img/mainPage/gserviceInfo_Img.jpeg";
import styled from "styled-components";
// import messageImg1 from "../components/img/chatting/messageImg1.png";
// import messageImg2g from "../components/img/chatting/messageImg2.png";
// import messageImg3 from "../components/img/chatting/messageImg3.png";
// import messageImg4g from "../components/img/chatting/messageImg4.png";
// import chattingWill from "../components/img/chatting/chattingWill.png";
// import chattingWant from "../components/img/chatting/chattingWant.png";
// import gfenceSmall from "../components/img/fenceSmall/gfenceSmall.png";
// import bfenceSmall from "../components/img/fenceSmall/bfenceSmall.png";
// import pfenceSmall from "../components/img/fenceSmall/pfenceSmall.png";
// import rfenceSmall from "../components/img/fenceSmall/rfenceSmall.png";
// import yfenceSmall from "../components/img/fenceSmall/yfenceSmall.png";
// import glogo from "../components/img/logo/glogo.png";
// import blogo from "../components/img/logo/blogo.png";
// import plogo from "../components/img/logo/plogo.png";
// import rlogo from "../components/img/logo/rlogo.png";
// import ylogo from "../components/img/logo/ylogo.png";
// import gdesktop from "../components/img/desktop/gdesktop.png";
// import bdesktop from "../components/img/desktop/bdesktop.png";
// import pdesktop from "../components/img/desktop/pdesktop.png";
// import rdesktop from "../components/img/desktop/rdesktop.png";
// import ydesktop from "../components/img/desktop/ydesktop.png";
// import gdesktopSide from "../components/img/desktopSide/gdesktopSide.png";
// import bdesktopSide from "../components/img/desktopSide/bdesktopSide.png";
// import pdesktopSide from "../components/img/desktopSide/pdesktopSide.png";
// import rdesktopSide from "../components/img/desktopSide/rdesktopSide.png";
// import ydesktopSide from "../components/img/desktopSide/ydesktopSide.png";
// import customizing from "../components/img/customizing.png";
// import PageHeader from "../components/PageHeader";
import { useRecoilValue } from 'recoil';
import { isColor } from "../atoms";


// const Container = styled.body`
//     width: 100vw;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     margin-top: ${props => props.theme.navmarginTop};
//     font-family: 'Nanum Myeongjo', serif;
// `

// const Wrapper = styled.section`
//     width : ${props => props.theme.width};
//     max-width: ${props => props.theme.maxWidth};
//     min-height: ${props => props.theme.minHeight};
//     margin: auto;
// `
// const Wrapper2 = styled.section`
//     width : 100%;
//     max-width: ${props => props.theme.maxWidth};
//     min-height: fit-content;
//     display: flex;
//     align-items: center;
//     ${props => props.color && css`background-color: ${props => props.theme.emotionBoxBackColor};`};
//     margin-top: 70px;
// `

// const BothSideSection = styled(Wrapper)`
//     display: flex;
//     ${props => props.color && css`color: ${props => props.theme.SubmitBtnBackColor};`};
// `
// const SectionLeft = styled.div`
//     width: 50%;
//     /* margin-top: ${props => props.marginTop}; */
// `
// const SectionRight = styled.div`
//     width: 50%;
//     /* margin-top: ${props => props.marginTop}; */
// `

// const LogoDiv = styled.div`
//     display: flex;
//     width: 100%;
//     align-items: center;
// `
// const Logoimg = styled.img`
//     width: 70px;
//     height: 70px;
// `
// const LogoTitle = styled.h3`
//     font-family: 'Nanum Myeongjo', serif;
//     font-size: 70px;
//     margin-left: 10px;
//     font-weight: 600;
// `
// const SubTitle = styled.h3`
//     width: 100%;
//     font-size: 25px;
//     font-weight: 600;
//     margin-top: 20px;
// `
// const Btn = styled.button`
//     width: 32%;
//     height: 40px;
//     margin-top: 40px;
//     border: none;
//     background-color: ${props=>props.theme.SubmitBtnBackColor};
//     color: white;
//     border-radius: 5px;
//     cursor: pointer;
//     box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
// `
const Img = styled.img`
    width: 100%;
    /* margin-top: 50px; */
`

// const Title = styled.h1`
//     font-size: 27px;
//     font-weight: 600;
//     line-height: 1.5;
// `
// const Span = styled.span`
//     font-size: 27px;
//     font-weight: 700;
//     color: ${props => props.theme.SubmitBtnBackColor};
// `

// const pageheader__signup = {
//     title : "세상에서 가장 간단한 ",
//     span2 : "회원가입",
//     body1 : "회원가입을 먼저 해볼까요?",
//     body2 : "오직 닉네임, 아이디, 비밀번호만 있으면 가입할 수 있어요!",
//     body3 : "개인정보는 받지 않으니 안심하고 털어놓아요.",
// }
// const pageheader__emotion__empty = {
//     span1 : "감정비우기",
//     title : "로 부정적 감정 해소",
//     body1 : "이제 본격적으로 한울을 사용해볼까요?",
//     body2 : "먼저 감정 카드를 작성해볼거에요. 속상했던 일이나 말하기 힘든 고민이 있나요? 자유롭게 작성해보세요!",
// }
// const pageheader__emotion__empty2 = {
//     body1 : "이제, 비우고 싶은 감정 카드를 드래그 해보세요! 울타리 밖으로 던지면 삭제할 수 있어요.",
//     body2 : "지워지는 감정 카드를 보면 비우고 싶은 감정도 함께 정리되지 않나요?",
// }
// const pageheader__emotion__share = {
//     span1 : "감정나누기",
//     title : "로 따듯한 공감과 위로를",
//     body1 : "감정 비우기’에서 공개로 설정하여 작성한 글은 ‘감정 나누기’로 공유돼요.",
//     body2 : "응원해요를 눌러서 공감과 위로를 전해보세요!",
//     body3 : "매주 가장 많은 응원해요를 받은 3개의 감정 카드는 ‘이번 주 공감 TOP 3’에 노출돼요."
// }
// const pageheader__diary = {
//     span1 : "질문일기",
//     title : "로 자아표현과 감정표현 익히기",
//     body1 : "매 달 1일부터 말일까지 같은 질문이 주어져요.",
//     body2 : "주어진 질문에 답하며 하루를 돌아보고 지난 달의 답변과 비교하며 성장한 자신을 확인하세요!",
//     body3 : "지난 추억과 감정들을 돌아보면 저절로 기분이 좋아질거에요."
// }
// const pageheader__mission = {
//     span1 : "일일 미션",
//     title : "으로 성취감과 활력 있는 삶을",
//     body1 : "고민 유형에 따라 맞춤형 미션이 주어져요.",
//     body2 : "미션 완료 버튼을 눌러 미션을 인증하고 달성 현황에서 달성율을 확인해보세요!",
//     body3 : "지금 바로 아래의 고민 버튼을 눌러 미션을 진행해보세요!"
// }
// const pageheader__chat = {
//     span1 : "친구 상담",
//     title : "으로 또래 친구들과 소통하기",
//     body1 : "누구나 자유롭게 소통방을 개설하고 참여할 수 있어요.",
//     body2 : "욕설 입력 시 자동으로 블라인드 처리되니",
//     body3 : "예쁜 말로 공감과 위로를 나눠 서로에게 힘이 돼 주세요!"
// }
// const pageheader__chat2 = {
//     body1 : "‘상담해드려요’ 와 ‘상담해주세요’",
//     body2 : "원하는 유형의 소통방을 개설 및 참여 할 수 있어요.",
//     body3 : "개설자의 추천 수를 확인하고 참여해보세요!"
// }
// const pageheader__clinic = {
//     title : "추가 상담이 필요하다면 ",
//     span2 : "상담소 정보",
//     body1 : "전문가와의 추가 상담 필요 시",
//     body2 : "국가자격증을 보유한 상담사가 상주하는 상담소만 골라",
//     body3 : "위치 및 지역 기반 검색이 가능해요!"
// }
// const pageheader__customizing = {
//     title : "나만의 힐링 컬러로 ",
//     span2 : "컬러 커스터마이징",
//     body1 : "힐링 서비스라고 해서 꼭 초록색일 필요는 없죠.",
//     body2 : "그날 그날의 기분에 따라, 개인의 취향에 따라 컬러 테마를 바꿔보세요!",
//     body3 : "오른쪽의 컬러칩을 선택하여 지금 바로 바꿔보세요!"
// }
// const pageheader__intro = {
//     title : "처음 만나는 ",
//     span2 : "한울",
//     body1 : "한울은 ‘큰 울타리처럼 사람들을 포근하게 안아주어라’의 순우리말로 ",
//     body2 : "든든한 울타리로서 보호해주고, 포근하게 안아줄 수 있는 서비스라는 뜻이에요.",
//     body3 : "지금부터 한울 사용법과 기능을 소개해드릴게요!"
// }

function MainPage () {
    const iscolor = useRecoilValue(isColor);

    return(
    <Img src={
        iscolor === 1 ? gservice :
                iscolor === 2 ? gservice : 
                    iscolor === 3 ? gservice : 
                        iscolor === 4 ? gservice : gservice 
    }/>)
//         <Container>
//             {/* main */}
//             <BothSideSection color={true}>
//                 <SectionLeft style={{marginTop: '20%'}}>
//                     <LogoDiv>
//                         <Logoimg src={
//                             iscolor === 1 ? rlogo :
//                                 iscolor === 2 ? ylogo : 
//                                     iscolor === 3 ? glogo : 
//                                         iscolor === 4 ? blogo: plogo
//                         } ></Logoimg>
//                         <LogoTitle>한울</LogoTitle>
//                     </LogoDiv>
//                     <SubTitle>학교폭력 피해자 일상 복귀 지원 서비스</SubTitle>
//                     <Btn>서비스 시작하기</Btn>
//                     <Img src={
//                     iscolor === 1 ? rfenceSmall :
//                         iscolor === 2 ? yfenceSmall : 
//                             iscolor === 3 ? gfenceSmall : 
//                                 iscolor === 4 ? bfenceSmall: pfenceSmall
//                     }></Img>
//                 </SectionLeft>
//                 <SectionRight style={{marginTop: '2%'}}>
//                     <Img src={
//                         iscolor === 1 ? rdesktop :
//                             iscolor === 2 ? ydesktop : 
//                                 iscolor === 3 ? gdesktop : 
//                                     iscolor === 4 ? bdesktop: pdesktop
//                     }></Img>
//                 </SectionRight>
//             </BothSideSection>




//             {/* intro */}
//             <Wrapper >
//                 <PageHeader props={pageheader__intro} />

//             </Wrapper>




//             {/* 회원가입 */}
//             <BothSideSection>
//                 <SectionLeft>
//                     <PageHeader props={pageheader__signup} />
//                 </SectionLeft>
//                 <SectionRight>
//                     {/* 이미지 */}
//                 </SectionRight>
//             </BothSideSection>
            



//             {/* 감정비우기 */}
//             <Wrapper style={{paddingLeft : '10%'}}>
//                 <PageHeader props={pageheader__emotion__empty} />
//                 {/* 이미지 */}
//                 <PageHeader props={pageheader__emotion__empty2}/>
//                 {/* 이미지 */}
//             </Wrapper>
            



//             {/* 감정나누기 */}
//             <Wrapper style={{minHeight: 'fit-content'}}>
//                 <PageHeader props={pageheader__emotion__share} />
//             </Wrapper>
//             <Wrapper2 color={true}>
//                 .....
//             </Wrapper2>
            


//             {/* 질문일기 */}
//             <Wrapper style={{paddingLeft : '20%', minHeight: 'fit-content'}}>
//                 <PageHeader props={pageheader__diary} />
//             </Wrapper>
//             <Wrapper2>
//                 wlfanfwon
//             </Wrapper2>




//             {/* 일일미션 */}
//             <Wrapper style={{minHeight: 'fit-content'}}>
//                 <PageHeader props={pageheader__mission} />
//             </Wrapper>
//             <Wrapper2>
//                 ddd
//             </Wrapper2>




//             {/* 친구상담 */}
//             <BothSideSection>
//                 <SectionLeft style={{marginTop: '20%'}}>
//                     <PageHeader props={pageheader__chat} />
//                 </SectionLeft>
//                 <SectionRight>
//                     <Img src={messageImg1} />
//                     <Img src={
//                     iscolor === 1 ? messageImg2g :
//                         iscolor === 2 ? messageImg2g : 
//                             iscolor === 3 ? messageImg2g : 
//                                 iscolor === 4 ? messageImg2g: messageImg2g
//                     }></Img>
//                     <Img src={messageImg3} />
//                     <Img src={
//                     iscolor === 1 ? messageImg4g :
//                         iscolor === 2 ? messageImg4g : 
//                             iscolor === 3 ? messageImg4g : 
//                                 iscolor === 4 ? messageImg4g: messageImg4g
//                     }></Img>
//                 </SectionRight>
//             </BothSideSection>
//             <BothSideSection>
//                 <SectionLeft style={{width: '70%'}}>
//                     <Img src={chattingWill} style={{marginTop:'0'}}/>
//                     <Img src={chattingWant} style={{marginTop:'10px'}}/>
//                 </SectionLeft>
//                 <SectionRight>
//                     <PageHeader props={pageheader__chat2}/>
//                 </SectionRight>
//             </BothSideSection>




//             {/* 상담소정보 */}
//             <BothSideSection>
//                 <SectionLeft>
//                     <PageHeader props={pageheader__clinic}/>
//                 </SectionLeft>
//                 <SectionRight>

//                 </SectionRight>
//             </BothSideSection>




//             {/* 컬러 커스터마이징 */}
//             <BothSideSection style={{minHeight: 'fit-content'}}>
//                 <SectionLeft>
//                     <PageHeader props={pageheader__customizing}/>
//                 </SectionLeft>
//                 <SectionRight>
//                     {/* 컬러칩 */}
//                 </SectionRight>
//             </BothSideSection>
//             <Wrapper>
//                 <Img src={
//                 iscolor === 1 ? customizing :
//                     iscolor === 2 ? customizing : 
//                         iscolor === 3 ? customizing : 
//                             iscolor === 4 ? customizing: customizing
//                 }></Img>
//             </Wrapper>




//             {/* 마지막 */}
//             <BothSideSection style={{minHeight: 'fit-content'}}>
//                 <SectionLeft>
//                     <Title>
//                         지금 바로 <Span>한울</Span>을 시작해보세요. <br/>
//                         당신의 아름다운 미래를 <br/>
//                         <Span>든든한 울타리</Span>가 되어 곁에서 응원할게요!
//                     </Title>
//                     <Btn>서비스 시작하기</Btn>
//                 </SectionLeft>
//                 <SectionRight>
//                     <Img src={
//                     iscolor === 1 ? rdesktopSide :
//                         iscolor === 2 ? ydesktopSide : 
//                             iscolor === 3 ? gdesktopSide : 
//                                 iscolor === 4 ? bdesktopSide: pdesktopSide
//                     } style={{transform: 'scale(2)'}}/>
//                 </SectionRight>
//             </BothSideSection>

//         </Container>
//     )
}
export default MainPage;