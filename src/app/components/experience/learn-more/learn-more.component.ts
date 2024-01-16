import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-learn-more',
  standalone: true,
  imports: [],
  templateUrl: './learn-more.component.html',
  styleUrl: './learn-more.component.scss'
})
export class LearnMoreComponent {
  @ViewChild('learnMore', { static: true }) dialog!: ElementRef<HTMLDialogElement>;
  @Input() set open(value: boolean) {
    if (value) {
      this.dialog.nativeElement.showModal();
    }
  }
  @Output() isOpen = new EventEmitter<boolean>();

  @HostListener('window:keydown.escape', ['$event']) handleEscape(event: KeyboardEvent) {
    this.close();
  }

  close() {
    this.dialog.nativeElement.close();
    this.isOpen.emit(false);
  }

}
