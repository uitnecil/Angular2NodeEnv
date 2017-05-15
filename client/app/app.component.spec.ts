/**
 * Created by zoriana.kovacs on 21/12/16.
 */
import { TestBed } from '@angular/core/testing';
import { App } from './app.component';
describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [App]});
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(App);
        expect(fixture.componentInstance instanceof App).toBe(true, 'should create AppComponent');
    });
});

