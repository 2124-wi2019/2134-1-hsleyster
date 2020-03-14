window.addEventListener('load', function() {
    /* Write your solution between this comment */
/*Heather Sleyster
sleyster_assignment01b
INFO 2134
Thoendel
03/08/2020
*/

/*These statements assign the select tag to the variable s 
and the option tags to the o array.
*/
let a = document.getElementByName('age');
let v = document.getElementsByName('value');
let o = document.createElement('option');

/*This for loop populates the o array with numeric values up
to 100 and appends them to the option tag.
*/
for (let i = 0, max = 100; i < max; i ++) {
o.setAttribute('value', v[i]);
o.textContent(v[i]);
a.appendChild('option');
}
/*This is the error check event listener to check if all fields
are filled out
*/
document.form.addEventListener('submit', errorCheck);

/*This errorCheck function checks the input and if not sends an 
error message in the text box added as the error-handler class
and prevents the form from submitting if the inputs are blank.
*/
function errorCheck() {
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let age = document.getElementById('age');
if(firstName == "" || lastName == "" || age == "") {
    const errorMessage = document.getElementById('error-handler');
    const firstErrorText = document.createTextNode(`Error! Please correct the following
    before you can submit the form: /n
    * First Name cannot be left blank /n
    * Last Name cannot be ledt blank /n
    * Age cannont be left blank`);
    errorMessage.appendChild(firstErrorText);
}
        else if(lastName == "" || age == "") {
            const secondErrorText = document.createTextNode(`Error! Please correct the
            following before you can submit the form: /n
            * Last Name cannot be left blank /n
            * Age cannot be left blank`);
            errorMessage.appendChild(secondErrorText);
        }
                else(age == "") {
                    const thirdErrorText = document.createTextNode(`Error! Please correct
                    the following before you can submit the form: /n
                    * Age cannot be left blank`);
                    errorMessage.appendChild(thirdErrorText);
                }
    
    const doNotSubmit = document.getElementById('my-form');
    doNotSubmit.addEventListener('submit',(event) => { event.preventDefault();
    });
}
    /* and this comment */
});