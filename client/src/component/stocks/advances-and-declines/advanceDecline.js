import react from "react";
import { useState, useEffect } from "react";
import "../../../assets/css/table.css";
import axios from "axios";

function data(loading, adv) {
  return loading == true ? (
    ""
  ) : (
    <div className="main-data-container">
      <h2 className="table-heading">Advances and Declines of All Indices:</h2>

      <div className="center">
        <table>
          <tr id="header">
            <td>Index Name</td>
            <td>Advances</td>
            <td>Declines</td>
            <td>Unchanged</td>
          </tr>

          {adv.map((element, index) => {
            return (
              <tr id={index}>
                <td>{element.indice}</td>
                <td>{element.advances}</td>
                <td>{element.declines}</td>
                <td>{element.unchanged}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default function AdvancesAndDeclines() {
  const [adv, setAdv] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/nse/get_incline_decline", {
        crossdomain: true,
      })
      .then((response) => {
        setLoading(false);
        setAdv(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //console.log(adv);

  return data(loading, adv);
}
