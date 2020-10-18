import React, { useEffect, useRef } from "react";
import "./style.scss";

function ListItem({ data, idx, query, active }) {
  const item = useRef(null);

  useEffect(() => {
    if (active) {
      item.current.scrollIntoView(false)
    }
  }, [active]);

  return (
    <div
      className={[`list-item`, active ? "active" : ""].join(" ")}
      ref={item}
      tabIndex={idx}
    >
      {data.id ? <h4>{data.id}</h4> : null}
      {data.name ? (
        <p>
          <em>{data.name}</em>
        </p>
      ) : null}
      {data.isInItem ? (
        <p className="txt-xs in-item">{`${query} found in items`}</p>
      ) : null}
      {data.address ? <p className="txt-xs">{data.address}</p> : null}
      {data.pincode ? <p className="txt-xs">{data.pincode}</p> : null}
    </div>
  );
}

export default ListItem;
