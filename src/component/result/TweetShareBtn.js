import React from "react";
import icon from "../../assets/images/tweet_icon.svg";

export default function TweetShareBtn({ characater, tag, location }) {
  function open_tweet() {
    const url =
      "https://travelmbti.com/copy_result?char=" + characater + "&tag=" + tag;
    const tweet_url =
      "https://twitter.com/share?url=" +
      encodeURIComponent(url) +
      "&text=" +
      "코로나 이후 내가 가야할 여행지는? " +
      location +
      " ✈️ " +
      "테스트 결과 보러 가기 ➡️";
    window.open(tweet_url, "tweeter", "witdh=626,height=436");
  }

  return (
    <button onClick={open_tweet}>
      <img src={icon} alt="alt" />
    </button>
  );
}
