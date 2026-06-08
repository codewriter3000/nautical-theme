import { injectable } from '@theia/core/shared/inversify';
import { ElectronMainApplicationContribution } from '@theia/core/lib/electron-main/electron-main-application';

@injectable()
export class NauticalMainContribution implements ElectronMainApplicationContribution {
    onStart(): void {
        // Hook into window creation if needed
    }

    getTitleBarStyle(): 'hidden' | 'default' {
        return 'hidden';
    }
}