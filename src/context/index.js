import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { getAllLocal, requestToken } from '../services';

const SiteContext = createContext();

const SiteProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectCombo, setSelectCombo] = useState();
  const [formPayment, setFormPayment] = useState();
  const [address, setAddress] = useState();
  const [checked, setChecked] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [messageRequest, setMessageRequest] = useState();

  const verifyLocalStorage = async () => {
    const { token, combo } = getAllLocal();
    setChecked(true);
    if (combo) setSelectCombo(combo);
    if (token) {
      setFetching(true)
      //dentro dessa função que fica a logica do verificar o token do usuario
      const dataUser = await requestToken(token);
      setUser(dataUser);
      setFetching(false)
    }
  }

  if (!checked && !fetching) {
    verifyLocalStorage();
  }

  const context = {
    address,
    setAddress,
    user,
    setUser,
    formPayment,
    setFormPayment,
    selectCombo,
    setSelectCombo,
    fetching,
    messageRequest,
    setMessageRequest,
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
