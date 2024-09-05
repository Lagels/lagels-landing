import { ReactComponent as NetworkImg } from './network.svg';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="app">
      <div className="company-logo">
        <img src={logo} alt="Lagels Logo" style={{ height: '50px', marginRight: '10px' }} />
      </div>

      <div className='center-content'>
        <h2 className='pitch-line'>The World's First Legal Process Database.</h2>
        <p className='description'>
          Revolutionising legal workflows with a transparent, AI-powered platform built on the world’s first open-source legal process database. Automate tasks, customise processes, and access trusted, data-driven insights to streamline legal work for both customers and professionals—anytime, anywhere.
        </p>

        {/* Custom email form starts here */}
        <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="cdc19d27-6de8-4eca-8b1c-671a2971893c" />
          <input type="hidden" name="subject" value="New Contact Form Submission" />
          <input type="hidden" name="from_name" value="My Website" />

          <div className="form-group">
            <input className="email-input" type="email" name="email" placeholder="Your email" required />
            <button className="demo-request" type="submit">Request Demo</button>
          </div>
        </form>
        {/* Custom email form ends here */}

        <NetworkImg className='network-img' />
      </div>
    </div>
  );
}

export default App;

