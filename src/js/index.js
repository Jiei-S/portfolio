import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Skill from './skill';
import Works from './works';
import { ExternalLinks } from './util';

import '../css/index.scss';
import ImgProfile from '../img/profile.jpg';


const Header = () => (
  <header className='header'>
    <div className='header__inner'>
      <h1>JIEI&apos;S PORTFOLIO</h1>
      <ExternalLinks />
    </div>
  </header>
);


const Footer = () => (
  <footer className='footer'>
    <div className='footer__inner'>
      <ExternalLinks />
      <small>&copy; 2021 JIEI</small>
    </div>
  </footer>
);


const Profile = () => (
  <div className='profile'>
    <img src={ImgProfile}></img>
    <p className='profile__name'>Jiei</p>
    <p>Front-end Engineer / Back-end Engineer / Web Director</p>
  </div>
);


const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div className='skill-works__panel' hidden={value !== index}>
      {value === index && (
        <>
          {children}
        </>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.object,
  value: PropTypes.number,
  index: PropTypes.number
};


const Tab = ({ value, setValue }) => (
  <div className='skill-works__tab'>
    <div className={value === 0 ? 'active' : ''} onClick={() => setValue(0)}>
      <span>Skill</span>
    </div>
    <div className={value === 1 ? 'active' : ''} onClick={() => setValue(1)}>
      <span>Works</span>
    </div>
  </div>
);

Tab.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func
};


const SkillWorks = () => {
  const [value, setValue] = useState(0);

  return (
    <div className='skill-works'>
      <Tab
        value={value}
        setValue={setValue}
      />
      <TabPanel
        value={value}
        index={0}
      >
        <Skill />
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
      >
        <Works />
      </TabPanel>
    </div>
  );
};


export const App = () => (
  <>
    <Header />
    <Profile />
    <SkillWorks />
    <Footer />
  </>
);


ReactDOM.render(
  <App />,
  document.getElementById('app')
);