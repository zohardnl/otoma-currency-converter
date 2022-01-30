import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent implements OnInit {

  constructor(private historyService: HistoryService) { }
  historyValues : any;

  ngOnInit(): void {
    this.historyValues = this.historyService.getLocalStorage();
  }

}
