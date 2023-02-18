import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StackComponent } from './stack/stack.component';
import { QueueComponent } from './queue/queue.component';

@NgModule({
  imports: [CommonModule, BrowserModule, ReactiveFormsModule],
  exports: [StackComponent],
  declarations: [AppComponent, StackComponent, QueueComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
