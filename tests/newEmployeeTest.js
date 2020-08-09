'Test data': browser => {
  var newEmployee = { name: 'Peter Parker', phone: '9174565827', title: 'Spidey' }

  browser
    .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    .waitForElementVisible('li[name="addEmployee"]')
    .click('li[name="addEmployee"]')
    .click('li[name="employee11"]')
    .clearValue('input[name="nameEntry"]')
    .setValue('input[name="nameEntry"]', newEmployee.name)
    .clearValue('input[name="phoneEntry"]')
    .setValue('input[name="phoneEntry"]', newEmployee.phone)
    .clearValue('input[name="titleEntry"]')
    .setValue('input[name="titleEntry"]', newEmployee.title)
}