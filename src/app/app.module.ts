import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeroComponent } from './hero/hero.component';
import { NavService } from './service/nav.service';
import { AboutComponent } from './about/about.component';
import { FactsComponent } from './facts/facts.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    HeroComponent,
    AboutComponent,
    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogsComponent,
    TestimonialComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'project',component: ProjectsComponent},
    ])
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
