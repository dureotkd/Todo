import { now } from "moment";
import { useEffect } from "react";
import { useState, Segment, Menu, MenuItem, Link } from "../Util/Util";

export default function () {
  const [active, setActive] = useState("list");
  const nowUrl = document.location.href;

  useEffect(() => {
    if (nowUrl.indexOf("detail") != -1) setActive("detail");
  }, []);

  return (
    <Segment inverted className="headWrap">
      <Menu inverted secondary>
        <Link to="/">
          <Menu.Item
            name="list"
            active={active === "list"}
            onClick={() => setActive("list")}
          />
        </Link>
        <Link to="/write">
          <Menu.Item
            name="write"
            active={active === "messages"}
            onClick={() => setActive("messages")}
          />
        </Link>
      </Menu>
    </Segment>
  );
}
