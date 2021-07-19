import React from 'react';

export interface FaceFilterContext {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}
export const FilterContext = React.createContext<FaceFilterContext>(
  {} as FaceFilterContext,
);
