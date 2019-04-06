import myName from './resto';
import homeTab from './homeTab';
import menuTab from './menuTab';
import mapTab from './mapTab';
import openCity from './load';
import _ from 'lodash';
import './style.css';
import main from './main.jpg';

function component() {
  var content = document.getElementById("content");

  // use your function!
  content.innerHTML = myName('Cody');
  content.classList.add('nav');

  return content;
}
document.body.appendChild(component());

var content = document.getElementById("content");


function tabs() {
  var tab = document.createElement("div");
  tab.classList.add('tab');

  tab.innerHTML = `<button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">London</button>
                   <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
                   <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>`;
                   
  content.appendChild(tab);
  content.appendChild(homeTab());
  content.appendChild(menuTab());
  content.appendChild(mapTab());
  
}

document.body.appendChild(tabs());
