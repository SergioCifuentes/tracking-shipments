import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShipmentComponent } from './components/add-shipment/add-shipment.component';
import { ShipmentDetailsComponent } from './components/shipment-details/shipment-details.component';
import { ShipmentListComponent } from './components/shipment-list/shipment-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'shipments', pathMatch: 'full' },
  { path: 'shipments', component: ShipmentListComponent },
  { path: 'shipments/:id', component: ShipmentDetailsComponent },
  { path: 'add', component: AddShipmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
