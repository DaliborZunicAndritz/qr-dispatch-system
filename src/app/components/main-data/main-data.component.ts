import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataDetails } from 'src/app/models/data-details';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrls: ['./main-data.component.scss']
})
export class MainDataComponent implements OnInit {

  dataDetails = {} as DataDetails

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get("id");

        if (id) {
          this.dataService.getDataByGuid(id).subscribe({
            next: (response) => {
              this.dataDetails = response;
            }
          });
        }
      }
    });

  }
}
