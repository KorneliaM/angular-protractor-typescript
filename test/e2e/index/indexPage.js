function IndexPage() {
    this.changeTextButton = element(by.id('change-text-button'));
    this.changeColorButton = element(by.id('change-color-button'));
    this.message = element(by.binding('currentText'));
    this.textField = element(by.id('textField'));
    
    this.get = function() {
        browser.get('/#');
    }
    
    this.clickButton = function() {
        this.button.click();
    }
    
    this.getTitle = function() {
        return browser.getTitle();
    }
}

module.exports = IndexPage;