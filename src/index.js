import tabOne from './events';
import tabTwo from './coctails';
import tabThree from './food';
import tabFour from './About';
import './style.css';

function tabs() {
  var content = document.getElementById("content");
  // Create menu btn wrapper
  var tab = document.createElement("div");
  tab.classList.add('tab');
  // Get menu btn content from import
  tab.innerHTML = `<button class="tablinks" onclick="menuBtns(event, 'Events')">Events</button>
                   <button class="tablinks" onclick="menuBtns(event, 'Coctails')">Coctails</button>
                   <button class="tablinks" onclick="menuBtns(event, 'Food')">Food Menu</button>
                   <button class="tablinks" onclick="menuBtns(event, 'Contact')" id="defaultOpen">Contact</button>`;
  // Add to html#content
  content.appendChild(tab);
  content.appendChild(tabOne());
  content.appendChild(tabTwo());
  content.appendChild(tabThree());
  content.appendChild(tabFour());
}

document.body.appendChild(tabs());