import * as React from 'react';
import subtractSrc from './subtract--large.svg';
import squareSrc from './square--outline.svg';
import closeSrc from './close.svg';

export const SubtractLargeIcon: React.FC = () =>
    <img src={subtractSrc} width={16} height={16} alt="Minimize" />;

export const SquareOutlineIcon: React.FC = () =>
    <img src={squareSrc} width={16} height={16} alt="Maximize" />;

export const CloseIcon: React.FC = () =>
    <img src={closeSrc} width={16} height={16} alt="Close" />;