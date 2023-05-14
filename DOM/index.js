/*

- targeting elements by id, class tagname etc
- it will return an list, hence we need to specily the index, to target the particular element.

*/
document.getElementsByClassName("container")[0].style.backgroundColor="white";

/*

- Editing inner html vs text-content

- text content will replace the text only, meanwhile innerhtml replaces the whole content

*/

document.querySelector(".heading h1").textContent="Not the First title";

document.querySelector(".heading h1").innerHTML="<em>Not the First title</em>";

/*

using childElement

*/

// document.firstElementChild.firstElementChild.nextElementSibling.
// firstElementChild.firstElementChild.firstElementChild.style.color="red";


/*

- getting and setting attribute
- defined a new class with different properties, then attaching it to
  existing element using "setAttribute"

*/

console.log(document.querySelector(".content .list .l1").getAttribute("class"));

document.querySelector(".content .list .l1").setAttribute("class","dummy");


/*

- getting class list, then changing the class, to change the CSS styles

*/

document.querySelectorAll("ul li")[2].classList.remove("d2");