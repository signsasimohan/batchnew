import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `
    <div>
      <p>This is a list - {{li[0]}}</p>
      <button (click)="addItem()">Add Item</button>
    </div>
  `
})
export class AppComponent {
  title = 'examble';

//this is an leap year function
  year: number = 0;
isLeapYear: boolean = false;
checkLeapYear() {
if ((this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0) {
this.isLeapYear = true;
} else {
this.isLeapYear = false;
}
} 

  // List Of Array Function
  li: string[] = ["keerthi", "narmatha", "tokiyo", "titanic","valid"];

  addItem1() {
    this.li.push('New Item'); // Push a new item into the array
  }

// Initialize an empty array
//  myList: any[] = [];
// constructor() {
//   this.myList = ["engineer", "pilot", "car", "bike"]; // Initialize in the constructor
// }

// addItem() {
//   // Add items to the array using push()
//   this.myList.push('New Item ' + (this.myList.length + 1));
// }


//This Is Import Of New Array List Function
list1:String[]=[];
    newItem: string = "";

  addToList1(item: string) {
    this.list1.push(item);
    this.newItem = ""; // Clear the input field
  }


gender=true;
  


num = 0;


name="when you accept this project ? yes Accept";

today = Date();


amount=4000;

}

