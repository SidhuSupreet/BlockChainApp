// https://eth-goerli.alchemyapi.io/v2/V2P8YqiHkms3z-ZLYX-Ft374G7-oYsym

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli : {
      url: 'https://eth-goerli.alchemyapi.io/v2/V2P8YqiHkms3z-ZLYX-Ft374G7-oYsym',
      accounts: [ '736bb6ccf60652bba8074cd7e306ae91e50e61bec133d2a2cc9d6537eb477f59' ]
    }
  }
}