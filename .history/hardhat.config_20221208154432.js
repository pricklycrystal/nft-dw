require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["diplomawork-nft-marketplace.infura-ipfs.io", "infura-ipfs.io"],
  },
};
