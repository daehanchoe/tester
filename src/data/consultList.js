const consultList = [
  {
    count: 1,
    type: "situation",
    content: {
      question: "드디어 코로나19가 종식되었어요!\n해외여행을 계획하는 당신!",
      text: "코로나-19 이후 내가 꼭 가야할 여행지.test",
      img: "situation_1.jpg",
      tips: "기획자의 꿀팁 🍯\n-\n동전지갑을 챙기세요 👛",
    },
  },
  {
    count: 2,
    type: "question",
    content: {
      question: "자 어디로 여행을 떠나볼까요?",
      multipleChoice: ["이왕이면 멀리 가고 싶어!", "가까운 곳으로 갈래!"],
    },
  },
  {
    count: 3,
    type: "question",
    content: {
      question: "여행계획은 어떻게 세울까요?",
      multipleChoice: [
        "비행기, 숙소만 잡아놓고 즉흥적인 여행을 해보자!",
        "계획이 반이지! 상세한 여행계획을 짤거야!",
      ],
    },
  },
  {
    count: 4,
    type: "situation",
    content: {
      question: "드디어 출국하는 날입니다. 인천공항에 도착한 당신!",
      text: "코로나-19 이후 내가 꼭 가야할 여행지.test",
      img: "situation_2.jpg",
      tips:
        "기획자의 꿀팁 🍯\n-\n인천공항엔 단돈 3천원으로\n이용할 수 있는 샤워실이 있어요! 🧖🧖\n위치는 제 1여객터미널 4층\n면세지역 25번 게이트부근입니다.",
    },
  },
  {
    count: 5,
    type: "question",
    content: {
      question:
        "너무 많은 사람들이 예약해서\n비행기 좌석이 오버부킹 됐어요.\n6시간 후 티켓으로 변경하는 대신\n더 좋은 항공사의 비즈니스 석으로\n업그레이드를 제안받았습니다.\n\n당신의 선택은?",
      multipleChoice: [
        "조금 늦게가면 어때~\n더 좋은 항공사와 비즈니스석이라니 개이득!",
        "계획에 차질이 생기는 건 싫어! 절대 포기 못해!",
      ],
    },
  },
  {
    count: 6,
    type: "question",
    content: {
      question:
        '비행기 옆 좌석에 앉은 또래의 한국인이\n 인사를 건넵니다.\n\n"혼자 여행 가세요?"',
      multipleChoice: [
        "심심하진 않겠다!\n대화를 하며 즐거운 시간을 보낸다.",
        "난 조용히 가고싶은데..\n대답만 하고 나만의 시간을 가진다.",
      ],
    },
  },
  {
    count: 7,
    type: "situation",
    content: {
      question: "목적지에 도착했어요! 여행의 첫날을 시작하는 당신!",
      text: "코로나-19 이후 내가 꼭 가야할 여행지.test",
      img: "situation_7.jpg",
      tips:
        "기획자의 꿀팁 🍯\n-\n도착 후 숙소에서 낮잠을 자고나면\n한결 긴장이 풀려요 🛌",
    },
  },
  {
    count: 8,
    type: "question",
    content: {
      question:
        "공항에서 숙소로 가는 길 15분을 해맸네요.\n길을 못찾겠어요! 어떻게 할까요?",
      multipleChoice: [
        "현지인이 더 잘 알겠지?\n지나가는 현지인에게 물어본다.",
        "구글은 모든 것을 알고있지.\n어떻게든 구글링을 통해 길을 찾는다.",
      ],
    },
  },
  {
    count: 9,
    type: "question",
    content: {
      question: "여행의 첫날, 당신은 무엇을 할까요?",
      multipleChoice: [
        "이제 뭐하지? 아무런 계획이 없어!\n그냥 발 닿는대로 돌아다닌다.",
        "너는 다 계획이 있구나?\n준비해온 계획서를 꺼낸다.",
      ],
    },
  },
  {
    count: 10,
    type: "situation",
    content: {
      question: "여행 중 투어를 신청하려 하는데... ",
      text: "코로나-19 이후 내가 꼭 가야할 여행지.test",
      img: "situation_10.jpg",
      tips: "기획자의 꿀팁 🍯\n-\n투어는 트립소다에서 예약하세요! 🥤",
    },
  },
  {
    count: 11,
    type: "question",
    content: {
      question: "당신이 투어 예약을 하려는 이유가 뭘까요?",
      multipleChoice: [
        "함께 여행하는 즐거움!\n다른 여행자들과 함께 여행해보고 싶어!",
        "여기는 혼자서 못가니까... 어쩔 수 없다!",
      ],
    },
  },
  {
    count: 12,
    type: "question",
    content: {
      question:
        "투어 후 뒷풀이가 예정되어있습니다.\n뒷풀이 장소는 어디가 좋을까요?",
      multipleChoice: [
        "시끌벅적 색다른 분위기의 펍!",
        "조용하고 익숙한 한인민박 옥상!",
      ],
    },
  },
  {
    count: 13,
    type: "situation",
    content: {
      question: "여행 중 점심을 먹으러 식당에 들어간 당신!",
      text: "코로나-19 이후 내가 꼭 가야할 여행지.test",
      img: "situation_13.jpg",
      tips: "기획자의 꿀팁 🍯\n-\n밥맛이 없을 땐 인도음식점을 가세요 🥘",
    },
  },
  {
    count: 14,
    type: "question",
    content: {
      question: "자리가 꽉 차서 합석을 해야합니다.\n당신의 선택은?",
      multipleChoice: [
        "뭐 상관없어. 같이 먹으면 좋지!",
        "난 혼자 먹고 싶은데..\n나가거나 자리가 날 때 까지 기다린다.",
      ],
    },
  },
  {
    count: 15,
    type: "question",
    content: {
      question: "응? 옆 테이블에서 닭머리 튀김을 건넸어요!",
      multipleChoice: [
        "오 신기하다! 경험삼아 먹어보자!",
        "으 싫어. 고맙지만 사양한다. 노땡큐~",
      ],
    },
  },
  {
    count: 16,
    type: "situation",
    content: {
      question: "즐겁게 여행한 당신!\n이제 일정이 얼마 남지 않았네요",
      text: "코로나-19 이후 내가 꼭 가야할 여행지.test",
      img: "situation_16.jpg",
      tips:
        "기획자의 꿀팁 🍯\n-\n귀국 전에 그 나라의 술을 꼭 사보세요 🍾🍷🍸🥃🍻",
    },
  },
  {
    count: 17,
    type: "question",
    content: {
      question:
        "항공사 이벤트로\n귀국 티켓 무료 연장이 가능하대요!\n\n연장할까요?",
      multipleChoice: ["당연하지! 일주일 연장해버려!", "이제 집에 가고싶은데?"],
    },
  },
  {
    count: 18,
    type: "question",
    content: {
      question: "여행의 마지막날이 다가왔어요!\n마지막 밤은 어떻게 보낼까요?",
      multipleChoice: [
        "자 모여! 오늘은 파티다!",
        "여행의 추억을 되돌아보자!\n오롯이 혼자만의 시간을 보낸다.",
      ],
    },
  },
  {
    count: 19,
    type: "situation",
    content: {
      question: "즐거운 여행 하셨나요?\n귀국해서 집에 돌아온 당신!",
      text: "코로나-19 이후 내가 꼭 가야할 여행지.test",
      img: "situation_19.jpg",
      tips:
        "기획자의 꿀팁 🍯\n-\n비행기 안에서 옆 사람과\n여행 이야기를 나누어보세요 💃🕺",
    },
  },
  {
    count: 20,
    type: "question",
    content: {
      question: "집에 돌아온 당신!\n친한 친구에게 전화가 왔어요!",
      multipleChoice: [
        "이래서 좋았고, 저래서 재밌었어!\n한참 여행썰을 푼다.",
        "어 잘다녀왔어. 난 지쳤어.. 짧게 통화를 끝낸다.",
      ],
    },
  },
  {
    count: 21,
    type: "question",
    content: {
      question: "짐이 한 보따리네요? 어떻게 하죠?",
      multipleChoice: [
        "아 몰라! 내일 정리할래!",
        "피곤해도 정리는 해야지!\n기념품부터 옷까지 싹 정리하고 쉰다.",
      ],
    },
  },
  {
    count: 22,
    type: "tag",
    content: {
      question: "관심사 태그를 선택해 주세요.\n(6개 중 하나를 선택해주세요)",
      multipleChoice: ["액티비티", "쇼핑", "맛집", "문화", "자연", "파티"],
    },
  },
];

export default consultList;
