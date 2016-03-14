/// <reference path="../../../typings/jasmine/jasmine.d.ts" />

describe("hello-protractor", function () {
    
    describe("index", function() {
        it("should display the correct title", function () {
            browser.get('/#');
            expect(browser.getTitle()).toBe('AngularJS and Protractor demo');
        });
        
        it("should turn the button background color blue", function () {
            browser.get('/#');
            
            var clickMe = element(by.id('clickMe')); 
            expect(clickMe.getCssValue('background-color')).toEqual("blue");
            clickMe.click();
            expect(clickMe.getCssValue('background-color')).toEqual("blue");
        });
    });
    
});