/**
 * Generated using theia-extension-generator
 */
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { NauticalFrontendContribution } from './nautical-theme-contribution';
import { ContainerModule } from '@theia/core/shared/inversify';

export default new ContainerModule(bind => {
    bind(NauticalFrontendContribution).toSelf().inSingletonScope();
    bind(FrontendApplicationContribution).toService(NauticalFrontendContribution);
});
