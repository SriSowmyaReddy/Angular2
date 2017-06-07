import{NgModule} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import{HomeComponent} from './home/home.component';
import{Page1Component} from './page1/page1.component';
import{Page2Component} from './page2/page2.component';
import{Page4Component} from './page4/page4.component';
import{Page5Component} from './page5/page5.component';

const routes: Routes = [
    {path:'', pathMatch: 'full', redirectTo:'home'},
    {path: 'home', component: HomeComponent},
    {path: 'page1', component: Page1Component},
    {path: 'page2', component: Page2Component},
    {path: 'page4', component: Page4Component},
    {path: 'page5', component: Page5Component}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{
    
}

export const routingComponents=[HomeComponent, Page1Component, Page2Component, Page4Component, Page5Component]