import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { LogAPI } from '../../axios';

const Container = styled.section`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 10%;
    font-family: 'Nanum Myeongjo', serif;
    display:flex;
    align-items: center;
`

// 책 페이지 넘어가는 버튼
const BtnPage = styled.div`
    width: 7%;
    cursor: pointer;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    color: ${props=>props.theme.bookPageBtn};
`

// 책 모양
const BookOuter = styled.div`
    position: relative;
    width: 43%;
    height: 580px;
    background-color: ${props=>props.theme.bookOuterColor};
    border-radius: 10px;
    display: flex;
    align-items: center;
`
const BookInner = styled.div`
    position: absolute;
    ${props=> (props.align === 'left' ? 'right:0;' : 'left:0;' )}
    width: 96%;
    height: 95%;
    background-color: ${props=>props.theme.bookInnerColor};
    border-radius: 10px;
    display: flex;
    align-items: center;
`   

const Paper = styled.div`
    position: absolute;
    ${props=> (props.align === 'left' ? 'right:0;' : 'left:0;' )}
    width: 96%;
    height: 95%;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(215, 215, 215, 0.80) ${props=> (props.align === 'left' ? '-15px' : '15px')} 0px 20px 0px inset;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    ${props=> (props.align === 'left' ? 'padding: 20px 40px 20px 30px;' : 'padding: 20px 30px 20px 40px;' )}
`

// const EmptyPaper = styled(Paper)`
//     ${props=> (props.align === 'left' ? 'padding: 20px 40px 20px 30px;' : 'padding: 20px 30px 20px 40px;' )}
// `

// 책 내용 공통
const Header = styled.div`
    height: 10%;
    display: flex;
    padding-top: 5px;
`

const ContentDiv = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 700px;
`
const StyledSpanA = styled.span`
    padding-right: 5px;
`
const StyledSpanB = styled.span`
    padding-right: 10px;
`

const ScrollDiv = styled.div`
    overflow-y: scroll;
    height: 100%;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(159, 158, 158, 1);
    }
    ::-webkit-scrollbar-track {
        background-color: rgba(217, 217, 217, 1);
    }
`

// 책 왼쪽 내부
const Item = styled.li`
    font-size: 12px;
    padding-bottom: 15px; 
    color: ${props=>props.color || props.theme.bookBoxTextColor};
    cursor: pointer;
    :hover {
        color: gray;
    }
`

const ItemUnderLine = styled.span`
    display: inline;
    box-shadow: inset 0 -6px 0 ${props => props.theme.underLineColor};
`

// 책 오른쪽 내부
const EmptyGuideDiv = styled.div`
    color: ${props=>props.theme.bookBoxGuideTextColor};
    width: 100%;
    margin: auto;
    text-align: center;
    line-height: 2.5;
`
const UpdateBtn = styled.button`
    height: 20px;
    color:white;
    width: 60px;
    border: none;
    border-radius: 3px;
    background-color: ${props=>props.theme.SubmitBtnBackColor};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    margin-left: 20px;
    font-size: 12px;
`

const UpdateDiv = styled.div`
    height: 20px;
    color:white;
    width: 60px;
    border: none;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.theme.SubmitBtnBackColor};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    margin-left: 20px;
    font-size: 12px;
`

const Question = styled.div`
    height: 10%;
    font-size: 12px;
`

const Answer = styled.div`
    height: 90%;
    font-size: 12px;
    line-height: 1.5;
    color: #414141;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    border: 1px solid #A2A2A6;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 30px;
    resize:none;
    color: #414141;
    font-family: 'Nanum Myeongjo', serif;
    :focus {
        outline-color: ${props=>props.theme.SubmitBtnBackColor};
    }
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #9F9E9E;
    }
    ::-webkit-scrollbar-track {
        background-color: #D9D9D9;
    }
