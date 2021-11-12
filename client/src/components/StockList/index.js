import React from "react";

function StockList({ children }) {
  const stocklistRender = [`${children}1`, `${children}2`, `${children}3`, `${children}4`]
  return (
    <div class="collection">
      {stocklistRender.map(stock => <a href={`#${stock}`} class="collection-item">{stock}</a>)}
    </div>
  );
}

export default StockList;