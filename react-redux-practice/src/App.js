import './App.css';
import CakeContainer from './Components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store';
import { useEffect } from 'react';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {

  useEffect(()=>{
    document.title = 'rahul'
  })
  return (
    <Provider store={store}>
       <div className="App">
       <UserContainer />
       {/* <ItemContainer cake/>
       <ItemContainer />
      <CakeContainer />
      <NewCakeContainer /> */}
      {/* <HooksCakeContainer /> */}
      {/* <IceCreamContainer /> */}
    </div>
    </Provider>
  );
}

export default App;
