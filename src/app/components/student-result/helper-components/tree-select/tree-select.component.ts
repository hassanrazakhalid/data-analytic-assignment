import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { IMultiSelect } from 'src/app/common/interfaces/multi-select.model';

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss']
})
export class TreeSelectComponent implements OnInit {

  @Input()
  task!: IMultiSelect
  allComplete: boolean = false;

  @Output()
  filterChanged= new EventEmitter<string []> ()

  constructor() {
   }

  ngOnInit(): void {
  }

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  private emitOutout() {

    const allFilters = this.task.subtasks!.filter(t => t.completed).map(x => x.name)
    this.filterChanged.emit(allFilters)
  }

  uncheckAll() {
    this.task.subtasks!.forEach(x => {
      x.completed = false
    })
  }

  onSelectionChanged(value: MatCheckboxChange) {
    this.emitOutout()
  }

  setAll(completed: boolean) {
    console.log('SetAll Called')
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
    this.emitOutout()


  }

}
