require('dotenv').config();
const pagarme = require('pagarme');
const Address = require('../model/address');
const User = require('../model/user');

const api_key = process.env.PAGARME_KEY;

async function getPlans(id) {
  const connection = await pagarme.client.connect({ api_key });
  if (id) {
    return connection.plans.find({ id });
  }
  return connection.plans.all({ count: 10, page: 1 });
}
function validadeCreditCard(card) {
  const { card_number, card_holder_name, card_expiration_date, card_cvv } = card;
  return card_number && card_holder_name && card_expiration_date && card_cvv;
}

async function creatingCard(creditCard) {
  const isValid = validadeCreditCard(creditCard);
  if (!isValid) throw new Error('card is not valid');
  const connection = await pagarme.client.connect({ api_key });
  const card = await connection.cards.create(creditCard);
  return card;
}

async function makeSubscriptions({ creditCardId, plan, user, address }) {
  const userData = User.getUser(user);
  const customer = { address, userData };
  const connection = await pagarme.client.connect({ api_key });
  const subscription = await connection.subscriptions.create({
    plan_id: plan,
    card_id: creditCardId,
    payment_method: 'credit_card',
    customer,
  });
  return subscription;
}

module.exports = { makeSubscriptions, getPlans, creatingCard };
