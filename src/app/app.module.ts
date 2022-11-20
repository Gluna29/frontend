import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoapComponent } from './components/logoap/logoap.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { SocialComponent } from './components/social/social.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { HysComponent } from './components/hys/hys.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { EditAcercaDeComponent } from './components/acercade/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewproyComponent } from './components/proyectos/newproy.component';
import { EditproyComponent } from './components/proyectos/editproy.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoapComponent,
    HeaderComponent,
    BannerComponent,
    SocialComponent,
    AcercadeComponent,
    HysComponent,
    EducacionComponent,
    FooterComponent,
    ExperienciaComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent,
    NewproyComponent,
    EditproyComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
