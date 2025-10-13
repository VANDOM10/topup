import type { ReactElement } from 'react';

export interface Game {
  id: number;
  name: string;
  genre: string;
  imageUrl: string;
  topUpItems: TopUpItem[];
  paymentMethods: PaymentMethod[];
}

export interface TopUpItem {
  id: string;
  name: string;
  price: number;
  bonus?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  // Fix: Use ReactElement to solve for "Cannot find namespace 'JSX'" in a .ts file.
  icon: ReactElement;
}

export enum AlertType {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    INFO = 'INFO'
}

export interface AlertInfo {
    type: AlertType;
    message: string;
}
