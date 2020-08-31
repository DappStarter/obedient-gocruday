require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remain unknown gloom neck flip seek'; 
let testAccounts = [
"0x8464e1d0af74a459d9a5a4f2a7ccebe673edc28bf0f870b5bd0243e0a12a85cf",
"0x04bb3c94fa61f29f3e682142129b788b67a629fba0cf389c83813f8e5d09ddf1",
"0xfe964d45a6def9918f5b87bb751868f01f1ee82d92df249beea455818b67db32",
"0xb27d29e82b0ed84317526d0589c5befec0731bfc964b84efa1ca01cae9d89c2a",
"0x243684b74925052a50ec529e3aedb2ee04582ddddfd2fb9b4e6997429d60c34e",
"0x04d6aea89d753ffd330ef5b714f42dee9862a7d891f698ab5e21eae93371c5e0",
"0xa552095ffff92d5e34e6f31e8191ab89fc515cac924a88245b873af126ea73f8",
"0x9faebe3a03ce8717747686c3fcc9571fa2c92aea59c338747db40238c27e51dd",
"0x061c786c646c9cbfd86d5e97ddad3c4aca91c2067a8d97fdba27c08a8758af35",
"0xb8151388c5708e8113f99e2f6b33faf7853284e6dfc2c6de6f6d64f5c0b4058b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
