import { Selector } from 'testcafe';

const label = Selector('label');

class Feature {
    public label: Selector;
    public checkbox: Selector;

    constructor(public text: string) {
        this.label = label.withText(text);
        this.checkbox = this.label.find('input[type=checkbox]');
    }
}

class OperatingSystem {
    public label: Selector;
    public radioButton: Selector;
    
    constructor(text: string) {
        this.label = label.withText(text);
        this.radioButton = this.label.find('input[type=radio]');
    }
}

export default class Page {
    public featureList: Feature[];
    public onList: OperatingSystem[];
    public slider: {};
    public interfaceSelect: Selector;
    public interfaceSelectOption: Selector;

    constructor(
        public nameInput             = Selector('#developer-name'),
        public triedTestCafeCheckbox = Selector('#tried-test-cafe'),
        public populateButton        = Selector('#populate'),
        public submitButton          = Selector('#submit-button'),
        public results               = Selector('.result-content'),
        public commentsTextArea      = Selector('#comments')
    ) {
        this.featureList = [
            new Feature('Support for testing on remote devices'),
            new Feature('Re-using existing JavaScript code for testing'),
            new Feature('Running tests in background and/or in parallel in multiple browsers'),
            new Feature('Easy embedding into a Continuous integration system'),
            new Feature('Advanced traffic and markup analysis')
        ];

        this.onList = [
            new OperatingSystem('Windows'),
            new OperatingSystem('MacOS'),
            new OperatingSystem('Linux')
        ];

        this.slider = {
            handle: Selector('.ui-slider-handle'),
            tick:   Selector('.slider-value')
        };

        this.interfaceSelect       = Selector('#preferred-interface');
        this.interfaceSelectOption = this.interfaceSelect.find('option');
    }
}