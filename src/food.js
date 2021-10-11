function tabThree() {
  const tabContent = document.createElement("div");
  tabContent.classList.add('tabcontent');
  tabContent.id = "Food";

  tabContent.innerHTML = `<span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
                          <h3>Food Menu</h3>
                          <h5>Grapefruit arugula salad</h5>
                          <p>Shaved fennel, endive drizzled with goat cheese crumbs and pomegranate seeds, pomegranate dressing</p>
                          <h5>Apple and Baby spinach salad</h5>
                          <p>Feta cheese, roasted corn, chopped hard boiled eggs, olive oil and lemon dressing</p>
                          <h5>Couscous Salad</h5>
                          <p>Seared Ahi tuna, chopped cabbage, cherry tomatoes, avocado, olive oil and lime dressing</p>
                          <h5>Fresh Guacamole</h5>
                          <p>Mashed avocado, chopped cilantro, diced tomatoes & red onions served with tostada chips</p>
                          <h5>Chicken and Shrimp Steamed Dumplings</h5>
                          <p>Sweet Thai chili sauce</p>
                          <h5>Raw Ahi</h5>
                          <p>Mixed with avocado, corn, scallions, olive oil & topped with red chili oil, served with crispy wontons</p>
                          <h5>Grilled filet mignon baguette sandwich</h5>
                          <p>Avocado, roasted peppers, lettuce and chipotle mayonnaise</p> 
                          <h5>Fried Goat Cheese Empanadas</h5>
                          <p>Served with a criolla sauce</p>
                          <h5>Three Beef Sliders</h5>
                          <p>Served with blue cheese, caramelized onions, lettuce and sliced tomato on brioche buns</p>`;
  return tabContent;
};

export default tabThree