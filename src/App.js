import {
  useHistory,
  useState,
  Route,
  Switch,
  Button,
  Container,
  Divider,
  Grid,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "./Util/Util";

import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Write from "./Article/Write";
import Detail from "./Article/Detail";
import List from "./Article/List";
import "./App.css";

function App() {
  const [list, setList] = useState();

  return (
    <div className="bodyWrap">
      <Header />
      <Route exact path="/" component={List}></Route>
      <Route exact path="/Detail/:id" component={Detail}></Route>
      <Route exact path="/write" component={Write}></Route>
      <Footer />
    </div>
  );
}

export default App;
