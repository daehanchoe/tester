import axios from "axios";

// FIXME: fix domain
const url = "https://travelmbti.com:4000/save_result";
// const headers = {
//   // "Content-Type": "application/json;charset=utf-8",
//   // "Access-Control-Request-Headers": "content-type",
//   // "Access-Control-Request-Method": "Post",
//   // "Access-Control-Request-Origin": "*",
//   // Host: "118.67.132.128:8000",
//   // Origin: "https://travelmbti.com:80",
// };
export async function postResult(resultArray, tag, character, extrovert, open) {
  try {
    const response = await axios.post(
      url,
      {
        params: { resultArray, tag, character, extrovert, open },
      },
      {
        withCredentials: true,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
      }
    );
  } catch (e) {}
}
