import { ReactComponent as NetworkImg } from './network.svg';
import './App.css';

function App() {
  return (
    <div className="app">
     <h1 className='company-logo'>Lagels</h1>
     <div className='center-content'>
      <h2 className='pitch-line'>Never leave your clients waiting for simple answers again.</h2>
      <p className='description'>
        Intuitive. Individualised. 
        Gather the information you need, manage and deliver accurate responses to queries, have more time to focus delivering the best legal service possible.
      </p>
      <form target="_blank" action="https://formsubmit.co/hello@lagels.com" method="POST">
        <div class="form-group">
          <input type="email" name="email" className="email-input" placeholder="yourname@firm.com" required/>
          <button type="submit" className='demo-request'>Request demo</button>
        </div>
      </form>
          
      <NetworkImg className='network-img'/>
     </div>
    </div>
  );
}

export default App;

