import { coursesComponent } from "./../../coueses/courses.component";
import { QspidersComponents } from "./jspiders.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeComponent } from "./employee/employee.component";
import { from } from "rxjs";

//import router Module first
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { UsersComponent } from "./users/users.component";
import { SimpleComponent } from "./simple/simple.component";
import { CustomDirective } from "./custom.directive";
import { ContactComponent } from "./contact/contact.component";
import { StudentsComponent } from "./students/students.component";
import { FormBuilderComponent } from "./form-builder/form-builder.component";
import { NewloginComponent } from "./newlogin/newlogin.component";

//to use RESTFULL api in angular import httpClientModule from @angular/common/http
import { HttpClientModule } from "@angular/common/http";
import { RestapiComponent } from "./restapi/restapi.component";
import { PlayerComponent } from "./player/player.component";

@NgModule({
  declarations: [
    AppComponent,
    QspidersComponents,
    coursesComponent,
    HeaderComponentComponent,
    LoginComponent,
    EmployeeComponent,
    RegisterComponent,
    HomeComponent,
    PagenotfoundComponent,
    UsersComponent,
    SimpleComponent,
    CustomDirective,
    ContactComponent,
    StudentsComponent,
    FormBuilderComponent,
    NewloginComponent,
    RestapiComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "restapi", component: RestapiComponent },
      { path: "player", component: PlayerComponent },
      { path: "users", component: UsersComponent },
      { path: "**", component: PagenotfoundComponent }
      // 404 page not found
    ])
  ], // register in app.module.file
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
