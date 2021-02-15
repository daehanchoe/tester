import React from "react";
import { list } from "../../setDate";
import { useTotalCount } from "../../QuestionContext";

export default function SituationComponent() {
  let totalCount = useTotalCount();
  let id = totalCount - 1;
  return (
    <p style={{ padding: "1rem", lineHeight: "140%" }}>
      <b style={{ fontWeight: "bold", paddingRight: "0.5rem" }}>
        tripsoda_tour{" "}
      </b>
      {list[id].content.tips.split("\n").map((line, _) => (
        <span key={_}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
}
