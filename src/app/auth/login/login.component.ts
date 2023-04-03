import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm=this.formBuilder.group({
    email: ['veritocapito@gmail.com', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })
  constructor (private formBuilder:FormBuilder) {}

  ngOnInit():void{}

    //metodos para el formulario

    get Password(){
      return this.loginForm.get("password");
    }
  
    get Mail(){
      return this.loginForm.get("email");
    }
  
    get PasswordValid(){
      return this.Password?.touched && !this.Password?.valid;
    }
    
    get MailValid(){
      return this.Mail?.touched && !this.Mail?.valid;
    }
    
  
    onSubmit(event: Event){
      //detenemos la ejecucion del comportamiento del submit del form
      event.preventDefault;
  
      if (this.loginForm.valid){
        //Llamamos a nuestro servicio para enviar los datos al servidor. 
        //Tambien podriamos ejecutar alguna logica extra.
        console.log("Todo ok! Formulario Enviado!");
      } else {
        //Corremos todas las validaciones para que se ejecuten los mensajes de error en el template.
        this.loginForm.markAllAsTouched();
      }
  
    }
}
