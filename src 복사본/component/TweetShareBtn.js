import React from "react";
import icon from "../assets/images/tweet_icon.svg";
import { Helmet } from 'react-helmet';
import Willy from '../assets/images/willy.png';

export default function TweetShareBtn({ characater, tag, location }) {
  
    function open_tweet() {

        // <Helmet>
		// 	{/* <meta name="description" content={"description"} />
		// 	<meta name="keywords" content={"keywords"} />
		// 	<title>{"title"}</title>
		// 	<meta property="og:title" content={"title"} />
		// 	<meta property="og:image" content={Willy} />
		// 	<meta property="og:site_name" content="" />
		// 	<meta property="og:description" content={"description"} /> */}
        //     <meta name="twitter:url" content={"https://travelmbti.com/copy_result?char=" + "Willy" + "&tag=" + 2} />
		// 	<meta name="twitter:title" content="title" />
		// 	<meta name="twitter:description" content="description" />
		// 	<meta name="twitter:image" content={Willy} />
		// 	<meta name="twitter:card" content="summary" />
		
        // </Helmet>
    const url =
      "https://travelmbti.com/copy_result?char=" + "Willy" + "&tag=" + 2;
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
