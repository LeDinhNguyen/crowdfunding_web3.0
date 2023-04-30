import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";

function NFTDetails() {
  // Connect to your NFT contract
  const { contract } = useContract("{{contract_address}}");
  // Load the NFT metadata from the contract using a hook
  const { data: nft, isLoading, error } = useNFT(contract, "0");

  // Render the NFT onto the UI
  if (isLoading) return <div>Loading...</div>;
  if (error || !nft) return <div>NFT not found</div>;

  return <ThirdwebNftMedia metadata={nft.metadata} />;
}
export default NFTDetails;