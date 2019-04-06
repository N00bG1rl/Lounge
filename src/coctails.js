function tabTwo() {
  const tabContent = document.createElement("div");
  tabContent.classList.add('tabcontent');
  tabContent.id = "Coctails";

  tabContent.innerHTML = `<span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
                          <h3>Coctails</h3>
                          <h5>Around the World</h5>
                          <p>Hendrick’s Gin, St~Germain Elderflower Liqueur, Pama, Pomegranate Liqueur, 
                          Cucumber, Pineapple Juice, Lime Juice</p>
                          <h5>Malibu Mango Breeze</h5>
                          <p>Malibu Rum, Bacardi Rum, Mango Puree, Pineapple Juice, Cranberry Juice</p>
                          <h5>Big Apple Sangria</h5>
                          <p>Alamos Malbec, Cointreau, Pomegranate Liqueur, Orange, Apple</p>
                          <h5>Gin N’ Roses</h5>
                          <p>Brockmans Gin, Vermouth, Rose Water, Bitters, Rose Petal Garnis</p>
                          <h5>Bloody Bourbon</h5>
                          <p>Bulleit Bourbon, Housemade Bloody Mary Mix, Bacon Garnish</p>
                          <h5>Spiced Mexican PM</h5>
                          <p>House-Infused Jalapeño Casamigos Tequila, Pomegranate Juice, Lime Juice</p>
                          <h5>Top of the View</h5>
                          <p>Bacardi superior, Malibu rum, guava nectar, pineapple juice, orange juice, fresh lime juice, splash of grenadine</p>`;
  return tabContent;
};
export default tabTwo