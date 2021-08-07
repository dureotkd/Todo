import {
  Editor,
  Button,
  Ref,
  useHistory,
  useRef,
  useState,
  Link,
  Confirm,
  useParams,
} from "../Util/Util";

export default function () {
  const history = useHistory();
  const keys = Object.keys(localStorage).splice(1);
  const list = [];

  for (const key of keys) {
    if (key.indexOf("article") == -1) continue;
    const localList = JSON.parse(localStorage.getItem(key));
    list.push(localList);
  }

  return (
    <div className="listWrap">
      {list &&
        list.map((row, idx) => {
          return (
            <div className="textBox">
              <ul>
                <li>
                  <Link to={`/detail/${row.id}`}>
                    {idx} : {row.title}
                  </Link>
                  <p>작성자 : {row.writer}</p>
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
}
