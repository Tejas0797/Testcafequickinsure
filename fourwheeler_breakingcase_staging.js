import { Selector, ClientFunction } from 'testcafe';

const BASE_URL = 'https://staging.quickinsure.co.in/car-insurance';

fixture `Getting Started`
    .page(BASE_URL)

test('Create quotation', async t => {
    // card 1
    const swiftDzireSelector = '#nav-tabContent > div.tab-pane.fade.show.active.mb-4 > div.card-qi.card-vehicle-selection.card > div.card-body > div.insurance-wrap > div.radio-button-group.d-flex.flex-wrap > div:nth-child(3) > label.label-vehicle.mb-0 > img';
    const petrolSelector = '#nav-tabContent > div.tab-pane.fade.show.active.mb-4 > div.card-qi.card-vehicle-variants.card > div.card-body > div > div.car-fuel-wrap.d-flex.align-items-center.mb-4 > div:nth-child(2) > div > div:nth-child(1) > label';
    await t
        .click(swiftDzireSelector);

    await t
        .click(petrolSelector);

    // card 2
    const variantSelector = Selector('#react-select-3-input');
    const rtoSelector = Selector('#react-select-4-input');
    

    await t
    .setTestSpeed(0.7)
    .typeText(variantSelector, '1.2 LXI')
    .click('#react-select-3-option-0')
    .typeText(rtoSelector, 'pune')
    .click('#react-select-4-option-0')
    var focusRegistrationCalendar = ClientFunction(() => {
        document.getElementsByClassName('react-datepicker__input-container')[0].children[0].click()
    });
    
    await focusRegistrationCalendar();
    await t.click('.react-datepicker__month-1');

    //card 3

    const IsYourPolicyExpSelector = Selector('#nav-tabContent > div.tab-pane.fade.show.active.mb-4 > div.card-qi.card-car-policy.card > div.card-body > div > div.policy-formgroup.row > div > div > label')
    const WhenwasExpiredSelector = Selector('#nav-tabContent > div.tab-pane.fade.show.active.mb-4 > div.card-qi.card-car-policy.card > div.card-body > div > div.mb-4.ml-0.ml-sm-2 > div > div:nth-child(3) > div > label')
    const ncbSelector = Selector('#react-select-5-input');
    const previousInsurerSelector = Selector('#react-select-6-input');



    await t
    .click(IsYourPolicyExpSelector)
    .click(WhenwasExpiredSelector)
    .typeText(ncbSelector, '0')
    .click('#react-select-5-option-0')
    .typeText(previousInsurerSelector, ' ');

    // card 4 

    const acceptTermsSelector = Selector('#nav-tabContent > div.mb-5 > div > label');
    const submitButton = Selector('.btn-qi');
    await t
        .click(acceptTermsSelector)
        .click(submitButton)
        .wait(5000);


        // Quotation list page
    const skipButtonSelector = Selector('.btn-skip');
    const buyNowButtonSelector = Selector('#root > div.app-content > section > section > div > div:nth-child(2) > div.px-xl-2.col-12.col-md-9 > div > table > tbody > tr:nth-child(2) > td:nth-child(5) > button');
    await t
        .click(skipButtonSelector)
        .click(buyNowButtonSelector);

    // Buy Now page
    // Personal Information
    // Basic Details
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
    .typeText(firstNameSelector, 'JOSH')
    .typeText(lastNameSelector, 'TESTING')
    .typeText(mobileNumberSelector, '9876543210')
    .typeText(emailSelector, 'joshtesting@gmail.com')
    
    await focusRegistrationCalendar();
    await t.click('.react-datepicker__day--001');

    await t.typeText(marriedStatusSelector, 'Married')
    await t.click('#react-select-8-option-0')


    //Nominee Details
    const nomineeTabSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(2) > div.d-flex.align-items-center.justify-content-between.card-header > h5 > span > button');
    const nomineeFullNameSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(2) > div.collapse.show > div > form > div > div:nth-child(1) > div > div > input');
    const nomineeAgeSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(2) > div.collapse.show > div > form > div > div:nth-child(2) > div > div > input');
    const nomineeRelationship = Selector('#react-select-9-input');

    await t
    .click(nomineeTabSelector)
    .typeText(nomineeFullNameSelector, 'JOSH EMPLOYEE')
    .typeText(nomineeAgeSelector, '55')
    .typeText(nomineeRelationship, 'Father')
    .click('#react-select-9-option-0')

    //Address Details
    const addressTabSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(3) > div.d-flex.align-items-center.justify-content-between.card-header > h5 > span > button');
    const pincodeSelector = Selector('#react-select-10-input'); 
    const houseNoSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(3) > div.collapse.show > div > div > form > div > div:nth-child(4) > div > div')
    const buildingNameSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(3) > div.collapse.show > div > div > form > div > div:nth-child(5) > div > div > div')
    const streetNameSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(3) > div.collapse.show > div > div > form > div > div:nth-child(6) > div > div > div.form-group')
    const sameAsAboveSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div > div:nth-child(3) > div.collapse.show > div > div > form > div > div.col-sm-12 > div > div:nth-child(1) > label')
    const clickNextSelector = Selector('#root > div.app-content > section > section > div > div.text-center.mb-5 > button')

    await t
    .click(addressTabSelector)
    .typeText(pincodeSelector, '411021')
    .wait(2000)
    .click('#react-select-10-option-0')
     await t
    .typeText(houseNoSelector,'2ND FLOOR')
    .typeText(buildingNameSelector,'IT PARK')
    .typeText(streetNameSelector,'BAVDHAN')
    .click(sameAsAboveSelector)
    .click(clickNextSelector)

    //Previous Policy Details
    var FocuspreviouspolicyCalendar = ClientFunction(() => {
        document.getElementsByClassName('react-datepicker__input-container')[1].children[0].click()
        
    });
    
    await t
    
    await FocuspreviouspolicyCalendar();
    await t.click('.react-datepicker__day--027');
    
    const PreviousodpolicyNoSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div:nth-child(1) > div:nth-child(3) > div > div > div')
    const currentTPpolicyVendorSelector = Selector('#react-select-14-input')
    await t
    .typeText(PreviousodpolicyNoSelector,'ASDFG12345DF')
    .typeText(currentTPpolicyVendorSelector,'National insurance')
    .click('#react-select-14-option-0')

    var FocuspreviousTPpolicyCalendar = ClientFunction(() => {
        document.getElementsByClassName('react-datepicker__input-container')[2].children[0].click()
    });
    await t
    
    await FocuspreviousTPpolicyCalendar();
    await t.click('.react-datepicker__day--011');

    const CurrentTPpolicySelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div:nth-child(2) > div:nth-child(3) > div > div > div')
    const ClickNextSelector = Selector('#root > div.app-content > section > section > div > div.text-center.mb-5 > button')
    await t
    .typeText(CurrentTPpolicySelector,'ASD7654HH34')
    .click(ClickNextSelector)

    //Vehicle information

    var FocusRegistrationdateCalendar = ClientFunction(() => {
        document.getElementsByClassName('react-datepicker__input-container')[3].children[0].click()
    });
    await t
    
    await FocusRegistrationdateCalendar();
    await t.click('.react-datepicker__day--011');

    const RegistrationNoSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div:nth-child(1) > div.col > div > div > input:nth-child(2)')
    const RegistrationNOLastSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div:nth-child(1) > div.col > div > div > input.form-control-number.form-control')
    const ChassisNoSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div:nth-child(1) > div:nth-child(4) > div > div')
    const EngineNoSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div:nth-child(1) > div:nth-child(5) > div > div')
    const InspectionOptionSelector = Selector('#react-select-15-input')
    const PaymenttypeSelector = Selector('#root > div.app-content > section > section > div > div.tab-content.mb-4 > div.tab-pane.active > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div > label')
    const ClickNextpageSelector = Selector('#root > div.app-content > section > section > div > div.text-center.mb-5 > button')

    await t

    .typeText(RegistrationNoSelector,'as')
    .typeText(RegistrationNOLastSelector,'4567')
    .typeText(ChassisNoSelector,'ASDF543456GF')
    .typeText(EngineNoSelector,'ASDF6543EFSD')
    .typeText(InspectionOptionSelector,'Self Inspection')
    .click('#react-select-15-option-0')
    .click(PaymenttypeSelector)
    .click(ClickNextpageSelector)

    //summary page

    const DeclaredinfoSelector = Selector('#root > div.app-content > section > section > div > div.pt-4.d-flex > div > label')
    const ClickconfirmpaySelector = Selector('#root > div.app-content > section > section > div > div.text-center.my-5 > button')

    await t
    .click(DeclaredinfoSelector)
    .click(ClickconfirmpaySelector)
    .wait(5000)

});
