import {
  Editor,
  Button,
  Ref,
  useHistory,
  useRef,
  useState,
  Confirm,
  Input,
} from "../Util/Util";

export default function () {
  const editRef = useRef();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [stateIndex, setIndex] = useState(1);

  const saveArticle = () => {
    const contents = editRef.current.getInstance().getMarkdown();

    let index = makeIndex();

    setLocalArticle(index, contents);

    setOpen(true);
  };

  const makeIndex = () => {
    const localIndex = localStorage.getItem("index");
    const index = localIndex === null ? 1 : Number(localIndex) + 1;
    localStorage.setItem("index", index);
    setIndex(index);
    return index;
  };

  const setLocalArticle = (index, contents) => {
    const list = localStorage.getItem("list");
    const obj = JSON.stringify({
      id: index,
      title: title,
      contents: contents,
      writer: `${index}번째 지나가던 나그네`,
    });
    localStorage.setItem(`article_${index}`, obj);
  };

  const handleConfirm = () => {
    history.push({
      pathname: `/detail/${stateIndex}`,
    });

    setOpen(false);
  };
  const handleCancel = () => {
    const editor = document.querySelectorAll(".toastui-editor-contents")[1];

    while (editor.hasChildNodes()) {
      editor.removeChild(editor.firstChild);
    }

    document.querySelector("input").value = "";
    document.querySelector("input").focus();

    setOpen(false);
  };

  return (
    <div>
      <Input
        className="titleInput"
        label="Title"
        onChange={(event) => setTitle(event.target.value)}
        placeholder=""
        autoFoucs
      />

      <Editor
        previewStyle="vertical"
        height="700px"
        initialEditType="wysiwyg"
        placeholder="글쓰기"
        ref={editRef}
      />
      <Button
        className="w50p m-center"
        content="글쓰기"
        primary
        onClick={saveArticle}
      />
      <Confirm
        open={open}
        content="Success .. 더 글 쓰실래요 아니면 쓴거 보실래요 ??"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
}
