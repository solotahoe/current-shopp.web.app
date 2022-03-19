import './App.css';
import Home from './screens/Home'
import {BrowserRouter as Router,Switch, Route  } from 'react-router-dom';
import Register from './screens/Register'
import Banklogs from './screens/banklogs';
import ChaseBankLogs from './screens/chaseBankLogs';
import Addfund from './screens/addfund';
import Support from './screens/support';
import Boa from './screens/Boa';
import SuntrustBank from './screens/Suntrustbank';
import Citibank from './screens/Citibank';
import Tdbank from './screens/Tdbank';
import HsbcBankLogs from './screens/Hsbcbank';
import TdbankCanada from './screens/TdbankCanadabank';
import RbcBankCanada from './screens/RbcbankCanada';
import BmoBankCanada from './screens/BmobankCanada';
import ScotiaBankCanada from './screens/ScotiaBankCanada';
import CibcBankCanada from './screens/CibcBankCanada';
import HsbcBankUklogs from './screens/Hsbcbankuk';
import LolydsBankUk from './screens/LolydBankUk';
import BarclaysBankUk from './screens/BarclaysBankUk';
import RoyalBankUk from './screens/RoyalBankUk';
import StandardChartedBankUK from './screens/StandardCharterdk';
import Purchased from './screens/purchased';
import Downloads from './screens/download';

function App() {
  return (
    <Router>
        <div className="app">
          <Switch>
              <Route path="/"  exact={true} component={Home}/>
              {/* <Route path="/register"   exact={true} component={Register}/> */}
              <Route path="/home"   exact={true} component={Banklogs}/>
              <Route path="/chasebankLogs"   exact={true} component={ChaseBankLogs}/>
              <Route path="/bankofamericalogs"   exact={true} component={Boa}/>
              <Route path="/citibanklogs"   exact={true} component={Citibank}/>
              <Route path="/tdbanklogs"   exact={true} component={Tdbank}/>
              <Route path="/hsbcbanklogs"   exact={true} component={HsbcBankLogs}/>
              <Route path="/suntrustbanklogs"   exact={true} component={SuntrustBank}/>
              <Route path="/tdbankcanadalogs"   exact={true} component={TdbankCanada}/>
              <Route path="/rbcbankcanadalogs"   exact={true} component={RbcBankCanada}/>
              <Route path="/bmobankcanadalogs"   exact={true} component={BmoBankCanada}/>
              <Route path="/scotiabankcanadalogs"   exact={true} component={ScotiaBankCanada}/>
              <Route path="/cibcbankcanadalogs"   exact={true} component={CibcBankCanada}/>
              <Route path="/hsbcbankuklogs"   exact={true} component={HsbcBankUklogs}/>
              <Route path="/lolydsbankuklogs"   exact={true} component={LolydsBankUk}/>
              <Route path="/barclaysbankuklogs"   exact={true} component={BarclaysBankUk}/>
              <Route path="/royalbankuklogs"   exact={true} component={RoyalBankUk}/>
              <Route path="/standardcharteredbankuklogs"   exact={true} component={StandardChartedBankUK}/>
              <Route path="/addfunds"   exact={true} component={Addfund}/>
              <Route path="/support"   exact={true} component={Support}/>
              <Route path="/purchased"   exact={true} component={Purchased}/>
              <Route path="/downloads"   exact={true} component={Downloads}/>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
