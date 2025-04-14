import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  promedioTemporadas: number = 0;

  constructor(private seriesService: SeriesService) {}
  
  selectedSerie: Serie | null = null;

  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
  }
  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(data => {
      this.series = data;
      this.promedioTemporadas = this.calcularPromedioTemporadas(data);
    });
  }

  calcularPromedioTemporadas(series: Serie[]): number {
    const total = series.reduce((acc, serie) => acc + serie.seasons, 0);
    return series.length ? total / series.length : 0;
  }
}