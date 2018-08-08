import { Selector } from 'testcafe';
import Page from './page-model';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`

const page = new Page()

test('Text typing basics', async t => {
    await t
        .typeText(page.nameInput, 'Peter')
        .typeText(page.nameInput, 'Paker', { replace: true })
        .typeText(page.nameInput, 'r', { caretPos: 2 })
        .expect(page.nameInput.value).eql('Parker');
});

test('Click check boxes and then verify their state', async t => {
    for (const feature of page.featureList) {
        await t
            .click(feature.label)
            .expect(feature.checkbox.checked).ok();

    }
});

test('Click radio button and then verify their state', async t => {
    // for (let os of page.onList) {
    //     await t
    //         .click(os.radioButton)
    //         .expect(os.radioButton.checked).ok();
    // }

    await t
        .click(page.onList[0].radioButton)
        .expect(page.onList[0].label.textContent).eql('Windows')
        .expect(page.onList[1].label.textContent).eql('MacOS')
        .expect(page.onList[2].label.textContent).eql('Linux')
        .expect(page.onList[0].radioButton.checked).ok()
        .expect(page.onList[1].radioButton.checked).notOk()
        .expect(page.onList[2].radioButton.checked).notOk();
});

test('My first test', async t => {
    // debugger;

    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')
        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});
