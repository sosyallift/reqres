import { ElementRef, Directive, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[autoSize]'
})

export class AutoSizeDirective implements OnInit, OnDestroy, AfterViewInit {
    private maxTextareaHeight: number = 300;
    private textArea: HTMLTextAreaElement;
    private valueChangesSubscription: Subscription;

    /**
     * Constructor
     */
    constructor(
        private control : NgControl,
        private elementRef: ElementRef) {}

    /**
     * Component init
     */
    ngOnInit(): void {
        this.valueChangesSubscription = this.control.valueChanges.subscribe(() => this.adjust());
    }

    /**
     * View destroy
     */
    ngOnDestroy() {
        this.valueChangesSubscription.unsubscribe();
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void {
        // initial adjust
        this.adjust();
    }

    /**
     * Adjust
     */
    adjust(): void {
        const textarea: HTMLTextAreaElement = this.getTextarea();

        if (textarea.scrollHeight <= this.maxTextareaHeight) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';

            return;
        }

        textarea.style.overflow = 'auto';
    }

    /**
     * Get textarea
     */
    private getTextarea(): HTMLTextAreaElement {
        if (this.textArea) {
            return this.textArea;
        }

        this.textArea = this.elementRef.nativeElement;

        return this.textArea;
    }
}
