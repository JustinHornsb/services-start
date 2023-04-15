import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  onAccountAdded(newAccount: {name: string, status: string}) {
    
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    
  }
}
