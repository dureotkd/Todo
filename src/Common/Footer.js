import {
  useState,
  List,
  Label,
  LabelDetail,
  Segment,
  Menu,
  MenuItem,
} from "../Util/Util";

export default function () {
  return (
    <Segment inverted className="FooterWrap">
      <Menu inverted secondary>
        <Label as="a" color="blue" image>
          <img src="https://react.semantic-ui.com/images/avatar/small/veronika.jpg" />
          Veronika
          <Label.Detail>Friend</Label.Detail>
        </Label>
        <List.Item
          icon="mail"
          content={
            <a href="mailto:dureotkd123@naver.com">ThankYou@naver.com</a>
          }
        />
      </Menu>
    </Segment>
  );
}
