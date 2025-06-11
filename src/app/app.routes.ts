import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';


export const routes: Routes = [
    {path: "", component : MainContentComponent},
    {path: "work-in-progress", component: WorkInProgressComponent},
    {path: "privacy-policy", component: PrivacyPolicyComponent},
    {path: "legal-notice", component: LegalNoticeComponent}
];
