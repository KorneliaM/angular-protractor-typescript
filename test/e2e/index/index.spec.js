var IndexPage = require('./indexPage.js');

describe("hello-protractor", function () {
    
    var page = new IndexPage();
    
    beforeEach(function() {
        page.get();
    })
    
    describe("index", function() {
        it("should display the correct title", function () {
            expect(page.getTitle()).toBe('AngularJS and Protractor demo');
        });
        
        it("should turn the button parent element background color blue", function () {
            page.changeColorButton.click();
            expect(page.changeColorButton.getCssValue('background-color')).toEqual("rgba(0, 0, 255, 1)");
        });
        
        it("should display the new text when the button is clicked", function () {
            page.changeTextButton.click();
            expect(page.message.getText()).toEqual("Der er trykket på knappen");
        });
    });
});