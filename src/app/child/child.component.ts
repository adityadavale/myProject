import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myInputData;
  @Output() myOutputEvent = new EventEmitter();

  modelName: String = "aditya";

  constructor() {

  }

  myClickEventHandlerFunction = function (eventData) {
    // console.log(`EventData for Click Event\n ${eventData}`);
    console.log(eventData);

  };

  ngOnInit() {
    this.myOutputEvent.emit("value is emitted");
    console.log("Input from Parent\n" + this.myInputData);

    var count = 0;
    var clearInt = setInterval(() => {
      count += 1;
      console.log(`Enter Inputs are Changed at ${count * 5}ms : ${this.modelName}`);

      // stop interval after 2 rounds
      if (count == 2) {
        clearInterval(clearInt);
      }
    }, 5000);


    // clearInterval(clearInt);


  }


}
