import { useEffect } from "react";
import {
  Editor,
  Button,
  Ref,
  useHistory,
  useRef,
  useState,
  Confirm,
  useParams,
  Comment,
  CommentAvatar,
  CommentContent,
  CommentGroup,
  Header,
  Form,
  CommentMetadata,
  CommentAuthor,
} from "../Util/Util";

export default function () {
  const { id } = useParams();
  const row = JSON.parse(localStorage.getItem(`article_${id}`));

  return (
    <div>
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
      <Comments />
    </div>
  );
}

function Comments() {
  const { id } = useParams();
  const [text, setText] = useState();
  const [replies, setReplies] = useState();

  useEffect(() => {
    const localReplies = Object.keys(localStorage);
    const tmpReplies = [];
    for (const reply of localReplies) {
      if (reply.indexOf(`reply_${id}`) === -1) continue;

      const localReply = JSON.parse(localStorage.getItem(reply));

      tmpReplies.push(localReply);
    }

    setReplies(tmpReplies);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const index = makeReplyIndex();

    const reply = {
      id: index,
      articleId: id,
      text: text,
      writer: "지나가던 나그네",
    };

    const cloneReplies = [...replies];
    cloneReplies.push(reply);
    setReplies(cloneReplies);
    localStorage.setItem(`reply_${id}_${index}`, JSON.stringify(reply));
  };

  const makeReplyIndex = () => {
    const index = localStorage.getItem("replyIndex");
    index === null
      ? localStorage.setItem("replyIndex", 1)
      : localStorage.setItem("replyIndex", Number(index) + 1);

    return localStorage.getItem("replyIndex");
  };

  return (
    <Comment.Group>
      <Header className="left" as="h3" dividing>
        Comments
      </Header>
      {replies &&
        replies.map((row, idx) => {
          return (
            <Comment>
              <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
              <Comment.Content>
                <Comment.Author as="a">{row.writer}</Comment.Author>
                <Comment.Text>{row.text}</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          );
        })}
      <Form reply onSubmit={handleSubmit}>
        <Form.TextArea onChange={(e) => setText(e.target.value)} />
        <Button
          className="w100p mb-12"
          content="댓글등록"
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    </Comment.Group>
  );
}
