import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // (si no está ya importado)
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DatePipe } from '@angular/common';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { FloatLabelModule } from "primeng/floatlabel";
import { GalleriaModule } from 'primeng/galleria';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TreeModule } from 'primeng/tree';
import { InformationModalComponent } from './components/modals/information-modal/information-modal.component';
import { HeaderMenuComponent } from './core/components/menu/header-menu/header-menu.component';
import { LeftMenuComponent } from './core/components/menu/left-menu/left-menu.component';
import { LeftSmallMenuComponent } from './core/components/menu/left-small-menu/left-small-menu.component';
import { SmallMenuItemComponent } from './core/components/menu/small-menu-item/small-menu-item.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SpinnersComponent } from './core/components/spinners/spinners.component';
import { BodyComponent } from './layout/components/body/body.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { TrendingRecipeComponent } from './components/sections/trending-recipe/trending-recipe.component';
import { BlogComponent } from './components/sections/blog/blog.component';
import { ExploreRecipeComponent } from './components/sections/explore-recipe/explore-recipe.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    HeaderComponent,
    LayoutComponent,
    SpinnersComponent,
    NavbarComponent,
    LeftMenuComponent,
    SmallMenuItemComponent,
    LeftSmallMenuComponent,
    InformationModalComponent,
    HeaderMenuComponent,
    HomeComponent,
    TrendingRecipeComponent,
    BlogComponent,
    ExploreRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCard,
    MatRadioButton,
    MatIconModule,
    MatDatepickerModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginator,
    MatPaginatorModule,
    MatSortModule,
    MatButtonToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSliderModule,
    MatTooltipModule,
    MatStepperModule,
    FileUploadModule,
    MultiSelectModule,
    HttpClientModule,
    InputNumberModule,
    ConfirmDialogModule,
    ToastModule,
    TableModule,
    CarouselModule,
    DataViewModule,
    DataViewModule,
    TagModule,
    RatingModule,
    MatCheckboxModule,
    SkeletonModule,
    DropdownModule,
    DataViewModule,
    GalleriaModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    FloatLabelModule,
    ToggleButtonModule,
    InputSwitchModule,
    TreeModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    DatePipe,
    ConfirmationService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
