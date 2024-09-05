import { ReactComponent as NetworkImg } from './network.svg';
import './App.css';
import logo from './logo.png';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "145356540",
          formId: "260748fb-8fe5-4ac3-9ddf-395619486e69",
          target: '#hubspotForm'
        });
      }
    };
    document.body.appendChild(script);
  }, []);

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

        <div id="hubspotForm"></div> {/* This is where your HubSpot form will render */}

        <NetworkImg className='network-img' />
      </div>
    </div>
  );
}

export default App;
