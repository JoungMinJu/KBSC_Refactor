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
    height: 75%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const Title = styled.h1`
    font-family: 'Nanum Myeongjo', serif;
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 30px;
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

function SignUpBox () {
    const navigate = useNavigate();
    const [passwordType1, setPasswordType1] = useState({
        type: 'password',
        visible: false
    });
    const [passwordType2, setPasswordType2] = useState({
        type: 'password',
        visible: false
    });
    const {register, handleSubmit, setError} = useForm()

    const handlePasswordType1 = (e) => {
        setPasswordType1(() => {
            if (!passwordType1.visible) {
                return { type: 'text', visible: true };
            }
            return { type: 'password', visible: false };
        })
    }

    const handlePasswordType2 = (e) => {
        setPasswordType2(() => {
            if (!passwordType2.visible) {
                return { type: 'text', visible: true };
            }
            return { type: 'password', visible: false };
        })
    }

    const onValid = async(data) => {
        var regExp = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?=[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,}$/;
        if (data.pw !== data.pw2){
            window.alert("비밀번호가 서로 다릅니다.")
            setError("pw", {shouldFocus : true})
            return
        }
        if (data.pw.match(regExp) == null){
            window.alert("영문, 숫자, 특수문자 중 2가지 이상 조합하여 8자리")
            return
        }
        const result = {
            username: data.id,
            nickname : data.nickname,
            password: data.pw,
        };
        try{
            await API.post('/api/v1/user/sign-up', result).then(
                response => {
                    console.log(response);
                }
            )
            navigate("/login");
        } catch(error){
            console.log(error)
        }
    }

    return(
        <Container>
            <RealContainer>
                <Title>회원가입을 진행해주세요</Title>
                <Form onSubmit={handleSubmit(onValid)}>
                    <Label>닉네임</Label>
                    <Input {...register("nickname", {required : true})} placeholder="닉네임을 입력해주세요" />
                    <Label>아아디</Label>
                    <Input {...register("id", {required : true})} placeholder="아이디를 입력해주세요" />
                    <Label>비밀번호</Label>
                    <PwContainer>
                        <Input {...register("pw", {required : true})} type={passwordType1.type} placeholder="비밀번호를 입력해주세요" />
                        <Eye onClick={handlePasswordType1} icon={passwordType1.visible ? faEye : faEyeSlash}/>
                    </PwContainer>
                    <Label>비밀번호 확인</Label>
                    <PwContainer>
                        <Input {...register("pw2", {required : true})} type={passwordType2.type} placeholder="비밀번호를 다시 입력해주세요" />
                        <Eye onClick={handlePasswordType2} icon={passwordType2.visible ? faEye : faEyeSlash}/>
                    </PwContainer>
                    <Btn>가입 완료</Btn>
                </Form>
            </RealContainer>
        </Container>
    );
}
export default SignUpBox;