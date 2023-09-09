import React from "react";
import { useNavigate } from "react-router-dom";
import useData from "../hooks/hooks.js";

function Shipment() {
  const { table } = useData();
  const navigate = useNavigate();

  function chg() {
    navigate("/form");
    console.log("I am running");
  }
  // Add this function to handle the edit button click
  function openAdminLoginForm() {
    navigate("/admin"); // Assuming this is the correct route for your AdminLoginForm
  }
  const date = new Date();
  const currentDate = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const fullDate = `0${currentDate}/0${currentMonth}/ ${currentYear}`;
  return (
    <section className="ship">
      <div className="new-dash">
        <button className="btn">Export</button>
        <button className="btn">Upload CSV</button>
        <button className="btn" onClick={chg}>
          new shipment{" "}
        </button>
        {/* Add the Edit button here */}
        <button className="btn" onClick={openAdminLoginForm}>
          Edit
        </button>
      </div>

      <div className="table">
        <table>
          <thead>
            <tr className="tr">
              <th>s.no</th>
              <th>Client no</th>
              <th>booking date</th>
              <th>amount</th>
              <th>brand</th>
              <th>tracking number</th>
              <th>Dispatch city</th>
              <th>tracking status</th>
              <th>consignee name</th>
              <th>consignee phone</th>
              <th>consignee addreas</th>
              <th>consige city</th>
            </tr>
          </thead>
          {table.map((items, index) => {
            return (
              <tr className="trrr">
                <td>{index + 1} </td> 
                <td>{`C001#00${index + 1}`}</td>
                <td>{fullDate}</td>
                <td>{items.amount}</td>
                <td>{items.brand}</td>
                <td>{items.trackingno}</td>
                <td>{items.dispatchCity}</td>
                <td>{items.trackingStatus}</td>
                <td>{items.consigneeName}</td>
                <td>{items.consigneePhoneNumber}</td>
                <td>{items.consigneeAddreas}</td>
                <td>{items.consigneeCity}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </section>
  );
}

export default Shipment ;
