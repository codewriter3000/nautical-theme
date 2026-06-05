import * as React from 'react';
import subtractSrc from './subtract--large.svg';
import squareSrc from './square--outline.svg';
import closeSrc from './close.svg';
import debugStepIntoSrc from './debug--step-into.svg';
import debugStepOutSrc from './debug--step-out.svg';
import debugStepOverSrc from './debug--step-over.svg';

export const SubtractLargeIcon: React.FC = () =>
    <img src={subtractSrc} width={16} height={16} alt="Minimize" />;

export const SquareOutlineIcon: React.FC = () =>
    <img src={squareSrc} width={16} height={16} alt="Maximize" />;

export const CloseIcon: React.FC = () =>
    <img src={closeSrc} width={16} height={16} alt="Close" />;

export const DebugStepInto: React.FC = () =>
    <img src={debugStepIntoSrc} width={16} height={16} alt="Step Into" />;

export const DebugStepOut: React.FC = () =>
    <img src={debugStepOutSrc} width={16} height={16} alt="Step Out" />;

export const DebugStepOver: React.FC = () =>
    <img src={debugStepOverSrc} width={16} height={16} alt="Step Over" />;