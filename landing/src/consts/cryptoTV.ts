import firstNoise from "../../public/BlockchainServicePage/HeadImage/noise-1.png";
import secondNoise from "../../public/BlockchainServicePage/HeadImage/noise-2.png";
import firstCrypto from "../../public/BlockchainServicePage/HeadImage/crypto-1.svg";
import secondCrypto from "../../public/BlockchainServicePage/HeadImage/crypto-2.svg";
import thirdCrypto from "../../public/BlockchainServicePage/HeadImage/crypto-3.svg";
import fourthCrypto from "../../public/BlockchainServicePage/HeadImage/crypto-4.svg";
import fifthCrypto from "../../public/BlockchainServicePage/HeadImage/crypto-5.svg";
import sixthCrypto from "../../public/BlockchainServicePage/HeadImage/crypto-6.svg";
import seventhCrypto from "../../public/BlockchainServicePage/HeadImage/crypto-7.svg";
import eighthCrypto from "../../public/BlockchainServicePage/HeadImage/crypto-8.svg";

const noiseImages = [
    secondNoise.src,
    firstNoise.src,
    secondNoise.src,
    firstNoise.src,
];

export const cryptoTVImages = [
    ...noiseImages,
    eighthCrypto.src,
    ...noiseImages,
    seventhCrypto.src,
    ...noiseImages,
    sixthCrypto.src,
    ...noiseImages,
    fifthCrypto.src,
    ...noiseImages,
    fourthCrypto.src,
    ...noiseImages,
    thirdCrypto.src,
    ...noiseImages,
    secondCrypto.src,
    ...noiseImages,
    firstCrypto.src,
];