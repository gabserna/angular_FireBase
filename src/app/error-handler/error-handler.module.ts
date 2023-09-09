import { ErrorHandler, NgModule } from '@angular/core';

class MyErrorHandler implements ErrorHandler {
  handleError(error: any) {
    // Aquí puedes personalizar la lógica para manejar los errores
    console.error('Error personalizado:', error);
    // Puedes enviar el error a un servicio de registro, mostrar un mensaje al usuario, etc.
  }
}

@NgModule({
  providers: [
    { provide: ErrorHandler, useClass: MyErrorHandler }
  ]
})
export class ErrorHandlerModule {}
