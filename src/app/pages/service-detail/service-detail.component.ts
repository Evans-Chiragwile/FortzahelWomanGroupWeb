import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";
import { CtaSectionComponent } from "../../shared/cta-section/cta-section.component";
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
    selector: 'app-service-detail',
    templateUrl: './service-detail.component.html',
    imports: [CtaSectionComponent],
})
export class ServiceDetailComponent { }