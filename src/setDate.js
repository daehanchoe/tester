import consultList from "./data/consultList";

const list = consultList;

// 15
const questionsTags = list.filter((data) => data.type === "question" || "tag");

// length: 14
const questions = list.filter((data) => data.type === "question");

// length: 7
const situations = list.filter((data) => data.type === "situation");

// length:1
const tags = list.filter((data) => data.type === "tag");

// 22
const titles = list.map((data) => data.content.question);

const types = list.map((data) => data.type);

export { list, questions, situations, tags, questionsTags, titles, types };
