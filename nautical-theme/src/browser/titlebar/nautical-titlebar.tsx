import * as React from 'react';
import { SquareOutlineIcon, SubtractLargeIcon, CloseIcon } from './icons';
import { Ribbon } from './ribbon';

import './styles.css';
import { CommandService } from '@theia/core';

interface NauticalTitleBarProps {
  title: string;
  commandService: CommandService;
}

export class NauticalTitleBar extends React.Component<NauticalTitleBarProps> {
  render(): React.ReactNode {
    const { title, commandService } = this.props;

    return (
      <div
        className="nautical-titlebar"
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
      >
        <div className="nautical-titlebar__topbar">
          <div className="nautical-titlebar__title">{title}</div>

          <div
            className="nautical-titlebar__controls"
            style={{ WebkitAppRegion: 'no-drag' } as React.CSSProperties}
          >
            <button className="nautical-titlebar__button">
              <SubtractLargeIcon />
            </button>
            <button className="nautical-titlebar__button">
              <SquareOutlineIcon />
            </button>
            <button
              className="nautical-titlebar__button"
              onClick={() => window.close()}
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <Ribbon commandService={commandService} />
      </div>
    );
  }
}