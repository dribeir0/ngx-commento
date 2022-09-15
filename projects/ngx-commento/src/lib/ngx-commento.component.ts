import { Component, AfterViewInit } from "@angular/core";

@Component({
  selector: "ngx-commento",
  template: `
    <div id="commento"></div>
  `,
  styles: []
})
export class NgxCommentoComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    (window as any).main();
  }
}
