import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRecoilState } from 'recoil';
import { isColor } from "../atoms";
import { useMatch } from "react-router-dom";

const Toggle = styled(motion.div)`
    width: 46px;
    height: 46px;
    background-color: ${props => props.theme.lineColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    position: fixed;
    right: 50px;
    bottom: 150px;
    z-index: 1000;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 22px;
`

const ToggleList = styled(motion.div)`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    position: fixed;
    right: 50px;
    bottom: 90px;
    padding: 7px 7px;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

const ColorBtn = styled.div`
    margin: 2px 0px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bgColor};

`
const Here = styled.div`
    background-color: ${props => props.bgColor};
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1.5px solid white;
`

function ThemeCustom () {
    const [click, setClick] = useState(false);
    const [color, setColor] = useRecoilState(isColor);
    const logInMatch = useMatch("/login");
    const signUpMatch = useMatch("/signup");
    const mainMatch = useMatch("/")
    const isLog = logInMatch || signUpMatch || mainMatch

    const onClick = () => {
        setClick(prev => !prev)
    }

    return (
        <>
            {isLog === null ? 
            click ?
                /* 색 커스터마이징 활성화 */
                    <ToggleList layoutId="toggle" onClick={onClick}>
                        <ColorBtn onClick={() => setColor(1)} bgColor="#F1A6A0" >
                            {color === 1 ? <Here bgColor="#F1A6A0" /> : null}
                        </ColorBtn>
                        <ColorBtn onClick={() => setColor(2)} bgColor="#FFC659">
                            {color === 2 ? <Here bgColor="#FFC659" /> : null}
                        </ColorBtn>
                        <ColorBtn onClick={() => setColor(3)} bgColor="#98D4BF">
                            {color === 3 ? <Here bgColor="#98D4BF" /> : null}
                        </ColorBtn>
                        <ColorBtn onClick={() => setColor(4)} bgColor="#92A4E3">
                            {color === 4 ? <Here bgColor="#92A4E3" /> : null}
                        </ColorBtn>
                        <ColorBtn onClick={() => setColor(5)} bgColor="#CAA9FF">
                            {color === 5 ? <Here bgColor="#CAA9FF" /> : null}
                        </ColorBtn>
                    </ToggleList>
                : 
                /* 색 커스터마이징 비활성화 */
                <Toggle layoutId="toggle" onClick={onClick}>
                    <Icon icon={faBrush}/>
                </Toggle> 
                : 
                null    
            }
        </>
    )
}

export default ThemeCustom;