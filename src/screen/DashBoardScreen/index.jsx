import "./dashboard.css";
import { SideBar } from "../../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
    return <h1>Dashboard</h1>;
  };
  const Content = () => {
    return <h1>Content</h1>;
  };
  const Design = () => {
    return <h1>Design</h1>;
  };
  const Courses = () => {
    return <h1>Content/Courses</h1>;
  };
  const Video = () => {
    return <h1>Content/Videos</h1>;
  };

const DashBoardScreen = () => {
    const [inactive, setInactive] = useState(false);

    return (
        <>
      <Router>
        <SideBar onCollapse={(inactive) => {
          setInactive(inactive)
        }}/>
        <div className={`container1 ${inactive ? "inactive" : ""}`}>
        <Switch>
          <Route exact path={"/"}>
            <Dashboard />
          </Route>
          <Route exact path={"/content"}>
            <Content />
          </Route>
          <Route path={"/design"}>
            <Design />
          </Route>
          <Route path={"/content/videos"}>
            <Video />
          </Route>
          <Route path={"/content/courses"}>
            <Courses />
          </Route>
        </Switch>
        </div>
      </Router>
    </>
    )
}

export default DashBoardScreen
