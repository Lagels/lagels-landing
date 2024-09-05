import { ReactComponent as NetworkImg } from './network.svg';
import './App.css';

function App() {
  return (
    <div className="app">
     <h1 className='company-logo'>Lagels</h1>
     <div className='center-content'>
      <h2 className='pitch-line'>The World's First Legal Process Database.</h2>
      <p className='description'>
        Revolutionising legal workflows with a transparent, AI-powered platform built on the world’s first open-source legal process database. Automate tasks, customise processes, and access trusted, data-driven insights to streamline legal work for both customers and professionals—anytime, anywhere.
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

