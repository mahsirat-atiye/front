import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Togglingnews from './components/Togglingnews'

// import Listoftogglingnews from './components/Listoftogglingnews'
// import Coachchraracteristic from './components/Coachchraracteristic'
// import Listofplayers from './components/Listofplayers'

//import Footballplayerpage from './components/Footballplayerpage'
//import Footballstatistics from './components/Footballstatistics'
//import Basketballplayerpage from './components/Basketballplayerpage'
//import Timeline_ from './components/Timeline_'
//import Videoplayer from './components/Videoplayer'
//import Gamecharacteristics from './components/Gamecharacteristics'
//import Teampage from './components/Teampage'
//import Comparisontable_football from './components/Comparisontable_football'
//import Saved_and_main_players_table_football from './components/Saved_and_main_players_table_football'
//import Basketballgamepage from './components/Basketballgamepage'
import Newspage_mainpart from './components/Newspage_mainpart'
ReactDOM.render(<Newspage_mainpart/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();