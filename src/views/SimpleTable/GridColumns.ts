import { Column } from 'devextreme/ui/data_grid';
import { deepCopy } from '../../utils/helper';

export class GridColumns {
  columns: Column[];
  defaultColumns: Column[];

  constructor() {
    this.columns = [];
    this.defaultColumns = [];
  }

  getDefaultColumns(): Column[] {
    if (this.defaultColumns.length === 0) {
      this.generateDefaultColumns();

      /**
       * On initial columns generation, copy default columns to columns variable
       */
      this.columns = deepCopy(this.defaultColumns);
    }

    return this.defaultColumns;
  }

  private generateDefaultColumns(): void {
    this.defaultColumns = [
      {
        caption: 'Employee Id',
        dataType: 'string',
        dataField: 'EmployeeID',
        alignment: 'left',
        visible: false,
        allowHeaderFiltering: false,
        allowFiltering: false,
        allowSearch: false,
      },
    ];
  }
}
