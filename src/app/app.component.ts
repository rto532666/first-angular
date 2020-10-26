import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  // disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;
  // @HostListener('input') oninput() {

  //   if (this.form.valid) {
  //     this.disabledSubmitButton = false;
  //   }
  // }   
  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     b_name: ['', Validators.required],
  //     f_name: ['', Validators.required],
  //     l_name: ['', Validators.required],
  //     loan_amount: ['', Validators.required],
  //     email_id: ['', Validators.compose([Validators.required, Validators.email])],
  //     mob_no: ['', Validators.required],
  //     city:['', Validators.required],
  
      
  //   }); 
  //  }
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.form = this.fb.group({
       
       business_name: ['', Validators.required],
       loan_amount: ['', Validators.required ],
       f_name: ['', Validators.required],
       l_name:['', Validators.required],
       mob_no:['', Validators.required],
       email: ['', Validators.compose([Validators.required, Validators.email])],
       city:['',Validators.required],
       primary_dd:['', Validators.required],
       income_dd:['', Validators.required],
       itreturn_dd:['', Validators.required],
       exloan_dd:['', Validators.required],
      //  check_1:[false, Validators.requiredTrue],
       check_2:[false, Validators.requiredTrue],
       check_3: [false, Validators.requiredTrue]
    });
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_bahiu6n', e.target as HTMLFormElement, 'user_oXO1Tpnh5wNAN3pz1RDPQ')
      .then((result: EmailJSResponseStatus) => {
        alert("This form has been submitted.");
        this.form.reset();
      // this.disabledSubmitButton = true;
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  ngOnInit(): void {
  }

}