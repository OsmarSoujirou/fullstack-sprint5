import React from 'react';

export interface FaceCategorie {
  id: number;
  label: string;
  link: string;
}

export interface FaceBreadcrumb {
  id: number;
  link: string;
  name: string;
}

export interface FaceCategoriesState {
  all: FaceCategorie[];
  current: FaceBreadcrumb[];
}

export interface FaceCategoriesContext {
  categories: FaceCategoriesState;
}

export const CategoriesContext = React.createContext<FaceCategoriesContext>(
  {} as FaceCategoriesContext,
);
