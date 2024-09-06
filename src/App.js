import { ReactComponent as NetworkImg } from './network.svg'
import logo from './logo.png'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="company-logo">
        <img src={logo} alt="Lagels Logo" style={{ height: '50px', marginRight: '10px' }} />
      </div>

      <div className='center-content'>
        <h2 className='pitch-line'>Build your legal or tax processes once and never again.</h2>
        <p className='description'>
          We’ll create a unique, private URL for you to share with your customers. They’ll complete the process using our guided, AI-powered platform. And we’ll send you an output document for review.
        </p>

        <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="24f7b82a-1e0f-40e4-ae42-eac14de53d14" />
          <input type="hidden" name="subject" value="Demo Request" />
          {/* <input type="hidden" name="from_name" value="My Website" /> */}

          <div className="form-group">
            <input className="email-input" type="email" name="email" placeholder="Your email" required />
            <button className="demo-request" type="submit">Join the Waitlist</button>
          </div>
        </form>

        <NetworkImg className='network-img' />
      </div>
    </div>
  );
}

export default App;

