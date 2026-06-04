import * as React from 'react';
import { SquareOutlineIcon, SubtractLargeIcon, CloseIcon } from './icons';
import './styles.css';

interface Props {
    title: string;
}

export const NauticalTitleBar: React.FC<Props> = ({ title }) => {
    return (
        <div className="nautical-titlebar" style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}>
            <div className="nautical-titlebar__title">{title}</div>
            <div className="nautical-titlebar__controls" style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}>
                <button className="nautical-titlebar__button"><SubtractLargeIcon /></button>
                <button className="nautical-titlebar__button"><SquareOutlineIcon /></button>
                <button className="nautical-titlebar__button" onClick={() => window.close()}><CloseIcon /></button>
            </div>
        </div>
    );
};