import logo from './logo.svg';
import './App.css';
import { init, AppEmbed, AuthType } from '@thoughtspot/visual-embed-sdk/react';

init({
  thoughtSpotHost: 'https://embed-1-do-not-delete.thoughtspotdev.cloud',
  authType: AuthType.None,
})

function App() {
  return (
    <div className="App">
      <div>This is TS Embed</div>
      <AppEmbed className='ts-embed' frameParams={{height: '100%', width: '100%'}}></AppEmbed>
    </div>
  );
}

export default App;
