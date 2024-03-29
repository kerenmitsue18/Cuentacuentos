import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatIconModule} from '@angular/material/icon'; 

/* Importar los componentes */
import { typeStoriesComponent } from './typeStories/typeStories.component';
import { formulary } from './formulary/formulary.component';
import { Characters } from './characters/character.component';
import { TopicComponent } from './topic/topic.component';
import { Stories } from './stories/stories.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LineBreakPipe } from 'src/models/PipeLine';

@NgModule({
  declarations: [
    AppComponent,
    typeStoriesComponent, 
    Characters,
    Stories,
    formulary,
    TopicComponent,
    HomeComponent,
    LineBreakPipe
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    ReactiveFormsModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ],
  bootstrap: [AppComponent]


})


export class AppModule { }
