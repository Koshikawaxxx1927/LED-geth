require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    local: {
      url: "http://localhost:8545",
    },
  },
  solidity: "0.8.18",
};
