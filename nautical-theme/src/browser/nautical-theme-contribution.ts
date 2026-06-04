// src/browser/nautical-theme-contribution.ts (no ElectronWindowService now)
import { injectable } from '@theia/core/shared/inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { NauticalTitleBar } from './titlebar/nautical-titlebar';

@injectable()
export class NauticalFrontendContribution implements FrontendApplicationContribution {
    onStart(): void {
        const host = document.createElement('div');
        host.id = 'nautical-titlebar-host';
        document.body.prepend(host);

        const root = createRoot(host);
        root.render(
            React.createElement(NauticalTitleBar, { title: 'Nautical IDE' })
        );
    }
}