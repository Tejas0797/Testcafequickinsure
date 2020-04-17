import { Selector, ClientFunction } from 'testcafe';

const BASE_URL = 'https://staging.quickinsure.co.in/car-insurance';

fixture `Getting Started`
    .page(BASE_URL)

test('Create quotation', async t => {
    //card1
    const MarutiSwiftSelector = '#nav-tabContent > div.tab-pane.fade.show.active.mb-4 > div > div.card-body > div.insurance-wrap > div.radio-button-group.d-flex.flex-wrap > div:nth-child(5) > label.label-vehicle.mb-0';
    const DieselSelector = '#nav-tabContent > div.tab-pane.fade.show.active.mb-4 > div.card-qi.card-vehicle-variants.card > div.card-body > div > div.car-fuel-wrap.d-flex.align-items-center.mb-4 > div:nth-child(2) > div > div:nth-child(2) > label';
    await t
        .click(MarutiSwiftSelector);

    await t
        .click(DieselSelector);

        const variantSelector = Selector('#react-select-3-input');
        const rtoSelector = Selector('#react-select-4-input');
        const registrationMonthSelector = Selector('react-datepicker-ignore-onclickoutside');

        await t
    .setTestSpeed(0.7)
    .typeText(variantSelector, 'LDI')
    .click('#react-select-3-option-0')
    .typeText(rtoSelector, 'pune')
    .click('#react-select-4-option-0')
    var focusRegistrationCalendar = ClientFunction(() => {
        document.getElementsByClassName('react-datepicker__input-container')[0].children[0].click()
   

});
await focusRegistrationCalendar();
    await t.click('.react-datepicker__month-3');
    //card2
 
    const ncbSelector = Selector('#react-select-5-input');
    const previousInsurerSelector = Selector('#react-select-6-input');


    await t
    .typeText(ncbSelector, '0')
    .click('#react-select-5-option-0')
    .typeText(previousInsurerSelector, ' ');
 
    //card3
    
    const acceptTermsSelector = Selector('#nav-tabContent > div.mb-5 > div > label');
    const submitButton = Selector('.btn-qi');
    await t
        
        .click(acceptTermsSelector)
        .click(submitButton)
        .wait(5000);

        //quotation page
        const skipButtonSelector = Selector('.btn-skip');
    const buyNowButtonSelector = Selector('#root > div.app-content > section > section > div > div:nth-child(2) > div.px-xl-2.col-12.col-md-9 > div > table > tbody > tr:nth-child(2) > td:nth-child(5) > button');
    await t
        .click(skipButtonSelector)
        .click(buyNowButtonSelector);

        //personal detail information
    const titleSelector = Selector('#react-select-7-input');
    const firstNameSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(1) > div.collapse.show > div > form > div > div:nth-child(2) > div > div > input');
    const lastNameSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(1) > div.collapse.show > div > form > div > div:nth-child(3) > div > div > input');
    const mobileNumberSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(1) > div.collapse.show > div > form > div > div:nth-child(5) > div > div > input');
    const emailSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(1) > div.collapse.show > div > form > div > div:nth-child(6) > div > div > input');
    const marriedStatusSelector = Selector('#react-select-8-input');
    

    var focusRegistrationCalendar = ClientFunction(() => {
        document.getElementsByClassName('react-datepicker__input-container')[0].children[0].click()
    });

    
    await t
    .typeText(titleSelector, 'Mr')
    .click('#react-select-7-option-0')
    .typeText(firstNameSelector, 'Tejas')
    .typeText(lastNameSelector, 'Tester')
    .typeText(mobileNumberSelector, '7021733874')
    .typeText(emailSelector, 'tejas.pundpal@joshsoftware.com')
    
    await focusRegistrationCalendar();
    await t.click('.react-datepicker__day--001');

    await t.typeText(marriedStatusSelector, 'Married')
    await t.click('#react-select-8-option-0');


    //Nominee Details
    const nomineedetailsbar = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(2) > div.d-flex.align-items-center.justify-content-between.card-header > h5 > span > button');
    const nomineeFullNameSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(2) > div.collapse.show > div > form > div > div:nth-child(1) > div > div > input');
    const nomineeAgeSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(2) > div.collapse.show > div > form > div > div:nth-child(2) > div > div > input');
    const nomineeRelation = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(2) > div.collapse.show > div > form > div > div:nth-child(3) > div > div > div');

    
    await t
    .click(nomineedetailsbar)
    .typeText(nomineeFullNameSelector,'testing testing')
    .typeText(nomineeAgeSelector,'32')
    .typeText(nomineeRelation, 'Father')

    //Address  details
    const nomineeaddressdetails = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(3) > div.d-flex.align-items-center.justify-content-between.card-header > h5 > span > button');
    const nomineepincode = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(3) > div.collapse.show > div > div > form > div > div.col-md-4 > div > div');

    await t
    .click(nomineeaddressdetails)
    .typeText(nomineepincode,'411021')

});