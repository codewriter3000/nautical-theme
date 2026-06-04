import { ContainerModule } from '@theia/core/shared/inversify';
import { ElectronMainApplicationContribution } from '@theia/core/lib/electron-main/electron-main-application';
import { NauticalMainContribution } from './nautical-main-contribution';

export default new ContainerModule(bind => {
    bind(NauticalMainContribution).toSelf().inSingletonScope();
    bind(ElectronMainApplicationContribution).toService(NauticalMainContribution);
});