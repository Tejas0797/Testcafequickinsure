import { Selector, ClientFunction } from 'testcafe';

const BASE_URL = 'https://staging.quickinsure.co.in/car-insurance';

fixture `Getting Started`
    .page(BASE_URL)

test('Create quotation', async t => {
    // card 1
    const swiftSelector = '#nav-tabContent > div.tab-pane.fade.show.active.mb-4 > div.card-qi.card-vehicle-selection.card > div.card-body > div.insurance-wrap > div.radio-button-group.d-flex.flex-wrap > div:nth-child(5) > label.label-vehicle.mb-0';
    const petrolSelector = '#nav-tabContent > div.tab-pane.fade.show.active.mb-4 > div.card-qi.card-vehicle-variants.card > div.card-body > div > div.car-fuel-wrap.d-flex.align-items-center.mb-4 > div:nth-child(2) > div > div:nth-child(1) > label';
    await t
        .click(swiftSelector);

    await t
        .click(petrolSelector);

         // card 2
    const variantSelector = Selector('#react-select-3-input');
    const rtoSelector = Selector('#react-select-4-input');
    const registrationcalendarSelector = Selector('#nav-tabContent > div.tab-pane.fade.show.active.mb-4 > div.card-qi.card-vehicle-variants.card > div.card-body > div > div.pb-sm-0.row > div:nth-child(2) > div > div')
    
     await t
    .setTestSpeed(0.7)
    .typeText(variantSelector, '1.2 DLX')
    .click('#react-select-3-option-0')
    .typeText(rtoSelector, 'pune')
    .click('#react-select-4-option-0')
    .typeText(registrationcalendarSelector,'February 2016')

    //card 3
    const policytypeSelector = Selector('#nav-tabContent > div.tab-pane.fade.show.active.mb-4 > div.card-qi.card-car-policy.card > div.card-body > div > div:nth-child(1) > div > div > div.col-12.col-sm-7.col-lg-9 > div > div:nth-child(2) > label')
    
    const previousInsurerSelector = Selector('#react-select-6-input');
    await t
    .click(policytypeSelector)
    
    .typeText(previousInsurerSelector, ' ');

    //card 4
    const acceptTermsSelector = Selector('#nav-tabContent > div.mb-5 > div > label');
    const submitButton = Selector('.btn-qi');
    await t
        .click(acceptTermsSelector)
        .click(submitButton)
        .wait(5000);

    // Quotation list page
    
    const skipButtonSelector = Selector('.btn-skip');
    const BuyNowButtonSelector = Selector('#root > div.app-content > section > section > div > div > div.px-xl-2.col-12.col-md-9 > div > table > tbody > tr:nth-child(2) > td.text-center > button');
    

    await t
    .click(skipButtonSelector)
    .click(BuyNowButtonSelector);

    // Nominee details page

    const titleSelector = Selector('#react-select-7-input');
    const firstNameSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(2) > div > div');
    const lastNameSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(3) > div > div');
    const mobileNumberSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(4) > div > div');
    const emailSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(5) > div > div');
    const marriedStatusSelector = Selector('#react-select-8-input');

    var focusRegistrationCalendar = ClientFunction(() => {
        document.getElementsByClassName('react-datepicker__input-container')[0].children[0].click()
    });

    
    await t
    .typeText(titleSelector, 'Mr')
    .click('#react-select-7-option-0')
    .typeText(firstNameSelector, 'JOSH')
    .typeText(lastNameSelector, 'TESTING')
    .typeText(mobileNumberSelector, '9876543210')
    .typeText(emailSelector, 'joshtesting@gmail.com')
    
    await focusRegistrationCalendar();
    await t.click('.react-datepicker__day--001');

    await t.typeText(marriedStatusSelector, 'Married')
    await t.click('#react-select-8-option-0')

     //Nominee Details
     const NexttabSelector = Selector('#root > div.app-content > section > section > div > div.text-center.mb-5 > button');
     const nomineeFullNameSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(1) > div > div');
     const nomineeAgeSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(2) > div > div');
     const nomineeRelationship = Selector('#react-select-9-input');
 
     await t
     .click(NexttabSelector)
     .typeText(nomineeFullNameSelector, 'JOSH EMPLOYEE')
     .typeText(nomineeAgeSelector, '55')
     .typeText(nomineeRelationship, 'Father')
     .click('#react-select-9-option-1')
 

      //Address Details
    const nextTabSelector = Selector('#root > div.app-content > section > section > div > div.text-center.mb-5 > button');
    const pincodeSelector = Selector('#react-select-10-input'); 
    const houseNoSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > form > div > div:nth-child(4) > div > div > div')
    const buildingNameSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > form > div > div:nth-child(5) > div > div > div')
    const streetNameSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > form > div > div:nth-child(6) > div > div > div')
    const sameAsAboveSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > form > div > div.col-sm-12 > div > div:nth-child(1) > label')
    const clickNextSelector = Selector('#root > div.app-content > section > section > div > div.text-center.mb-5 > button')

    await t
    .click(nextTabSelector)
    .typeText(pincodeSelector, '411021')
    .wait(2000)
    .click('#react-select-10-option-0')
     await t
    .typeText(houseNoSelector,'2ND FLOOR')
    .typeText(buildingNameSelector,'IT PARK')
    .typeText(streetNameSelector,'BAVDHAN')
    .click(sameAsAboveSelector)
    .click(clickNextSelector)

    //vehicle details

    const RegistrationNoSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > form > div > div.col > div > div > input:nth-child(2)')
    const RegistrationlastNoSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > form > div > div.col > div > div > input.form-control-number.form-control')
    const chassisnoSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > form > div > div:nth-child(2) > div > div')
    const enginenoselector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > form > div > div:nth-child(3) > div > div')

    await t
    .typeText(RegistrationNoSelector,'as')
    .typeText(RegistrationlastNoSelector,'4567')
    .typeText(chassisnoSelector,'dfy5645rtuyfg')
    .typeText(enginenoselector,'sdfgh567sdfgh')

    var FocusRegistrationdateCalendar = ClientFunction(() => {
        document.getElementsByClassName('react-datepicker__input-container')[1].children[0].click()
    });
    await t
    
    await FocusRegistrationdateCalendar();
    await t.click('.react-datepicker__day--011');
    
    var FocuspreviouspolicyCalendar = ClientFunction(() => {
        document.getElementsByClassName('react-datepicker__input-container')[2].children[0].click()
    });
    await t
    
    await FocuspreviouspolicyCalendar();
    await t.click('.react-datepicker__day--025');
    const PreviouspolicynoSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > form > div > div:nth-child(7) > div > div')
    const clicknextSelector = Selector('#root > div.app-content > section > section > div > div.text-center.mb-5 > button')

    await t
    .typeText(PreviouspolicynoSelector,'dfghj567vbhj')
    .click(clicknextSelector)

    //summary page

    const declaredInfoSelector = Selector('#root > div.app-content > section > section > div > div.pt-4.d-flex > div > label')
    const ClickconfirmpaySelector = Selector('#root > div.app-content > section > section > div > div.text-center.my-5 > button')
    
    await t
    .click(declaredInfoSelector)
    .click(ClickconfirmpaySelector)
});