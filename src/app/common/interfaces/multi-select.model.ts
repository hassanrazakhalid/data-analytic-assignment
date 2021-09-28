import { ThemePalette } from "@angular/material/core";

export interface IMultiSelect {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: IMultiSelect[];
}
