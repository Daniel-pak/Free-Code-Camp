//&amp;
//&lt;
//&gt;
//&quot;
//&apos;

//create empty string
//create loop to loop through string and find characters above
//for each not found, push spaces and letters 
//if found, push proper abbreviation into string
//return string


function convertHTML(str) {
    // &colon;&rpar;
    var emptyString = "";
    
    for (var i = 0; i < str.length; i++) { 
        if (str[i] === "&") {
            emptyString += "&amp;";
        } else if (str[i] === "<") { 
            emptyString += "&lt;";
        } else if (str[i] === ">") { 
            emptyString += "&gt;";
        } else if (str[i] === '"') { 
            emptyString += "&quot;";
        } else if (str[i] === "'") { 
            emptyString += "&apos;";
        } else { 
            emptyString += str[i];
        }
    }
    
    return emptyString;
}

convertHTML("Dolce & Gabbana");