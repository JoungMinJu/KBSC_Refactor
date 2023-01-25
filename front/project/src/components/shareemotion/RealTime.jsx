import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { LogAPI } from "../../axios";
import { useEffect } from "react";


const TopContainer = styled.section`
    width: 100%;
    margin-top: 40px;
    font-family: 'Nanum Myeongjo', serif;
    display: flex;
    flex-direction: column;
`
const TopBanner = styled.div`
    height: 40px;
    background-color: ${props=>props.theme.BannerBackColor};
    color: white;
    width: 230px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin-bottom: -4px;
    z-index: 1;
    margin-top: 1.5%;
`

const TopEmotionBox = styled.div`
    width: 100%;
    height: fit-content;
    border: 5px solid ${props=>props.theme.emotionBoxBorderColor};
    border-radius: 5px;
    background-color: ${props => props.theme.emotionBoxBackColor};
    padding: 2% 3%;
`
const TopInnerBox = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const TopItem = styled(motion.div)`
    background-color: white;
    padding: 6%;
    margin-left: 4%;
    margin-right: 4%;
    border-radius: 10px;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`

const TopItemDate = styled.div`
    color : ${props => props.theme.emotionItemColor};
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
`

const TopItemBody = styled.p`
    line-height: 1.5;
    font-weight: 500;
    font-size: 15px;
`

const TopItemFooter = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    color : ${props => props.theme.itemFooterColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    span{
        font-size: 13px;
    }
`
const TopItemHeart = styled(FontAwesomeIcon)`
    cursor: pointer;
    font-size: 22px;
    transition: all 0.6s;
`

const TopboxVariants = {
    start: {
      opactiy: 0,
      scale: 0.5
    },
    end : {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.3,
        bounce: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    }
}

const TopinnerVariants = {
    start : {
      opacity: 0,
      y : 10
    },
    end : {
      opacity: 1,
      y : 0
    }
}


const Container = styled.section`
    width: 100%;
    margin-top: 40px;
    font-family: 'Nanum Myeongjo', serif;
    display: flex;
    flex-direction: column;
`
const Banner = styled.div`
    height: 40px;
    background-color: ${props=>props.theme.BannerBackColor};
    color: white;
    width: 230px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin-bottom: -4px;
    z-index: 1;
    margin-top: 1.5%;
`

const EmotionBox = styled.div`
    width: 100%;
    height: fit-content;
    border: 5px solid ${props=>props.theme.emotionBoxBorderColor};
    border-radius: 5px;
    background-color: ${props => props.theme.emotionBoxBackColor};
    padding: 2% 3%;
    margin-bottom: 200px;
`

const InnerBox = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const FirstLine = styled(motion.div)`
    
`

const SecondLine = styled(motion.div)`
    
`

const ThirdLine = styled(motion.div)`
    
`

const Item = styled(motion.div)`
    background-color: white;
    padding: 6%;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: 30px;
    border-radius: 10px;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`

const ItemDate = styled.div`
    color : ${props => props.theme.emotionItemColor};
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
`

const ItemBody = styled.p`
    line-height: 1.5;
    font-weight: 500;
    font-size: 15px;
`

const ItemFooter = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    color : ${props => props.theme.itemFooterColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    span{
        font-size: 13px;
    }
`
const ItemHeart = styled(FontAwesomeIcon)`
    cursor: pointer;
    font-size: 22px;
    transition: all 0.6s;
`

const boxVariants = {
    start: {
      opactiy: 0,
      scale: 0.5
    },
    end : {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.3,
        bounce: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.07,
      },
    }
}

const innerVariants = {
    start : {
      opacity: 0,
      y : 10
    },
    end : {
      opacity: 1,
      y : 0
    }
}

