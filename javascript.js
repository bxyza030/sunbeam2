// Bind javascript to html div element with id = output
const output = document.getElementById("output");
const button = document.getElementById("buttontopress");

button.addEventListener("click", function() {

        // Make an output template for the member information
        // and CSS styling references. I need to use "let" and
        // not "const" since the template will change for 
        // each member
        let template = ""; // Empty template

        // Iterate through memberlist(objects) and show information
        for (const member of memberlist) { // Using global variable memberlist here

            // Instead of double or single quotation i use
            // backticks (`) to embrace the template content.
            // Backticks allows me to write the codes on 
            // multiple lines and include double and/or 
            // single quotation without javascript becoming 
            // confused. 
            template = `
        <section class="member">
        <img src="${member.image}" alt="Member" class="image"> 
        <div class="names">
            ${member.firstname} ${member.lastname}
        </div>
        <div class="age">
            ${member.age}
        </div>
	    <div>
	    <a href="detail.html?image=${member.image}&firstname=${member.firstname}&lastname=${member.lastname}&age=${member.age}">See details</a>	
	    </div>
        </section>`

            // Show template content in output div
            output.insertAdjacentHTML("beforeend", template)

        } // end of iteration

    }) // end of eventlistener