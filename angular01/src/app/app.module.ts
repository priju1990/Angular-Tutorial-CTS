
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { GrandParentComponent } from './family/grand-parent/grand-parent.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import {NotFoundComponent} from './not-found/not-found/not-found.component';
import { StringSortpipePipe } from './myPipes/string-sortpipe.pipe';
import { NumberSortPipe } from './myPipes/number-sort.pipe';
import { ConsumeLocalService1Component } from './consueService/consume-local-service1/consume-local-service1.component';
import { ConsumeLocalService2Component } from './consueService/consume-local-service2/consume-local-service2.component';
import { UsersAPIComponentComponent } from './remote/users-apicomponent/users-apicomponent.component';
import { UserDetailComponent } from './remote/user-detail/user-detail.component';
import { SearchPipePipe } from './myPipes/search-pipe.pipe';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ModelFormComponent } from './forms/model-form/model-form.component';
import { AnimationComponent } from './animation/animation/animation.component';
import { LandingpageComponent } from './bootstrap/landingpage/landingpage.component';
import { ProductlistpageComponent } from './ecom/productlistpage/productlistpage.component';

@NgModule({
  declarations: [
    AppComponent,
    GrandParentComponent,
    FatherComponent,
    MotherComponent,
    TaskManagerComponent,
    NotFoundComponent,
    StringSortpipePipe,
    NumberSortPipe,
    ConsumeLocalService1Component,
    ConsumeLocalService2Component,
    UsersAPIComponentComponent,
    SearchPipePipe,
    UserDetailComponent,
    TemplateFormComponent,
    ModelFormComponent,
    AnimationComponent,
    LandingpageComponent,
    ProductlistpageComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot ([

                 {  path :"",
                  redirectTo: 'task',
                  pathMatch:'full'
                },
                {  path :'family',
                  component: GrandParentComponent,
                  children:[
                      {  path :"",
                  redirectTo: 'father',
                  pathMatch:'full'
                },
                    {
                      path:'father',
                      component:FatherComponent
                    },
                    {
                       path:'mother',
                      component:MotherComponent
                    }

                  ]
                },
                 {  path :'task',
                  component: TaskManagerComponent
                },
                {  path :'consumeService1',
                  component: ConsumeLocalService1Component
                },
                  {  path :'consumeService2',
                  component: ConsumeLocalService2Component
                },
                {  path :'remoteData',
                  component: UsersAPIComponentComponent
                },
                {  path :'remoteData/:id',
                  component: UserDetailComponent
                },
                 {  path :'templateForm',
                  component: TemplateFormComponent
                },
                  {  path :'modelForm',
                  component: ModelFormComponent
                },
                {  path :'animate',
                  component: AnimationComponent
                },
                {  path :'bootstrap',
                  component: LandingpageComponent
                },
                {  path :'ecommerce',
                  component:ProductlistpageComponent
                },
                
                {
                  path:'**',
                  component:NotFoundComponent
                }

    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
