// Adding React import to provide access to the React namespace for ReactNode types.
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  target: string;
  icon: React.ReactNode;
}

export interface PricePackage {
  name: string;
  price: string;
  benefits: string[];
  isFeatured?: boolean;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}