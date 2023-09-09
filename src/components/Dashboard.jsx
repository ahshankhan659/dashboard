import React from "react";
import useData from "../hooks/hooks";

function Dashboard() {
  const { ship } = useData();

  function a() {
    console.log("i am working");
  }

  return (
    <section className="dashboard">
      <div className="dash">
        <div className="box">
          <input type="date" className="input" placeholder=" " />
        </div>
        <button className="btn" onClick={a}>
          apply filter
        </button>
        <button className="btn">reset</button>
      </div>
      <section className="main">
        <h3>Account Summary</h3>
        <div className="box-container">
          <div className="box">
            <div className="sub-box">
              <div className="sub-box-1">
                <i className="fas fa-truck"></i>
              </div>
              <div className="sub-box-2">
                <h4>Total Shipment</h4>
                <p>{ship}</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="sub-box">
              <div className="sub-box-1">
                <i class="fas fa-user-tie"></i>
              </div>
              <div className="sub-box-2">
                <h4>Delivered</h4>
                <p>0</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="sub-box">
              <div className="sub-box-1">
                <i class="fas fa-cube"></i>
              </div>
              <div className="sub-box-2">
                <h4>Return</h4>
                <p>0</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="sub-box">
              <div className="sub-box-1">
                <i class="fas fa-clipboard-list"></i>
              </div>
              <div className="sub-box-2">
                <h4>Total Shipment</h4>
                <p>0</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="sub-box">
              <div className="sub-box-1">
                <i class="fas fa-wallet"></i>
              </div>
              <div className="sub-box-2">
                <h4>COD</h4>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
