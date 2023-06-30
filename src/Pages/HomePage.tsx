import { useEthers } from "@usedapp/core";

export const HomePage = () => {
  const { account } = useEthers();
  return <div>Connected account: {account ? account : 'U are not connected to webpage'}</div>;
};