function RealTime () {
    const [info, setInfo] = useState([])
    const [topInfo, setTopInfo] = useState([])

    const getInfo = async() => {
        try{
            const data = await LogAPI.get("/api/v1/emotion?type=public");
            console.log(data.data.data)
            setInfo(data.data.data)
        }catch(error){
            console.log(error)
        }
    }

    const getTopInfo = async() => {
        try{
            const data = await LogAPI.get("/api/v1/emotion/top");
            console.log(data.data.data)
            setTopInfo(data.data.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getInfo();
        getTopInfo();
    },[])

    const onHeart = async(id) => {
        console.log(id)
        try{
            await LogAPI.get(`/api/v1/emotion/${id}/like`);
            const data = await LogAPI.get("/api/v1/emotion?type=public");
            const data2 = await LogAPI.get("/api/v1/emotion/top");
            setInfo(data.data.data)
            setTopInfo(data2.data.data)
        }catch(e){
            console.log(e)
        }
    }

    return(
        <>
        <TopContainer>
            <TopBanner>이번 주 공감 TOP 3</TopBanner>
            <TopEmotionBox>
                <TopInnerBox variants={TopboxVariants} initial="start" animate="end">
                    {topInfo?.map(i => 
                        <TopItem
                            key={i.id}
                            variants={TopinnerVariants}>
                            <div>
                                <TopItemDate>{i.createdDateTime.substr(0, 10).replace(/-/g, '.')}</TopItemDate>
                                <TopItemBody>{i.content}</TopItemBody>
                            </div>
                            <TopItemFooter>
                                <span>응원해요 {i.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}개</span>
                                {i.like ? <TopItemHeart isActive={i.like} icon={faHeart} onClick={() => onHeart(i.id)}  /> : <TopItemHeart isActive={i.like} style={{color : "#F0F0F0"}} onClick={() => onHeart(i.id)} icon={faHeart} />}
                            </TopItemFooter>
                        </TopItem>)}
                </TopInnerBox>
            </TopEmotionBox>
        </TopContainer>
        <Container>
            <Banner>실시간 고민 나누기</Banner>
            <EmotionBox>
                <InnerBox variants={boxVariants} initial="start" animate="end">
                    <FirstLine>
                        {info?.filter(prev => info.indexOf(prev) % 3 === 0).map(i => 
                            <Item
                            key={i.id}
                            variants={innerVariants}>
                            <div>
                                <ItemDate>{i.createdDateTime.substr(0, 10).replace(/-/g, '.')}</ItemDate>
                                <ItemBody>{i.content}</ItemBody>
                            </div>
                            <ItemFooter>
                                <span>응원해요 {i.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}개</span>
                                {i.like ? <ItemHeart isActive={i.like} icon={faHeart} onClick={() => onHeart(i.id)}  /> : <ItemHeart isActive={i.like} style={{color : "#F0F0F0"}} onClick={() => onHeart(i.id)} icon={faHeart} />}
                            </ItemFooter>
                        </Item>)}
                    </FirstLine>
                    <SecondLine>
                        {info?.filter(prev => info.indexOf(prev) % 3 === 1).map(i => 
                            <Item
                            key={i.id}
                            variants={innerVariants}>
                            <div>
                                <ItemDate>{i.createdDateTime.substr(0, 10).replace(/-/g, '.')}</ItemDate>
                                <ItemBody>{i.content}</ItemBody>
                            </div>
                            <ItemFooter>
                                <span>응원해요 {i.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}개</span>
                                {i.like ? <ItemHeart isActive={i.like} icon={faHeart} onClick={() => onHeart(i.id)}  /> : <ItemHeart isActive={i.like} style={{color : "#F0F0F0"}} onClick={() => onHeart(i.id)} icon={faHeart} />}
                            </ItemFooter>
                        </Item>)}
                    </SecondLine>
                    <ThirdLine>
                        {info?.filter(prev => info.indexOf(prev) % 3 === 2).map(i => 
                            <Item
                            key={i.id}
                            variants={innerVariants}>
                            <div>
                                <ItemDate>{i.createdDateTime.substr(0, 10).replace(/-/g, '.')}</ItemDate>
                                <ItemBody>{i.content}</ItemBody>
                            </div>
                            <ItemFooter>
                                <span>응원해요 {i.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}개</span>
                                {i.like ? <ItemHeart isActive={i.like} icon={faHeart} onClick={() => onHeart(i.id)}  /> : <ItemHeart isActive={i.like} style={{color : "#F0F0F0"}} onClick={() => onHeart(i.id)} icon={faHeart} />}
                            </ItemFooter>
                        </Item>)}
                    </ThirdLine>
                </InnerBox>
            </EmotionBox>
        </Container>
        </>
    );
}
export default RealTime;