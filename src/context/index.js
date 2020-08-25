import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const SiteContext = createContext();

const SiteProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [formPayment, setFormPayment] = useState();

  const context = {
    user,
    setUser,
    formPayment,
    setFormPayment
  };

  return (
    <SiteContext.Provider value={context}>
      {children}
    </SiteContext.Provider>
  );
};

export { SiteContext, SiteProvider as Provider };

SiteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
