require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food trap rifle spike equip give kangaroo army genre'; 
let testAccounts = [
"0x4ec026812e1d564c2f6a89783ceca83434e2d259d46e546f2938c54d9e98fa28",
"0x87d5acd4ca353ab7a79fd7780349255a56a3e52e68acd90b54450a8838ebe87e",
"0x8748d2e1ed3fbf574e2cadd40594d1e786af8cacde2a778a8858b344ec9ae1a0",
"0x34de1b47cb8ea9670c15f528f70b1024b5e26d9ef94fc6a4ba2d95e21ba7e7db",
"0xb5d7755e83820d65173d99016edc2ea1e67498fd7812ba177c49b0cdd771c471",
"0x71159c49a7e077071985fab11bcdeb6e78c2e33d65d040ed8308b9d1c8273f38",
"0x3f31fae39bf7f66bce97da170e41f815448af48bea681696033831d8a7d75053",
"0x8600ce2f04866e669201676ff84fa7afb36f12d28d4e6b194becfce55eb3d3ba",
"0x76fc9456edbd37aae911850c8dbff9a1bf91d6f3a695d6a37e1492ad486720e6",
"0xde01ec8282cae773c9a3d78c895a38dbca3a8bc8a5dc3ac19b62cebad7190952"
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
            version: '^0.8.0'
        }
    }
};

