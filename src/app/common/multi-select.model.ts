import { ThemePalette } from "@angular/material/core";

export interface IMultiSelect {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: IMultiSelect[];
}

export class MultiSelectModel implements IMultiSelect {
  name: string = ""
  completed: boolean = false
  color: ThemePalette
  subtasks?: MultiSelectModel[] | undefined;

  constructor() {}
}
