import React from "react";
import "./Catalog.css";
import ProductList from "./ProductList";
class Catalog extends React.Component {
  render() {
    let title = "Katalog z dnia " + new Date().toLocaleDateString();
    // let output =  <><div className = "Catalog"><h2> This is {title}</h2></div><div><h3>UWAGA ! </h3></div></>
    return (
      <>
        <div className="Catalog">
          <br />
          <h2> This is {title}</h2>
          {/* To jest komentarz */}
        </div>
        <div>
          <h3>UWAGA ! </h3>
          {
            // To tez jest komentarz
          }
          <ProductList />
        </div>
      </>
    );
  }
}

export default Catalog;
