import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./homePage.css";

function HomePage(props) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/get_market_status", {
        crossdomain: true,
      })
      .then((response) => {
        setStatus(response.data.status);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <p>Current Market Status: {status}</p>
      </div>
      <div class="cards-list">
        <div class="card 1">
          <div class="card_image">
            {" "}
            <img src="https://images.unsplash.com/photo-1607459726451-44808af96022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" />{" "}
          </div>
          <div class="card_title title-white">
            <Link to="/top-gainer" style={{ color: "black" }}>
              <p>Top 10 Gainer</p>
            </Link>
          </div>
        </div>

        <div class="card 2">
          <div class="card_image">
            <img src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
          </div>
          <div class="card_title title-white">
            <Link to="/all-indices" style={{ color: "black" }}>
              <p>All Indices</p>
            </Link>
          </div>
        </div>

        <div class="card 3">
          <div class="card_image">
            <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" />
          </div>
          <div class="card_title">
            <Link to="/top-losers" style={{ color: "black" }}>
              <p>Top 10 Losers</p>
            </Link>
          </div>
        </div>
      </div>
      <div class="cards-list">
        <div class="card 1">
          <div class="card_image">
            <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
          </div>
          <div class="card_title title-black">
            <Link to="/advances-and-declines" style={{ color: "black" }}>
              <p>Advances and Declines</p>
            </Link>
          </div>
        </div>

        <div class="card 2">
          <div class="card_image">
            {" "}
            <img src="https://leverageedu.com/blog/wp-content/uploads/2020/02/Stock-Market-Courses.jpg" />{" "}
          </div>
          <div class="card_title title-white">
            <Link to="/52-weeks-high" style={{ color: "black" }}>
              <p>52 Weeks High</p>
            </Link>
          </div>
        </div>

        <div class="card 3">
          <div class="card_image">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Stock_market_crash_%282020%29.svg/1200px-Stock_market_crash_%282020%29.svg.png" />
          </div>
          <div class="card_title title-white">
            <Link to="/52-weeks-low" style={{ color: "black" }}>
              <p>52 Weeks Low</p>
            </Link>
          </div>
        </div>
      </div>
      <div class="cards-list">
        <div class="card 1">
          <div class="card_image">
            <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
          </div>
          <div class="card_title title-black">
            <Link to="/top-value-stocks" style={{ color: "black" }}>
              <p>Top Value Stocks</p>
            </Link>
          </div>
        </div>

        <div class="card 2">
          <div class="card_image">
            {" "}
            <img src="https://leverageedu.com/blog/wp-content/uploads/2020/02/Stock-Market-Courses.jpg" />{" "}
          </div>
          <div class="card_title title-white">
            <Link to="/top-volume-stocks" style={{ color: "black" }}>
              <p>Top Volume Stocks</p>
            </Link>
          </div>
        </div>

        <div class="card 3">
          <div class="card_image">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Stock_market_crash_%282020%29.svg/1200px-Stock_market_crash_%282020%29.svg.png" />
          </div>
          <div class="card_title title-white">
            <Link to="/top-value-stocks" style={{ color: "black" }}>
              <p>Top Value Stocks</p>
            </Link>
          </div>
        </div>
        <div class="cards-list">
          <div class="card 1">
            <div class="card_image">
              <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
            </div>
            <div class="card_title title-black">
              <Link to="/advances-and-declines" style={{ color: "black" }}>
                <p>Advances and Declines</p>
              </Link>
            </div>
          </div>

          <div class="card 2">
            <div class="card_image">
              {" "}
              <img src="https://leverageedu.com/blog/wp-content/uploads/2020/02/Stock-Market-Courses.jpg" />{" "}
            </div>
            <div class="card_title title-white">
              <Link to="/52-weeks-high" style={{ color: "black" }}>
                <p>52 Weeks High</p>
              </Link>
            </div>
          </div>

          <div class="card 3">
            <div class="card_image">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Stock_market_crash_%282020%29.svg/1200px-Stock_market_crash_%282020%29.svg.png" />
            </div>
            <div class="card_title title-white">
              <Link to="/top-value-stocks" style={{ color: "black" }}>
                <p>Top Value Stocks</p>
              </Link>
            </div>
          </div>
        </div>
        <div class="cards-list">
          <div class="card 1">
            <div class="card_image">
              <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
            </div>
            <div class="card_title title-black">
              <Link to="/advances-and-declines" style={{ color: "black" }}>
                <p>Advances and Declines</p>
              </Link>
            </div>
          </div>

          <div class="card 2">
            <div class="card_image">
              {" "}
              <img src="https://leverageedu.com/blog/wp-content/uploads/2020/02/Stock-Market-Courses.jpg" />{" "}
            </div>
            <div class="card_title title-white">
              <Link to="/top-value-stocks" style={{ color: "black" }}>
                <p>Top Value Stocks</p>
              </Link>
            </div>
          </div>

          <div class="card 3">
            <div class="card_image">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Stock_market_crash_%282020%29.svg/1200px-Stock_market_crash_%282020%29.svg.png" />
            </div>
            <div class="card_title title-white">
              <Link to="/top-value-stocks" style={{ color: "black" }}>
                <p>Top Value Stocks</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
