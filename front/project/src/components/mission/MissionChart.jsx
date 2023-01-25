import { useEffect } from "react";
import ApexChart from "react-apexcharts"
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isColor } from "../../atoms";
import "./box.css";
import { LogAPI } from '../../axios';
import { useState } from "react";
 
const Container = styled.section`
    margin-top: 20px;
    margin-bottom: 150px;
`



function MissionChart () {
    const [a, setSuccess] = useState([0,0,0,0,0,0,0])
    const today = new Date();
    const week = new Array('일', '월', '화', '수', '목', '금', '토');
    const dayGet = (n) => {
        const num = today.getDay()
        if (num - n < 0){
            return 6 + num - n
        }else{
            return num - n
        }
    }
    const dateGet = (n) => {
        const month = today.getMonth() + 1
        const date = today.getDate()
        if (date - n <= 0){
            if (month === 5 || month ===  7 || month ===  8 || month ===  10 || month ===  12){
                return 30 - (date - n)
            }
            else if (month === 3){
                return 28 - (date - n)
            }else if (month === 1 || month === 2 || month ===  4 || month ===  6 || month ===  9 || month ===  11){
                return 31 - (date - n)
            }
        }else {
            return date - n
        }
    }
    
    const weekArray = [`${dateGet(6)}일 ${week[dayGet(6)]}요일`,`${dateGet(5)}일 ${week[dayGet(5)]}요일`,`${dateGet(4)}일 ${week[dayGet(4)]}요일`,`${dateGet(3)}일 ${week[dayGet(3)]}요일`,`${dateGet(2)}일 ${week[dayGet(2)]}요일`,`${dateGet(1)}일 ${week[dayGet(1)]}요일`,`${dateGet(0)}일 ${week[dayGet(0)]}요일`]

    const getSuccess = async() => {
        try{
            const weekData = await LogAPI.get("/api/v1/missions/success-count")
            setSuccess(weekData.data.data.reverse())
        }catch(e){
            console.log(e)
        }
    }

    const please = (a) => {
        const len = a.length
        const result = []
        a.forEach( x => {
            result.push(((x / 7) * 100).toFixed(2))
          });
        if(len < 7){
            let nums = new Array(7-len);
            for (let i = 0; i < 7-len ; ++i) {
                nums[i] = 0;
            }
            const real = [...nums, ...result]
            return real
            
        }else{
            return result
        }
    }

    useEffect(()=>{
        getSuccess();
    },[])

    const theme = useRecoilValue(isColor);
    const whatColor = () => {
        if (theme === 1){
            return "#F1A6A0"
        }else if (theme === 2){
            return "#FFC659"
        }else if (theme === 3){
            return "#98D4BF"
        }else if (theme === 4){
            return "#92A4E3"
        }else{
            return "#B19EE8"
        }
    }
    return (
        <Container>
            <ApexChart 
        type="line"
        series={[
            {
                name: "",
                data: please(a)
            },
        ]}
        height = {`350px`}
        width = {`100%`}
        options={{
            theme:{
                mode: "dark",
            },
            chart : {
                toolbar:{           // 차트위에 기능바
                    show:false,
                },
                background: "transparent",      // 배경색
            },
            markers : {
                size: 8,
                colors: whatColor(),
                strokeColors: '#fff',
                strokeWidth: 3,
                hover: {
                    size: 10,
                    sizeOffset: 3
                  }
            },
            grid: {                 // 차트에 눈금선
                show: true,
            },
            yaxis:{                 // y축
                show: true,
                color: '#F0F0F0',
                min : 0,
                max : 100,
                tickAmount: 4,
                axisBorder: {
                    show: true,
                    color: '#F0F0F0',
                    offsetX: 0,
                    offsetY: 0
                },
                labels: {
                    style : {
                        colors : "#A2A2A6"
                    },
                    formatter: (value) => `${value}%`  
                }
            },
            xaxis:{     
                tickPlacement: 'between',            // x축
                labels:{            // x축 값
                    show:true,
                    style : {
                        colors : "#A2A2A6"
                    }
                },
                axisTicks:{         // x축 눈금선
                    show: false,
                },
                axisBorder: {       // x축 축선
                    show: false,
                },
                type : "date",
                categories: weekArray
            },
            tooltip: {              // 마우스를 갔다대면 나오는 정보창
                y: {
                    formatter: function(value) {
                        return value === 100 ? `완벽해요! : ${value}% 완료`: 
                        // 75 ~ 100
                        value >= 75 ? `거의 다 왔어요! : ${value}% 완료` :
                        // 50 ~ 75
                        value >= 50 ? `수고했어요! : ${value}% 완료` :
                        // 1 ~ 50
                        value >= 1 ? `조금만 힘을 내봐요! : ${value}% 완료` :
                        // 0
                        `오늘은 쉬어가는 날! : ${value}% 완료`
                      }     // 값을 넘겨주는 함수
                },
                x: {
                    show: false
                },
            },
            stroke: {               // line 스타일 설정
                curve: "smooth",    // line을 부드럽게 만들어줌
                width: 4,           // line 두께 설정
                colors : whatColor()
            },
        }}
        />
        </Container>
    )
}
export default MissionChart;

// locatstorage로 색 처리