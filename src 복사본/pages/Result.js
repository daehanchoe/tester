// import React from 'react';
import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import Willy from '../assets/images/willy.png';
import Wigo from '../assets/images/wigo.png';
import MyComponent from '../component/te2';
import KakaoApi from '../component/kakaosharebutton';
// import answer from '../data/answer.json';
import answer from '../data/answer2.json';

export default function Result({ location }) {
    // layout 방식 : 태그를 직접하는 방식.


    useEffect(() => { // useEffact는 render가 완료된 이후 react에서 자체적인 실행을 함. -> javascript 구문, react 구문 아님.
        const script = document.createElement('script')
        script.src = 'http://developers.kakao.com/sdk/js/kakao.js'
        script.async = true // 동기화
        document.body.appendChild(script)
        return () => {
        document.body.removeChild(script)
        }
    }, [])

    const list = answer.answer;
    let tatste = 0; // 취향
    let interest = 0; // 관심사
    let re = 0;
    let cnt = 0;
    // const [willy, setWilly] = useState('');             // id 상태 초기화
    let willy = false; // 모험추구
    let wigo = false; // 감각추구
    let buddy = false; // 안정추구
    let tommy = false; // 경험추구

    let img1 = false;
    let img2 = false;
    
    for( let num of location.state.list){
        
        if(cnt % 2 !== 0)
            tatste = tatste + num;
        else if(cnt % 2 === 0)
            interest = interest + num;
        
        if(cnt == 14){
            if(num === 1){
                img1 = true;
            }
            else if(num === "2"){
                img2 = true;
            }
        }
        
        cnt++;
    }

    
    // 내외향성 // 개폐쇄성
    if(tatste < 0 && interest < 0)
    {
        console.log('안정추구');
        re = '안정추구';
        buddy = true;
    }
    else if(tatste < 0 && interest > 0)
    {
        console.log('경험추구');
        re = '경험추구';
        tommy = true;
    }
    else if(tatste > 0 && interest < 0)
    {
        console.log('감각추구');
        re = '감각추구';
        wigo = true;
    }
    else if(tatste > 0 && interest > 0)
    {
        console.log('모험추구');
        re = '모험추구';
        willy = true;
        // setWilly(1);
        // console.log(willy);
    }
    
    return (
    
        <Instagramback>
            <ConsultStyled>
           {re}
           
           {willy && <img src={Willy}/>}
           {wigo && <img src={Wigo}/>}
           {img1 && <div>액티비티</div>}
           {img2 && <div>쇼핑</div>}
           {/* {willy && <div style={{color : 'red'}}>아이디를 입력해주세요.</div>} */}
           {/* {willy && <img src={Willy}/>} */}
           {/* {willy && <img src={Willy}/>} */}

           <KakaoApi/>
        </ConsultStyled>
        </Instagramback>
       
    )

};
const Instagramback = styled.div`
background-image: linear-gradient(50deg, rgba(254,218,135,.7), rgba(237,163,203,.7));
    height: 100vh;
`;
const ConsultStyled = styled.div`
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    // background-image: linear-gradient(50deg, rgba(254,218,135,.7), rgba(237,163,203,.7));
    background-image:linear-gradient(60deg, rgb(238, 140, 89), rgb(188, 61, 166));
    height: 100vh;

    .logo {
        display: flex;
        justify-content: center;
        padding-top: 30px;
    }

    .kakaoicon {
        border : 0;
    }
`;