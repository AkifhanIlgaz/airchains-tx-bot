import { Web3 } from 'web3';

const RPC = 'http://IP:8545';
const httpProvider = new Web3.providers.HttpProvider(RPC);
const web3 = new Web3(httpProvider);

const wallet = web3.eth.accounts.wallet.add(
  'PRIV KEY'
);
let txCount = 0;

async function send() {
  try {
    const to = web3.eth.accounts.create();
    const val = (Math.random() * 0.1).toString();
    const amount = web3.utils.toWei(val, 'ether');

    await web3.eth.sendTransaction({
      from: wallet[0].address,
      to: to.address,
      value: amount,
    });

    console.log(`${val} tEVMOS successfully transferred to ${to.address}`);
    console.log(`Transaction Count: ${++txCount}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

function start(süre) {
  setInterval(() => {
    send();
  }, süre * 1000);
}

start(10);
