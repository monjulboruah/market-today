import "./App.css";
import TestHomePage from "./component/test-home/TestHomePage"; //Test
import TestFooter from "./component/test-footer/TestFooter"; //test
import { TestGraph } from "./component/test-graph/TestGraph"; //test
import Loader from "./component/loader/Loader";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GoldPrice from "./component/gold-price/GoldPrice";
import HomePageStock from "./component/stocks/homePage";
import TopGainers from "./component/stocks/top-gainer/topGainer";
import AllIndices from "./component/stocks/all-indices/allIndices";
import TopLosers from "./component/stocks/top-losers/topLosers";
import AdvancesAndDeclines from "./component/stocks/advances-and-declines/advanceDecline";
import FiftyTwoWeeksHigh from "./component/stocks/52-weeks-high/52WeeksHigh";
import FiftyTwoWeeksLow from "./component/stocks/52-weeks-low/FiftyTwoWeeksLow";
import TopValueStocks from "./component/stocks/top-value-stocks/topValueStocks";
import TopVolStocks from "./component/stocks/top-volume-stocks/TopVolumeStocks";
import EngNews from "./pages/EngNews";
import HindiNews from "./pages/HindiNews";
import IndexStocks from "./component/stocks/index-stocks/IndexStocks";
import CompanyData from "./component/stocks/get-company-data/CompanyData";
import SearchStock from "./component/stocks/searchStocks/SearchStock";
import GetCompanyData from "./component/stocks/searchStocks/GetCompanyData";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* <Sidebar /> */}

          <Switch>
            <Route path="/test-home" exact component={TestHomePage} />

            <Route path="/test-footer" exact component={TestFooter} />

            <Route path="/test-graph" exact component={TestGraph} />
            <Route path="/test-loading" exact component={Loader} />

            {/*







*/}

            <Route path="/gold-price" exact component={GoldPrice} />

            <Route path="/stocks" exact component={HomePageStock} />
            <Route path="/all-indices" exact component={AllIndices} />
            <Route path="/top-gainer" exact component={TopGainers} />
            <Route path="/top-loser" exact component={TopLosers} />
            <Route
              path="/advances-and-declines"
              exact
              component={AdvancesAndDeclines}
            />
            <Route path="/52-weeks-high" exact component={FiftyTwoWeeksHigh} />
            <Route path="/52-weeks-low" exact component={FiftyTwoWeeksLow} />
            <Route path="/top-value-stocks" exact component={TopValueStocks} />
            <Route path="/top-volume-stocks" exact component={TopVolStocks} />
            <Route path="/index-stocks" exact component={IndexStocks} />
            <Route path="/company-data" exact component={CompanyData} />
            <Route path="/search-stocks" exact component={SearchStock} />
            <Route
              path="/get-company-data/:symbol"
              component={GetCompanyData}
            />

            <Route path="/news-english" exact component={EngNews} />
            <Route path="/news-hindi" exact component={HindiNews} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
