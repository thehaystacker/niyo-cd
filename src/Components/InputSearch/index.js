import React, { createRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import ListItem from "../ListItem";
import "./style.scss";

function InputSearch(props) {
  const { usersData } = props;

  const [query, setQuery] = useState("");
  const [isFocused, setFocus] = useState(false);
  const [list, setList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [cursor, setCursor] = useState(0);
  const elmResult = createRef();

  const cbFocusState = (_s) => {
    setFocus((prevState) => _s);
  };

  const cbOnchange = (e) => {
    if (!usersData) return;
    setQuery(e.target.value);
  };

  const cbKeyDown = (e) => {
    if (e.keyCode !== 38 && e.keyCode !== 40) {
      return;
    }
    if (e.keyCode === 38) {
      setCursor((prevCursor) => {
        if (prevCursor === 0) {
          return prevCursor;
        }
        return prevCursor - 1;
      });
    }
    if (e.keyCode === 40) {
      setCursor((prevCursor) => {
        if (prevCursor >= list.length - 1) {
          return prevCursor;
        }
        return prevCursor + 1;
      });
    }
  };

  useEffect(() => {
    if (query.length === 0) {
      setIsEmpty(false);
      setList([]);
      return;
    }

    const regex = new RegExp(query, "ig");

    let list = usersData.reduce((acc, user) => {
      if (user.items.filter((item) => regex.test(item)).length > 0) {
        user["isInItem"] = true;
        acc.push(user);
        return acc;
      } else if (
        regex.test(user.name) ||
        regex.test(user.id) ||
        regex.test(user.address) ||
        regex.test(user.pincode)
      ) {
        user["isInItem"] = false;
        acc.push(user);
        return acc;
      } else {
        return acc;
      }
    }, []);

    setIsEmpty(query.length > 0 && list.length === 0);
    setList(list);
    // eslint-disable-next-line
  }, [query]);

  return (
    <div className="wrap-inp-search">
      <div className={[`wrap-box`, isFocused ? `active` : ``].join(" ")}>
        <div className="wrap-input">
          <input
            type="text"
            aria-label="search users"
            placeholder="Search users by ID, address, name"
            onFocus={() => cbFocusState(true)}
            className="inp-search"
            onChange={cbOnchange}
            onKeyDown={cbKeyDown}
          />
        </div>
        {isEmpty ? (
          <div className="wrap-empty">
            <p>No user found</p>
          </div>
        ) : (
          <div className="wrap-results" ref={elmResult}>
            {list.map((item, i) => (
              <ListItem
                data={item}
                key={item.id}
                idx={i}
                query={query}
                active={cursor === i}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    usersData: state.app.usersData,
  };
};

export default connect(mapStateToProps)(InputSearch);
