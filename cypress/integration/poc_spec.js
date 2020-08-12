it('Proof of Concept', () => {
  // Login
  cy.visit('/inbox/login');

  cy.get('[name=username]').type('renatatest1');
  cy.get('[name=password]').type('password');

  cy.get('button[type=submit]').click();

  cy.contains('.v-btn', 'New').should('exist');

  // Create a new Report
  cy.wait(1000);
  cy.contains('.v-btn', 'New').click();

  cy.contains('.v-dialog', /Compose a New Report .*/).as('report-dialog');
  cy.get('@report-dialog').should('exist');

  // Select the 'Qa Question' Report type
  cy.get('@report-dialog').find('input[name=channel]').first().click();
  cy.get('.v-menu__content').contains('.v-list-item', 'Qa Questions').click();

  cy.contains('button[type=submit]', 'Compose Report').should(
    'not.have.class',
    'v-btn--disabled'
  );
  cy.contains('button[type=submit]', 'Compose Report').click();

  // Complete the report, filling in all answers
  cy.contains('.report-form__step__element', 'Country?')
    .find('input')
    .first()
    .click();
  cy.contains('.v-list-item', 'Albania').click();

  cy.contains('.report-form__step__element', 'How this happened?')
    .find('input')
    .type('Test answer');

  cy.contains('.report-form__step__element', 'Give more details')
    .find('textarea')
    .type('Test details');

  cy.contains('.report-form__step__element', 'Select multiple').as(
    'select-multiple'
  );
  cy.get('@select-multiple').contains('.v-input__control', 'Option 1').click();
  cy.get('@select-multiple').contains('.v-input__control', 'Option 3').click();

  cy.contains('.report-form__step__element', 'Inform number')
    .find('input')
    .first()
    .type('123');

  cy.contains('.report-form__step__element', 'Date?')
    .find('input')
    .first()
    .click();
  cy.get('.v-picker').contains('.v-btn', '12').click();
  cy.get('.v-picker').contains('.v-btn', 'Ok').click();

  cy.contains('.report-form__step__element', 'Who?')
    .find('input')
    .first()
    .click();
  cy.contains('.v-list-item', 'Qa Test').click();

  cy.contains('.v-btn', 'Save Progress and Continue').click();

  cy.contains('.report-form__step__element', 'Multiple Choice Radiobutton')
    .contains('.v-radio', 'Option B')
    .click();

  cy.contains(
    '.report-form__step__element',
    'Multiple Choice Single Selection Dropdown'
  )
    .find('.v-select__slot')
    .click();
  cy.contains('.v-list-item__title', 'Option II').click();

  cy.contains(
    '.report-form__step__element',
    'Multiple Choice Checkbox Dropdown'
  )
    .find('.v-select__slot')
    .click();
  cy.contains('.v-list-item__title', 'Option One').click();
  cy.contains('.v-list-item__title', 'Option Two').click();

  cy.contains('.v-btn', 'Save Progress and Continue').click();

  // Submit the report
  cy.contains('.v-btn', 'Submit Report').click();
  cy.contains('.v-dialog', /Your report has been sent .*/).should('exist');
});
