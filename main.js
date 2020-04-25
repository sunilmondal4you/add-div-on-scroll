var x = 0;
function myFunction() {
    var abc = document.getElementById('myDiv').offsetHeight;
    var pDivHt = document.getElementById('myDiv').scrollHeight;
    var scrollHt = pDivHt*.9;

    var elmnt = document.getElementById("myDiv");
    if((abc+elmnt.scrollTop) > scrollHt){
        const div = document.createElement('div');
        div.className = 'child2-div';

        document.getElementById('myDiv').appendChild(div);
    }
    scrollHt = undefined;
}