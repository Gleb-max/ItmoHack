import React from 'react';

export type LoaderOverlayContextType = {
  switchLoaderOverlay: (newValue: boolean) => void;
};

const LoaderOverlayContext = React.createContext<LoaderOverlayContextType | null>(
  null,
)!;

const useLoader = () => React.useContext(LoaderOverlayContext)!;

export {LoaderOverlayContext, useLoader};
