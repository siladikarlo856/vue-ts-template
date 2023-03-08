<script setup lang="ts">
import { DxDataGrid } from 'devextreme-vue/data-grid';
import service from './employees.service';

const employees = service.getEmployees();
</script>

<template>
  <h1>Simple table</h1>
  <DxDataGrid id="dataGrid" :data-source="employees" key-expr="EmployeeID">
    <!-- Configuration goes here -->
  </DxDataGrid>
</template>
