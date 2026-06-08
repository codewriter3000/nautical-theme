import { injectable, inject } from '@theia/core/shared/inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { CommandService } from '@theia/core';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { NauticalTitleBar } from './titlebar/nautical-titlebar';

@injectable()
export class NauticalFrontendContribution implements FrontendApplicationContribution {

    @inject(CommandService)
    protected readonly commandService: CommandService;

    onStart(): void {
        const host = document.createElement('div');
        host.id = 'nautical-titlebar-host';
        document.body.prepend(host);

        const root = createRoot(host);
        root.render(
            React.createElement(NauticalTitleBar, {
                title: 'Nautical IDE',
                commandService: this.commandService
            })
        );
    }
}