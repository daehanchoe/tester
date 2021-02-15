import React from "react";
import icon from "../../assets/images/kakao_icon.png";

const KakaoShareBtn = ({ character, tag, location }) => {
  let check = 0;
  const qu_url = "?char=" + character + "&tag=" + tag;

  const createKakaoButton = () => {
    if (check !== 0) {
      // == 값만 비교, === 타입과 값 비교
      return;
    }

    check = 1;

    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init("528314a8da4cb592c76916878dd8af53");
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: "코로나 이후 내가 가야할 여행지는? \n" + location + " ✈️",
          description: location + "! 함께 갈 준비 됐나요?",
          imageUrl:
            "https://travelmbti.com/share_img/" +
            character +
            "_" +
            tag +
            ".png",
          link: {
            mobileWebUrl: "https://travelmbti.com/copy_result" + qu_url,
            webUrl: "https://travelmbti.com/copy_result" + qu_url,
          },
        },
        buttons: [
          {
            title: "테스트결과 보러 가기",
            link: {
              webUrl: "https://travelmbti.com/copy_result" + qu_url,
              mobileWebUrl: "https://travelmbti.com/copy_result" + qu_url,
            },
          },
        ],
      });
    }
  };

  return (
    <button id="kakao-link-btn" onClick={createKakaoButton}>
      <img src={icon} alt="kakao-share-icon" />
    </button>
  );
};
export default KakaoShareBtn;
