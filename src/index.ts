import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Timer } from './timer';

export { Timer } from './timer';

@NgModule({
    declarations: [Timer],
    exports: [Timer],
    imports: [CommonModule],
    entryComponents: [Timer]
})

export class TimerModule {
  static forRoot(): ModuleWithProviders { return { ngModule: Timer }; }
}