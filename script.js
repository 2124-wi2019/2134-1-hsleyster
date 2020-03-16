window.addEventListener('load', function() {
    /* Write your solution between this comment */
/*Heather Sleyster
sleyster_assignment01b
INFO 2134
Thoendel
03/08/2020
*/

//This statements assign the age element to the variable a.
let a = document.getElementByName('age');

/*This for loop populates the option elements with numeric values up
to 100 and appends them to the option element.
*/
for (let i = 0, max = 100; i < max; i ++) {
let o = document.createElement('option');
o.setAttribute('value', i);
o.textContent(i);
a.appendChild('option');
}
/*This is the error check event listener to check if all fields
are filled out it uses the errorCheck callback function 
and the submit event.
*/
document.form.addEventListener('submit', errorCheck);

/*This errorCheck function checks the input and if not sends an 
error message in the text box added as the error-handler class
and prevents the form from submitting if the inputs are blank.
If there are no blank inputs then the form submits and the 
submitMessage is deisplayed.
*/
function errorCheck() {
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let age = document.getElementById('age');
if(firstName == "" && lastName == "" && age == "") {
    const errorMessage = document.getElementById('error-handler');
    const firstErrorText = document.createTextNode(`Error! Please correct the following
    before you can submit the form: /n
    * First Name cannot be left blank /n
    * Last Name cannot be ledt blank /n
    * Age cannont be left blank`);
    errorMessage.appendChild(firstErrorText);
}
        else if(lastName == "" && age == "") {
            const secondErrorText = document.createTextNode(`Error! Please correct the
            following before you can submit the form: /n
            * Last Name cannot be left blank /n
            * Age cannot be left blank`);
            errorMessage.appendChild(secondErrorText);
        }
                else if(age == "") {
                    const thirdErrorText = document.createTextNode(`Error! Please correct
                    the following before you can submit the form: /n
                    * Age cannot be left blank`);
                    errorMessage.appendChild(thirdErrorText);
                }
                    
    const doNotSubmit = document.getElementById('my-form');
    doNotSubmit.addEventListener('submit',(event) => { event.preventDefault();
    });

    const submit = document.getElementById('my-form');
    submit.addEventListener('submit', (event));
    const submitMessage = document.createTextNode(`Congratulations! /n
    Congratulations, you successfully submitted your form and now I know your /n
    name is ${firstName} ${lastName}. /n/n
    And according to your submission, you are ${age} years old.`);
}
    /* and this comment */
});