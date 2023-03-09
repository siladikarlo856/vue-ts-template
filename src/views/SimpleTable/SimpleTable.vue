<script setup lang="ts">
import { ref } from 'vue';
import { DxDataGrid } from 'devextreme-vue/data-grid';
import service from './employees.service';
import { GridColumns } from './GridColumns';

const employees = service.getEmployees();

const gridColumnsObject = ref(new GridColumns());

// On create
gridColumnsObject.value.getDefaultColumns();

console.log('columns', gridColumnsObject.value.columns);

const myColumns = [
  {
    caption: 'Employee Id',
    dataType: 'number',
    dataField: 'EmployeeID',
    alignment: 'left',
    visible: false,
    allowHeaderFiltering: false,
    allowFiltering: false,
    allowSearch: false,
  },
];
</script>

<template>
  <h1>Simple table</h1>
  <DxDataGrid
    id="dataGrid"
    key-expr="EmployeeID"
    :columns="myColumns"
    :data-source="employees"
  >
    <!-- Configuration goes here -->
  </DxDataGrid>
</template>
