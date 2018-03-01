import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../../../jsondata.service';

@Component({
  selector: 'app-speed-average',
  templateUrl: './speed-average.component.html',
  styleUrls: ['./speed-average.component.scss']
})
export class SpeedAverageComponent implements OnInit {
  public doughnutChartLabels:string[] = ['calle85', 'Salitre Plaza', 'Parque 93', 'Calle 80', 'Centro'];
  public doughnutChartData:number[] = [1, 1, 1, 1, 1];
  public doughnutChartType:string = 'doughnut';
  public speedData = [];
  public speedDataAddition = [0,0,0,0,0];
  public averageLength:number = 0;

  constructor(private _jsondata: JsondataService) { }
  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this._jsondata.getZonesData().subscribe(
      (jsondata)=>{
        this.addData(jsondata);
      }
    );
  }

  addData(jsondata:any){
    this.averageLength++;
    this.doughnutChartData.forEach((element, index)=>{
      this.speedDataAddition[index] +=  parseInt(jsondata[index].data.speed);
      this.doughnutChartData[index] = Math.round(this.speedDataAddition[index]/this.averageLength*100)/100;
    });    
    /* this.doughnutChartData=this.speedData; */
    this.doughnutChartLabels = ['calle85', 'Salitre Plaza', 'Parque 93', 'Calle 80', 'Centro'];
  }

}
