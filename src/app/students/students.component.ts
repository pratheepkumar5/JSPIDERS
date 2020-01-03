import { FormGroup, FormArray, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  constructor() {}
  form = new FormGroup({
    StudentsList: new FormArray([])
  });

  //get user
  get GetStudents() {
    return this.form.get("StudentsList");
  }

  addStudents(student) {
    // console.log(student.value);
    (this.GetStudents as FormArray).push(new FormControl(student.value));
  }

  remove(student) {
    (this.GetStudents as FormArray).removeAt(student);
  }

  // removeStudent(student: FormControl) {
  //   let index = (this.GetStudents as FormArray).controls.indexOf(student);
  //   (this.get)
  // }

  ngOnInit() {}
}
