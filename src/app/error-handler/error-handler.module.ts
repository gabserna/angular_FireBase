import { ErrorHandler, NgModule } from '@angular/core';

class MyErrorHandler implements ErrorHandler {
  // handleError(error: any): void {
  //   console.log('Error handler', error);
  // }

  handleError(error: any) {
    // do something with the exception
  }
}

@NgModule({
  providers: [{
    provide: ErrorHandler, 
    useClass: MyErrorHandler
  }]
})
export class ErrorHandlerModule {}
