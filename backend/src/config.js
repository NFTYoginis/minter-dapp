require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "NFTYoginis Goddess Collection";
const description = "Goddesses Collection to Inspire and Empower Holders in the Metaverse";
const baseUri = "ipfs://QmNy6ZJcBVPTPHLLxcqLy125R6MNf5uGWbSKzwg1FU9VST";

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 150,
    layersOrder: [
    { name: "Background" },
    { name: "Halo" }, 
    { name: "Base Skin Color" },
    { name: "Mouth" },
    { name: "Nose" },
    { name: "Eyes" },
    { name: "Hair Color" },
    { name: "Extra Arm" },
    { name: "Clothes" },
    { name: "Hair Accessories" },
    { name: "Accessories" },
    ],
    },   
    {
      growEditionSizeTo: 280,
      layersOrder: [
      { name: "Background" },
      { name: "Base Skin Color" },
      { name: "Mouth" },
      { name: "Nose" },
      { name: "Eyes" },
      { name: "Short Hair"},
      { name: "Extra Arm" },
      { name: "TShirts" },
      { name: "Chakra" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 570,
      layersOrder: [
      { name: "Background" },
      { name: "Halo" }, 
      { name: "Blue Base" },
      { name: "Blue Mouth" },
      { name: "Blue Nose" },
      { name: "Eyes" },
      { name: "Short Hair" },
      { name: "Clothes" },
      { name: "Chakra" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 1000,
      layersOrder: [
      { name: "Background" },
      { name: "Blue Base" },
      { name: "Blue Mouth" },
      { name: "Blue Nose" },
      { name: "Eyes" },
      { name: "Hair Color" },
      { name: "Blue Extra Arm" },
      { name: "TShirts" },
      { name: "Hair Accessories" },
      { name: "Chakra" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 1400,
      layersOrder: [
      { name: "Background" },
      { name: "Blue Base" },
      { name: "Blue Mouth" },
      { name: "Blue Nose" },
      { name: "Eyes" },
      { name: "Short Hair" },
      { name: "Blue Extra Arm Holding Nothing" },
      { name: "TShirts" },
      { name: "Chakra" },
      { name: "Hand Accessories" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 1800,
      layersOrder: [
      { name: "Background" },
      { name: "Halo" }, 
      { name: "Blue Base" },
      { name: "Blue Mouth" },
      { name: "Blue Nose" },
      { name: "Eyes" },
      { name: "Hair Color" },
      { name: "Blue Extra Arm Holding Nothing" },
      { name: "Clothes" },
      { name: "Hair Accessories" },
      { name: "Hand Accessories" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 2200,
      layersOrder: [
      { name: "Background" },
      { name: "Halo" }, 
      { name: "Green Base" },
      { name: "Green Mouth" },
      { name: "Green Nose" },
      { name: "Eyes" },
      { name: "Hair Color" },
      { name: "Clothes" },
      { name: "Hair Accessories" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 2800,
      layersOrder: [
      { name: "Background" },
      { name: "Halo" }, 
      { name: "Green Base" },
      { name: "Green Mouth" },
      { name: "Green Nose" },
      { name: "Eyes" },
      { name: "Short Hair" },
      { name: "Green Extra Arm" },
      { name: "TShirts" },
      { name: "Chakra" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 3000,
      layersOrder: [
      { name: "Background" },
      { name: "Green Base" },
      { name: "Green Mouth" },
      { name: "Green Nose" },
      { name: "Eyes" },
      { name: "Hair Color" },
      { name: "Green Extra Arm Holding Nothing" },
      { name: "TShirts" },
      { name: "Hair Accessories" },
      { name: "Hand Accessories" },
      { name: "Chakra" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 3400,
      layersOrder: [
      { name: "Background" },
      { name: "Green Base" },
      { name: "Green Mouth" },
      { name: "Green Nose" },
      { name: "Eyes" },
      { name: "Short Hair" },
      { name: "Green Extra Arm Holding Nothing" },
      { name: "Clothes" },
      { name: "Hand Accessories" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 4000,
      layersOrder: [
      { name: "Background" },
      { name: "Pale Base" },
      { name: "Pale Mouth" },
      { name: "Pale Nose" },
      { name: "Eyes" },
      { name: "Hair Color" },
      { name: "Clothes" },
      { name: "Hair Accessories" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 5000,
      layersOrder: [
      { name: "Background" },
      { name: "Halo" }, 
      { name: "Pale Base" },
      { name: "Pale Mouth" },
      { name: "Pale Nose" },
      { name: "Eyes" },
      { name: "Hair Color" },
      { name: "Pale Extra Arm" },
      { name: "TShirts" },
      { name: "Hair Accessories" },
      { name: "Chakra" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 5500,
      layersOrder: [
      { name: "Background" },
      { name: "Pale Base" },
      { name: "Pale Mouth" },
      { name: "Pale Nose" },
      { name: "Eyes" },
      { name: "Short Hair" },
      { name: "Pale Extra Arm Holding Nothing" },
      { name: "TShirts" },
      { name: "Chakra" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 5800,
      layersOrder: [
      { name: "Background" },
      { name: "Pale Base" },
      { name: "Pale Mouth" },
      { name: "Pale Nose" },
      { name: "Eyes" },
      { name: "Short Hair" },
      { name: "Pale Extra Arm Holding Nothing" },
      { name: "Clothes" },
      { name: "Hand Accessories" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 6000,
      layersOrder: [
      { name: "Background" },
      { name: "Brown Base" },
      { name: "Brown Mouth" },
      { name: "Brown Nose" },
      { name: "Eyes" },
      { name: "Hair Color" },
      { name: "Clothes", options: { blend: MODE.colorBurn, } },
      { name: "Hair Accessories" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 6300,
      layersOrder: [
      { name: "Background" },
      { name: "Halo" }, 
      { name: "Brown Base" },
      { name: "Brown Mouth" },
      { name: "Brown Nose" },
      { name: "Eyes" },
      { name: "Short Hair" },
      { name: "Brown Extra Arm" },
      { name: "TShirts" },
      { name: "Chakra" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 6500,
      layersOrder: [
      { name: "Background" },
      { name: "Brown Base" },
      { name: "Brown Mouth" },
      { name: "Brown Nose" },
      { name: "Eyes" },
      { name: "Hair Color" },
      { name: "Brown Extra Arm Holding Nothing", options: { blend: MODE.colorBurn, }  },
      { name: "TShirts" },
      { name: "Hair Accessories" },
      { name: "Chakra" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 7000,
      layersOrder: [
      { name: "Background" },
      { name: "Brown Base" },
      { name: "Brown Mouth" },
      { name: "Brown Nose" },
      { name: "Eyes" },
      { name: "Short Hair", options: { blend: MODE.luminosity, } },
      { name: "Brown Extra Arm Holding Nothing" },
      { name: "Clothes" },
      { name: "Hand Accessories" },
      { name: "Accessories" },
      ],
      },
      {
      growEditionSizeTo: 7500,
      layersOrder: [
      { name: "Background" },
      { name: "Base Skin Color" },
      { name: "Mouth" },
      { name: "Nose" },
      { name: "Eyes" },
      { name: "Short Hair" },
      { name: "Clothes", options: { blend: MODE.luminosity, } },
      { name: "Accessories" },
      ],
      },
      {
        growEditionSizeTo: 8000,
        layersOrder: [
      { name: "Background" },
      { name: "Base Skin Color", options: { blend: MODE.overlay, opacity: 0.7 }},
      { name: "Mouth", options: { blend: MODE.colorBurn, } },
      { name: "Nose", options: { blend: MODE.softLight, } },
      { name: "Eyes", options: { blend: MODE.luminosity, }},
      { name: "Hair Color", opacity: 0.5 },
      { name: "Extra Arm" },
      { name: "TShirts", options: { blend: MODE.colorBurn, } },
      { name: "Hair Accessories" },
      { name: "Accessories" },
      ],
      },
      {
        growEditionSizeTo: 8200,
        layersOrder: [
      { name: "Background" },
      { name: "Halo" }, 
      { name: "Base Skin Color", options: { blend: MODE.overlay, opacity: 0.3 }},
      { name: "Mouth", options: { blend: MODE.colorBurn, } },
      { name: "Nose", options: { blend: MODE.softLight, } },
      { name: "Eyes", options: { blend: MODE.luminosity, }},
      { name: "Short Hair", options: { blend: MODE.luminosity, }},
      { name: "Extra Arm" },
      { name: "Clothes", options: { blend: MODE.colorBurn, } },
      { name: "Accessories" },
      ],
      },
      {
        growEditionSizeTo: 8888,
        layersOrder: [
      { name: "Background" },
      { name: "Base Skin Color", options: { blend: MODE.overlay, opacity: 0.7 }},
      { name: "Mouth", options: { blend: MODE.colorBurn, } },
      { name: "Nose", options: { blend: MODE.softLight, } },
      { name: "Eyes", options: { blend: MODE.luminosity, }},
      { name: "Hair Color", opacity: 0.5 },
      { name: "Extra Arm" },
      { name: "TShirts", options: { blend: MODE.colorBurn, } },
      { name: "Hair Accessories" },
      { name: "Chakra", options: { blend: MODE.luminosity, } },
      { name: "Accessories" },
      ],
      },                           
];
const shuffleLayerConfigurations = true;
const debugLogs = false;
const format = {
  width: 1080,
  height: 1080,
  smoothing: false,
};

const extraMetadata = {
  creator: "GabeYoga",
  artist: 'Gabriel Azoulay & Kenjie Cuarto', 
  external_url: 'https://www.NFTYoginis.com',
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 10; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'NFTYoginis Goddess Collection';
const CONTRACT_SYMBOL = 'GDS';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xa23612723c5cbc52729d95F409B2E2bbd33f6859';
const TREASURY_ADDRESS = '0xa23612723c5cbc52729d95F409B2E2bbd33f6859';
const MAX_SUPPLY = 8888; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; // Minting price per NFT. Rinkeby = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-10-31T16:20:08+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-08-02T13:30:08+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xa23612723c5cbc52729d95F409B2E2bbd33f6859"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0xa23612723c5cbc52729d95F409B2E2bbd33f6859", "0xfe7c160823Ab5EFCE0b1e8366d1D2226E5067C80","0x0Cb8C6652Ce440FD89d427B7F7Cf64942Cb02B21"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Which Goddess will you get?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafkreifzbr2i2qyslniwz7nboyhrv7ik66la44fapj7lpr7nbydju4tc2u"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 1,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";
const uniqueDnaTorrance = 8888;
const preview = {
  thumbPerRow: 10,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "NFTYoginis Goddess Collection.png",
};

const preview_gif = {
  numberOfImages: 20,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "NFTYoginis Goddess Collection.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
