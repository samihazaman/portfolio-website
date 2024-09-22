import { useState, useEffect } from 'react';

const ClientRenderComponent = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;  // Return nothing while rendering on the server
  }

  return children;  // Return children only on the client
};

export default ClientRenderComponent;
