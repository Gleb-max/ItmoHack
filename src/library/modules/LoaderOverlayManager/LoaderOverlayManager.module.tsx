import React from 'react';

//components
import {LoaderOverlay} from 'library/components/molecules/LoaderOverlay';

//context
import {LoaderOverlayContext, useLoader} from './LoaderOverlayManager.context';

//types
type LoaderProviderProps = {
  children?: React.ReactNode;
};

const LoaderProvider: React.FC<LoaderProviderProps> = ({children}) => {
  //state
  const [isLoading, setIsLoading] = React.useState(false);

  //callbacks
  const _switchLoaderOverlay = React.useCallback((newValue: boolean) => {
    setIsLoading(newValue);
  }, []);

  return (
    <LoaderOverlayContext.Provider
      value={{switchLoaderOverlay: _switchLoaderOverlay}}>
      {children}

      <LoaderOverlay isLoading={isLoading} fadeColor="#FFFFFF" />
    </LoaderOverlayContext.Provider>
  );
};

export {LoaderProvider, useLoader};
