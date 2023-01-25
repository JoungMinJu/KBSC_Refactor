import { useEffect, useState } from "react";
import styled from "styled-components";
import { LogAPI } from "../../axios";
import Img from "../img/blur.png";

const Wrapper = styled.section`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BtnContainer = styled.section`
    width: 100%;
    display: flex;
`

const BoxContainer = styled.section`
    min-height: 400px;
    height: fit-content;
    width: 100%;
    padding-top: 2%;
`
const InnerBox = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10% 4%;
    margin-top: 20px;
    align-items: space-between;
`

const Item = styled.div`
    background-color: white;
    position: relative;
    padding: 6%;
    border-radius: 10px;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`

const ItemCategory = styled.div`
    font-family: 'Nanum Myeongjo', serif;
    color : ${props => props.theme.emotionItemColor};
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 10px;
`
const ItemBody = styled.p`
    font-family: 'Nanum Myeongjo', serif;
    line-height: 1.5;
    font-weight: 500;
    padding-top: 5px;
    padding-bottom: 20px;
    font-size: 15px;
`
const ItemFooter = styled.div`
    border: 1px solid ${props => props.theme.lineColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color : ${props => props.theme.lineColor};
    text-align: center;
    margin-top: 15px;
    padding: 5px 10px;
    width: 100px;
    font-size: 13px;
    border-radius: 5px;
    align-self: flex-end;
    cursor: pointer;
    transition: all 0.3s;
    :hover{
        color : white;
        background-color: ${props => props.theme.lineColor};
        transition: all 0.3s;
    }
`

const Btn = styled.div`
    cursor: pointer;
    background-color: ${props => props.isActive ? props.theme.btnColor : "white"};
    color:${props => props.isActive ? "white" : props.theme.btnColor};
    border: 1.5px solid ${props => props.theme.btnColor};
    border-radius: 20px;
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    font-weight: 500;
    font-size: 14px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

const ItemBlur = styled.div`
    border-radius: 10px;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.92;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BlurImg = styled.img`
    width: 110px;
    height: 65px;
    cursor: pointer;
`

function MissionBox () {
    const [clickCategories, setClickCategories] = useState([])
    const [getApi, setGetApi] = useState(false)
    const [categoryArray, setCategoryArray] = useState([])
    
    
    const onClick = async(idx) => {
        try{
            await LogAPI.put(`/api/v1/missions/categories/${idx}`)
            getCategory()
        }catch(e){
            console.log(e)
        }
    }

    const missionSucess = async(id) => {
        try{
            await LogAPI.put(`/api/v1/missions/${id}/success`)
            setGetApi(prev => !prev)
        }catch(e){
            console.log(e)
        }
    }

    const getCategory = async() => {
        try{
            const categories = await LogAPI.get("/api/v1/missions")
            const cate = await LogAPI.get("/api/v1/missions/categories")
            setClickCategories(categories.data.data)
            setCategoryArray(cate.data.data)
            console.log(cate.data.data, categories.data.data)
        }catch(e){
            console.log(e)
        }
    }

    const checkCategories = (clickCategories) => {
        const result = []
        clickCategories.forEach( x => {
            result.push(x.category)
        });
        console.log(result)
    }

    useEffect(()=>{
        getCategory()
        checkCategories(clickCategories)
    },[getApi])

    return (
        <Wrapper>
            <BtnContainer>
                {categoryArray.map(i => 
                    <Btn 
                        key={i.id}
                        isActive={i.checked}
                        onClick={()=> onClick(i.id)}
                        >
                        {i.category}
                    </Btn>
                )}
            </BtnContainer>
            <BoxContainer>
                <InnerBox>
                        {clickCategories?.map(i => 
                            <Item
                                key={i.id}>
                                <ItemCategory>{i.category === "INSOMNIA" ? "불면증" :
                                                   i.category === "CONFIDENCE" ? "자신감" : 
                                                       i.category === "FEAR" ? "불안감" :
                                                            i.category === "ANOREXIA" ? "식욕부진" : "무력감"}</ItemCategory>
                                <div><ItemBody>{i.content}</ItemBody></div>
                                <ItemFooter onClick={()=>missionSucess(i.id)}>
                                    미션완료
                                </ItemFooter>
                                {i.isSuccess ? 
                                <ItemBlur>
                                    <BlurImg onClick={()=>missionSucess(i.id)} src={Img} />
                                </ItemBlur> :
                                 null
                                }
                            </Item>)}
                    </InnerBox>
            </BoxContainer>
        </Wrapper>
    )
}
export default MissionBox;