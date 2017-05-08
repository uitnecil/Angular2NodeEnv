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

// LICE: am comentat asta pentru ca dadea erorile astea
/*
ERROR in /home/lice/Projects/Angular2NodeEnv/client/app/app.component.spec.ts
(6,1): error TS2304: Cannot find name 'describe'.

    ERROR in /home/lice/Projects/Angular2NodeEnv/client/app/app.component.spec.ts
(7,5): error TS2304: Cannot find name 'beforeEach'.

    ERROR in /home/lice/Projects/Angular2NodeEnv/client/app/app.component.spec.ts
(10,5): error TS2304: Cannot find name 'it'.

    ERROR in /home/lice/Projects/Angular2NodeEnv/client/app/app.component.spec.ts
(12,9): error TS2304: Cannot find name 'expect'.*/
