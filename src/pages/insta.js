import React, { useState } from 'react';
import styled from 'styled-components';
import Heart_fill from '../assets/images/heart2.png';
import Heart from '../assets/images/heart1.png';
import Willy from '../assets/images/willy.png';
import data from '../data/data.json';
import Question from '../component/Question3';
import axios from 'axios';


export default function Result({ history }) {
    
    const [result, setResult] = useState([])                         // result에게 데이터를 넘겨주려고 사용.
    const [count, setCount] = useState(1);     // 함수형 컴포넌트를 사용하는 방식.(hook) : count=useState(1), setCount는 밑에서 추가
    const list = data.list;
    let [like_check, setLike] = useState(false);

    const questionList = list.map((data, index) => {
        return (
            <Question 
                key={index} // react에서 유니크키로 컴포넌트를 찾는다. 그때 사용하는 값.
                onClick={handleClick} // 클릭 이벤트
                title={data} // 문제 string
                index={index + 1} // 문항번호
                count={count} // 현재 문항번호(현재 위치)
            />            
        );
    });

    function handleClick(i, r) {
        result[i - 1] = r;
        setResult(result.concat());
        setCount(count + 1);

        if (list.length === i) {

            history.push({
                pathname: '/a',
                state: { list: result }
            });
        }
    }
    
    function handleClick() {
        if(like_check === true){
            console.log("ssss");
            setLike(false);
        }
        else{
            console.log("aaaaa");
            setLike(true);
        }
            
    }

    function search_data(){
        // const response = await axios.get(
        axios.get('http://13.209.8.68:3000/getData').then(res =>{
                console.log(res.data)
        });
    }

    return (
    
        <Instagramback>
            <Header>
                <span className="circle">
                    <img className="profile" src={Willy}/>
                </span>
            </Header>
            <Body>
                <button onClick={search_data}></button>
                <a href="http://13.209.8.68:3000/getData">sss</a>
            </Body>
            <Bottom>
                <div className="heart">
                    {like_check && <img src={Heart_fill} onClick={handleClick}/>}
                    {!like_check && <img src={Heart} onClick={handleClick}/>}
                    {/* {!like_check && <img src={Heart}/>} */}
                    {/* <img className="heart" src={Heart_fill} onClick={handleClick}/> */}
                    {/* <img className="heart2" src={Heart}/> */}
                </div>
            </Bottom>
        </Instagramback>
       
    )

};

const Instagramback = styled.div`
    background-image: linear-gradient(50deg, rgba(254,218,135,.7), rgba(237,163,203,.7));
    height: 100vh;

    .li {
        font-family: Billabong;
    }
`;

const Header = styled.div`
    border-top: solid 1px;
    background : white;
    max-width: 500px;
    margin: 0 auto;
    height : 72px;
    top : 20%;
    left : 50%;
    transform : translate(0%,230%); // 자기 자신의 크기의 %만큼 왼쪽과 위쪽으로 이동.

    .circle {
        width : 42px;
        height : 42px;
        border : 1px solid #111; // solid는 선의 모양을 표현
        border-radius : 100%; // 윤곽선 표현 100%애 가까울 수록 둥글어진다. px로도 사용가능
        display : block;
        position : absolute;
        top : 15px;
        left : 20px;
    }

    .profile {
        width : 100$;
        height : 100%;
        position : absolute;
        top : 0%;
        left : 15%;
        // transform : translate(50%,50%); // 자기 자신의 크기의 %만큼 왼쪽과 위쪽으로 이동.
    }
`;

const Body = styled.div`
    border-top: solid 1px;
    background : white;
    max-width: 500px;
    margin: 0 auto;
    height : 300px;
    top : 20%;
    left : 50%;
    transform : translate(-0%,55%); // 자기 자신의 크기의 %만큼 왼쪽과 위쪽으로 이동.
`;


const Bottom = styled.div`
    background : white;
    max-width: 500px;
    margin: 0 auto;
    height : 72px;
    top : 20%;
    left : 50%;
    transform : translate(0%,229%); // 자기 자신의 크기의 %만큼 왼쪽과 위쪽으로 이동.

    .heart {
        max-width : 24px;
        height : 24px;
        position : absolute;
    }


    .heart2 {
        max-width : 24px;
        height : 24px;
        position : absolute;
        top : 20%;
        left : 50%;
        transform : translate(0%,0%); // 자기 자신의 크기의 %만큼 왼쪽과 위쪽으로 이동.
        
    }
`;