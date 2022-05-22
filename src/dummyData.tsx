export interface IUser {
  id: Number;
  profilePicture: String;
  username: String;
}

export interface IPost {
  id: Number;
  desc: String;
  photo: string;
  date: String;
  userId: Number;
  like: Number;
  comment: Number;
}

export const Users: Array<IUser> = [
  {
    id: 1,
    profilePicture: "/person/1.jpeg",
    username: "ShinCode",
  },
  {
    id: 2,
    profilePicture: "/person/2.jpeg",
    username: "Yamaki",
  },
  {
    id: 3,
    profilePicture: "/person/3.jpeg",
    username: "Koga",
  },
  {
    id: 4,
    profilePicture: "/person/4.jpeg",
    username: "Matukubo",
  },
  {
    id: 5,
    profilePicture: "/person/5.jpeg",
    username: "Kikukawa",
  },
];

export const Posts: Array<IPost> = [
  {
    id: 1,
    desc: "コツコツの積み重ねが大事。",
    photo: "assets/post/1.jpeg",
    date: "5分前",
    userId: 1,
    like: 20,
    comment: 4,
  },
  {
    id: 2,
    desc: "MERNスタックが楽しすぎる",
    photo: "assets/post/2.jpeg",
    date: "2分前",
    userId: 2,
    like: 140,
    comment: 13,
  },
  {
    id: 3,
    desc: "ShinCodeさんの解説が分かりやすい。",
    photo: "assets/post/3.jpeg",
    date: "10分前",
    userId: 3,
    like: 230,
    comment: 29,
  },
  {
    id: 4,
    desc: "フルスタックエンジニアを目指す。",
    photo: "assets/post/4.jpeg",
    date: "1分前",
    userId: 4,
    like: 10,
    comment: 1,
  },
  {
    id: 5,
    desc: "定期的に散歩した方が生産性が上がる。",
    photo: "assets/post/5.jpeg",
    date: "1分前",
    userId: 5,
    like: 100,
    comment: 3,
  },
];