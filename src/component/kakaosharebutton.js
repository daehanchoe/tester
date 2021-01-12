import React from 'react'
import kakaoicon from '../assets/images/kakaoimage.png';
import styled from 'styled-components';

const Kakaostyle = styled.div`
  button {
    width : 50px;
    height : 50px;
    border : 0;
    background : white;
    outline: none;

  }
  img {
    width : 100%;
    // position : absolte;
  }
`;

const KakaoShareButton = () => {
  
  let check = 0;
  let url_p = "a";

  const createKakaoButton = () => {
  
    if(check !== 0) // == 값만 비교, === 타입과 값 비교
    {
        return;
    }

    check = 1;

    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init('528314a8da4cb592c76916878dd8af53');
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '딸기 치즈 케익',
          description: '#리액트 #카카오 #공유버튼',
          // imageUrl: '/Users/choedaehan/Desktop/trip/src/assets/images/kakaoimage.png', // i.e. process.env.FETCH_URL + '/logo.png'
          imageUrl: '/Users/choedaehan/Desktop/trip/src/assets/images/kakaoimage.png',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com', // window.location.href,
          },
        },
        social: {
            likeCount: 286,
            commentCount: 45,
            sharedCount: 845
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'http://localhost:3000/result',
              webUrl: 'http://localhost:3000/'+ url_p,
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
      })
    }
  }
  return (
    <Kakaostyle>
    <div className="kakaostyle">
      {/* Kakao share button */}
      <button id="kakao-link-btn" onClick={createKakaoButton}>
        <img src={kakaoicon} alt="kakao-share-icon" />
      </button>
    </div>
    </Kakaostyle>
  )
}
export default KakaoShareButton