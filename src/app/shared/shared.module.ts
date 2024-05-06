import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    TableModule,
    ToastModule,
  ],
  exports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    TableModule,
    ToastModule,
    LoaderComponent
  ],
})
export class SharedModule {}