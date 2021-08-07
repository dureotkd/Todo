import {
  Editor,
  Button,
  Ref,
  useHistory,
  useRef,
  useState,
  Confirm,
  useParams,
} from "../Util/Util";

export default function () {
  const { id } = useParams();
  const row = JSON.parse(localStorage.getItem(`article_${id}`));

  return (
    <div className="textWrap">
      {row === null ? (
        "Opps.. Not Found"
      ) : (
        <div>
          <h1>
            {row.title}({row.writer})
          </h1>
          <p className="contentText">{row.contents}</p>
        </div>
      )}
    </div>
  );
}
