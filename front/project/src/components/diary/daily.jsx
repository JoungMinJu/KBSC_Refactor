import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { LogAPI } from '../../axios';

const Container = styled.section`
    width: 100%;
    /* margin-top: 30px; */
    margin-bottom: 10%;
    font-family: 'Nanum Myeongjo', serif;
`
const Question = styled.div`
    margin-bottom: 30px;
`
const QuestionItem = styled.p`
    /* margin-top: 10px; */
    font-weight: 500;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const Textarea = styled.textarea`
    width: 100%;
    height: 350px;
    border: 1px solid #A2A2A6;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 30px;
    resize:none;
    ::placeholder {
        color: #A2A2A6;
    }
    :focus {
        outline-color: ${props=>props.theme.SubmitBtnBackColor};
    }
`

const Btn = styled.button`
    height: 40px;
    color:white;
    width: 170px;
    border: none;
    border-radius: 3px;
    background-color: ${props=>props.theme.SubmitBtnBackColor};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
`

function DiaryDaily () {
    const nowDate = new Date();
    const [reset, SetReset] = useState(false);
    const day = nowDate.getDate();
    const month = nowDate.getMonth() + 1;
    const [todayData, setTodayData] = useState(null);
    const { register, handleSubmit } = useForm()

    const onValid = async(data) => {
        const result = {
            "answer" : data.diary
        }
        try{
            await LogAPI.post(`/api/v1/answer/${day}`, result).then(
                response => {
                    console.log(response);
                }
            )
        }catch(error){
            console.log(error)
        }
    }

    const getData = async() => {
        try{
            const data = await LogAPI.get(`/api/v1/answer/${day}/${nowDate.getFullYear()}-${('0' + month).slice(-2)}`);
            setTodayData(data.data.data[0])
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getData()
    },[reset])



    return(
    <Container>
        {todayData?.answer === '' ? 
        <>
        <Question>
            <QuestionItem>
                {todayData?.question}
            </QuestionItem>
        </Question>
        <Form onSubmit={handleSubmit(onValid)}>
            <Textarea {...register("diary", {required : true})}  placeholder="질문에 자유롭게 답해주세요."/>
            <Btn onClick={() => SetReset()}>작성 완료</Btn>
        </Form></> : 
        <Question>
            <QuestionItem>
                오늘의 대답이 등록되었습니다.
            </QuestionItem>
        </Question>}
    </Container>
    )
}
export default DiaryDaily;