`

function DiaryMonthly () {
    // API로부터 받아오는 날짜 별 질문
    const [diaryAnswer, setDiaryAnswer] = useState({})
    // 수정모드 여부
    const [updateState, setUpdateState] = useState(false);

    // API로부터 모든 질문들 받아오기
    const [questions, setQuestions] = useState([])
    
    // 선택된 질문 번호 알아내기
    const [isClicked, setIsClicked] = useState([false, false]);

    const handleSelect = async(index) => {
        try{
            // 클릭된 질문 번호
            const newArr = Array(questions.length).fill(false);
            newArr[index] = true;
            setIsClicked(newArr);
            // 보고있는 페이지 날짜정보

            // 다른 질문 클릭하면 수정모드 해제
            setUpdateState(false); 

            const data = await LogAPI.get(`/api/v1/answer/${index}/${nowPageYear}-${('0' + nowPageMonth).slice(-2)}`);
            setDiaryAnswer(data.data.data[0])
            console.log(data.data.data[0])
        }catch(e){
            console.log(e)
        }
    };

    // 현재 날짜(월)을 기준으로 책페이지 렌더링
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth();
    const day = nowDate.getDate();

    // 보고있는 페이지 년, 월 (number)
    const [nowPageYear, setNowPageYear] = useState(year);
    const [nowPageMonth, setNowPageMonth] = useState(month+1);

    // 보고있는 페이지 년+월 (string)
    const [nowPageDate, setNowPageDate] = useState(nowPageYear + '-' + ('0' + nowPageMonth).slice(-2));

    // 이전달
    const handlePrevBtn = () => {
        setNowPageMonth(prev => ( prev === 1 ? (setNowPageYear(prev=>(prev-1)), prev = 12) : prev-1 ));
        setUpdateState(false)
    }
    // 다음달 
    const handleNextBtn = () => {
        setNowPageMonth(prev => ( prev === 12 ? (setNowPageYear(prev=>(prev+1)), prev = 1) : prev+1 ));
        setUpdateState(false)
    }

    // API로 부터 질문내용 받아옴
    const getDiary = async() => {
        const data = await LogAPI.get("/api/v1/question");
        setQuestions(data.data.data)
    }

    useEffect(()=>{
        setNowPageDate(nowPageYear + '-' + ('0' + nowPageMonth).slice(-2));
        setIsClicked([false, false]);
        getDiary()
    },[nowPageDate])

    // 일기내용 수정하기
    console.log(diaryAnswer?.answer)
    const {register, handleSubmit } = useForm({
            defaultValues : {
                fixContent : diaryAnswer?.answer
            }
    });
    const onValid = async(data) => {
        const result = {
            "answer" : data.fixContent
        }
        // api 연동
        try{
            await LogAPI.put(`/api/v1/answer/${diaryAnswer?.answer_id}`, result).then(
                response => {
                    setDiaryAnswer(response.data.data);
                }
            )
        }catch(e){
            console.log(e)
        }
        setUpdateState(false)
    }
    
    
    return(
    <Container>
        {/* 책 왼쪽 */}
        <BtnPage onClick={handlePrevBtn}>{'<'}</BtnPage>
        <BookOuter>
            <BookInner align='left'>
                <Paper align='left'>
                    <Header>
                        <Title>
                            <StyledSpanA>{nowPageYear}년</StyledSpanA>
                            <StyledSpanA>{('0' + nowPageMonth).slice(-2)}월</StyledSpanA>
                        </Title>
                    </Header>
                    <ContentDiv>
                        <ScrollDiv>
                            <ul>
                            {questions.map(i =>
                                <Item key={i.id} 
                                    isClicked={isClicked} 
                                    onClick={()=>handleSelect(i.id)} 
                                    color={isClicked[i.id] ? 'black' : ''}>
                                    {
                                        isClicked[i.id] ? 
                                        <ItemUnderLine>
                                            <StyledSpanB>{('0' + i.id).slice(-2)}일</StyledSpanB>
                                            <span style={{lineHeight : "1.6"}}>{i.content}</span>
                                        </ItemUnderLine> :
                                        <span>
                                            <StyledSpanB>{('0' + i.id).slice(-2)}일</StyledSpanB>
                                            <span style={{lineHeight : "1.6"}}>{i.content}</span>
                                        </span>
                                    }
                                </Item>
                            )}
                            </ul>
                        </ScrollDiv>
                    </ContentDiv> 
                </Paper>
            </BookInner>
        </BookOuter>
        {/* 책 오른쪽*/}
        <BookOuter>
            <BookInner align='right'>
                <Paper>
                    {isClicked.every(el => el === false) 
                    ?
                    <EmptyGuideDiv>
                        왼쪽 페이지에서 <br />
                        답변을 보고 싶은 질문을 클릭해주세요.
                    </EmptyGuideDiv> 
                    :
                        <form style={{height: '100%', width: '100%'}} onSubmit={handleSubmit(onValid)}>
                            <Header>
                                <Title>
                                    <StyledSpanB>{('0' + nowPageMonth).slice(-2)}월</StyledSpanB>
                                    <span>{('0' + diaryAnswer?.id).slice(-2)}일</span>       
                                </Title>
                                {diaryAnswer?.id === day ?
                                updateState ? 
                                    <UpdateBtn >완료</UpdateBtn> 
                                    : <UpdateDiv onClick={() => setUpdateState(true)}>수정</UpdateDiv> 
                                : null
                                }
                            </Header>
                            <ContentDiv>
                                <Question>
                                    <ItemUnderLine>{diaryAnswer?.question}</ItemUnderLine>
                                </Question>
                                <Answer>
                                    {
                                        updateState ? 
                                        <TextArea {...register("fixContent", {required : true})} placeholder="내용을 입력해주세요."/>
                                        :
                                        <ScrollDiv>
                                            <pre style={{whiteSpace: 'pre-wrap', paddingRight: '10px'}}>
                                                {diaryAnswer?.answer}
                                            </pre>
                                        </ScrollDiv>
                                    }
                                </Answer>
                            </ContentDiv>
                        </form> 
                    }
                </Paper>
            </BookInner>
        </BookOuter>
        <BtnPage onClick={handleNextBtn}>{'>'}</BtnPage>
    </Container>
    );
}
export default DiaryMonthly;