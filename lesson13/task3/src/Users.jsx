import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import User from "./User";

function Users(props) {
  return (
    <>
      <div className="page__content">
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link href="/users/github">Github</Link>
          </li>
          <li className="navigation__item">
            <Link href="/users/facebook">Facebook</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/users/:userId" component={User}></Route>
          {/* <Route path="/users"> */}
            <span>Select a user please</span>
          {/* </Route> */}
        </Switch>
      </div>
    </>
  );
}

export default Users;


