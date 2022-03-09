const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const { toChecksumAddress } = require("web3-utils");

// Owner work
const elements = [
  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  "0xB9a44C09a9D995F59b7DD56aafB70E2A2231A8DF",
].map((a) => toChecksumAddress(a));

const merkleTree = new MerkleTree(elements, keccak256, {
  hashLeaves: true,
  sortPairs: true,
});

const root = merkleTree.getHexRoot();
console.log({ root });

// Work for UI now
// check this address available or not in whitelist
const leaf = keccak256("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4");
const proof = merkleTree.getHexProof(leaf);

console.log({ proof: proof.length }, JSON.stringify(proof, null, 4));

// Smart contract call here for mint
const verified = merkleTree.verify(proof, leaf, root);
console.log({ verified });
