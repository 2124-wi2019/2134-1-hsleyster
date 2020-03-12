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
let s = document.createElement('select');
let o = document.getElementsByTagName('option');

/*This for loop populates the o array with numeric values up
to 100 and appends them to the option tag.
*/
for (let i = 0, max = 100; i < max; i ++) {
s.textContent = o[i];
s.appendChild('option');
}
/*This is the error check event listener to check if all fields
are filled out
*/
document.form.addEventListener('click', errorCheck);

/*This errorCheck function checks the input and if not sends an 
error message in the text box added as the error-handler class
and prevents the form from submitting if the inputs are blank.
*/
function errorCheck() {
let input = document.getElementsByTagName('input');
if(input == "") {
    const errorMessage = document.getElementById('error-handler');
    const errorText = document.createTextNode('Error! You must complete all fields!');
    errorMessage.appendChild(errorText);
    const doNotSubmit = document.getElementById('my-form');
    doNotSubmit.addEventListener('click',(event) => { event.preventDefault();
    });
}
}
    /* and this comment */
});