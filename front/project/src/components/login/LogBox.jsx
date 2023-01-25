import styled from "styled-components";
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from '../../axios';

const Container = styled.section`
    width: 75%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 50px;
`

const RealContainer = styled.div`
    width: 100%;
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const Title = styled.h1`
    font-family: 'Nanum Myeongjo', serif;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 40px;
`

const Form = styled.form`
    width: 100%;
`

const Label = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight : 600;
    margin-bottom: 13px;
`
const Input = styled.input`
    width: 100%;
    margin-bottom: 18px;
    padding: 7px 10px;
    border: 1px solid #A2A2A6;
    border-radius: 3px;
    ::placeholder {
        color: #A2A2A6;
    }
    :focus {
        outline-color: ${props=>props.theme.SubmitBtnBackColor};
    }
`

const PwContainer = styled.div`
    width: 100%;
    position: relative;
`

const Eye = styled(FontAwesomeIcon)`
    cursor: pointer;
    color: #667085;
    position: absolute;
    font-size: 12px;
    right: 6px;
    top : 8px;
`

const Info = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    margin-bottom: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const AutoLog = styled.div`
    display: flex;
    align-items: center;
`

const AutoLogBtn = styled.div`
    width: 14px;
    height: 14px;
    margin-right: 5px;
    border: 2px solid #667085;
    border-radius: 3px;
    cursor: pointer;
    background-color: ${props => props.isAcitve ? "#667085" : "white"};
`

const AutoLogSpan = styled.span`
    color : #667085;
`
const SignUp = styled.span`
    color: ${props=>props.theme.logBtnBackColor};
    cursor: pointer;
    font-weight: 500;
`

const Btn = styled.button`
    margin-top: 20px;
    background: ${props=>props.theme.logBtnBackColor};
    color:#fff;
    width: 100%;
    border: none;
    font-weight: 500;
    padding: 11px 0px;
    border-radius: 5px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position:relative;
    cursor:pointer;
    transition:700ms ease all;
    outline:none;
    &:hover{
        background:#fff;
        color: ${props=>props.theme.logBtnBackColor};
    }
    &:before, &:after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background:  ${props=>props.theme.logBtnBackColor};
        transition:400ms ease all;
    }
    &:after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }
    &:hover:before,&:hover:after{
        width:100%;
        transition:800ms ease all;
    }
`

function LogBox () {
    const navigate = useNavigate();
    const [passwordType, setPasswordType] = useState({
        type: 'password',
        visible: false
    });
    const [autolog, setAutoLog] = useState(false)
    const {register, handleSubmit} = useForm()

    const handlePasswordType = (e) => {
        setPasswordType(() => {
            if (!passwordType.visible) {
                return { type: 'text', visible: true };
            }
            return { type: 'password', visible: false };
        })
    }

    const onValid = async(data) => {
        const result = {
            "username": data.id,
            "password": data.pw,
        };
        try{
            await API.post('/api/v1/user/login', result).then(
                response => {
                    if(autolog){
                        localStorage.setItem("token", response.data);
                    }else{
                        sessionStorage.setItem("token", response.data)
                    }
                }
            )
            navigate("/")
        } catch(error){
            alert(error.response.data.message)
        }
    }

    return(
        <Container>
            <RealContainer>
                <Title>로그인하여 한울을 만나보세요</Title>
                <Form onSubmit={handleSubmit(onValid)}>
                    <Label>아이디</Label>
                    <Input {...register("id", {required : true})} placeholder="아이디를 입력해주세요" />
                    <Label>비밀번호</Label>
                    <PwContainer>
                        <Input {...register("pw", {required : true})} type={passwordType.type} placeholder="비밀번호를 입력해주세요" />
                        <Eye onClick={handlePasswordType} icon={passwordType.visible ? faEye : faEyeSlash}/>
                    </PwContainer>
                    <Info>
                        <AutoLog>
                            <AutoLogBtn isAcitve = {autolog} onClick={() => setAutoLog(prev => !prev)}></AutoLogBtn>
                            <AutoLogSpan>자동 로그인</AutoLogSpan>
                        </AutoLog>
                        <SignUp onClick = {() => navigate("/signup")}>
                            회원가입
                        </SignUp>
                    </Info>
                    <Btn>로그인하기</Btn>
                </Form>
            </RealContainer>
        </Container>
    );
}
export default LogBox;