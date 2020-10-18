import React, { useEffect } from "react";
import InputSearch from "./Components/InputSearch";
import "./App.scss";
import { connect } from "react-redux";
import { fetchUsersAction } from "./Store/App/Action";

function App(props) {
  useEffect(() => {
    props.fetchUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app-container">
      <InputSearch />
    </div>
  );
}

const mapDispatchToAction = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsersAction()),
  };
};

export default connect(null, mapDispatchToAction)(App);
