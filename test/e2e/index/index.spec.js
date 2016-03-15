describe("hello-protractor", function () {
    
    describe("index", function() {
        it("should display the correct title", function () {
            browser.get('/#');
            expect(browser.getTitle()).toBe('AngularJS and Protractor demo');
        });
        
        it("should turn the button background color blue", function () {
            browser.get('/#');
            
            element(by.id('button-to-click')).click();
            
            expect(element(by.id('click-button-element')).getCssValue('background-color')).toEqual("rgba(0, 0, 255, 1)");
        });
        
        it("should display the new text", function () {
            browser.get('/#');
            
            element(by.id('change-text-button')).click();
            
            expect(element(by.binding('currentText')).getText()).toEqual("Der er trykket på knappen");
        });
    });
    
});