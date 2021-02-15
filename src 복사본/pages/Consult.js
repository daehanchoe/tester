import React, { useState } from 'react';
import data from '../data/data.json';
// import answer from '../data/answer.json';
import styled from 'styled-components';
import Question from '../component/Question2';
import Header from '../layouts/Header';

import logo from '../assets/images/tripsoda_icon.png'

export default function Consult({ history }) { // 함수형 컴포넌트의 프로퍼티로 pros를 객체를 넘겨준다. 그중 하나의 프로퍼티 이름이 history이다.
    const [result, setResult] = useState([])                         // result에게 데이터를 넘겨주려고 사용.
    const [count, setCount] = useState(1);     // 함수형 컴포넌트를 사용하는 방식.(hook) : count=useState(1), setCount는 밑에서 추가
    const list = data.list;
    const da = "";
    
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

            // axios.get('/cc').then(res =>{
            //     console.log(res.data)
            // });

            // $.ajax({
            //     url : '/cc',
            //     type : 'GET'

            // });
        }
    }

    return (
        <ConsultStyled>
            <Header count={count} total={list.length} />
            <div className="question-container">
                {questionList}
            </div>
            <div className="logo">
                <img src={logo}/>
            </div>
        </ConsultStyled>
    )
};

const ConsultStyled = styled.div`
    max-width: 752px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    
    .question-container {
        margin-top: 100px;
    }

    .logo {
        display: flex;
        justify-content: center;
        padding-top: 30px;
    }
`;