import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component({
    selector: "app-header",
    standalone: true,
    templateUrl: "./header.component.html",
    imports: [RouterLink, CommonModule],
})

export class HeaderComponent {
        mobileMenuOpen = false;

    toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    closeMobileMenu() {
        this.mobileMenuOpen = false;
    }
}