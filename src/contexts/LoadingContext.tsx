import React from 'react';

interface FaceLoadingContext {
  addRequest: () => void;
  removeRequest: () => void;
  isLoading: () => boolean | void;
}

const LoadingContext = React.createContext<FaceLoadingContext>(
  {} as FaceLoadingContext,
);

export default LoadingContext;
