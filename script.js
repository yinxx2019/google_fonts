//dark light
function darkView() { 
  document.getElementById("dark_light").href = "dark.css";
};

function lightView() {
  document.getElementById("dark_light").href = "light.css";
};

var elDark = document.getElementById("dark");
elDark.addEventListener("click", darkView);

var elLight = document.getElementById("light");
elLight.addEventListener("click", lightView);

// list grid
var fonts = document.getElementsByClassName("fonts");

var i;

// list
function listView() {
  for (i = 0; i < fonts.length; i++) {
    fonts[i].style.width = "100%";
  }
}
  
  // grid
function gridView() {
  for (i = 0; i < fonts.length; i++) {
    fonts[i].style.width = "22%";
  }
}

  // switch icon
function displayListGrid() {
  let elDisplay = document.getElementById("list").style.display;
  if ( elDisplay == "none") {
  document.getElementById("list").style.display = "inline-block";
  document.getElementById("grid").style.display = "none";
  gridView()
} else {
  document.getElementById("list").style.display = "none";
  document.getElementById("grid").style.display = "inline-block";
  listView()
}
}

var elGrid = document.getElementById("grid");
elGrid.addEventListener("click", displayListGrid);

var elList = document.getElementById("list");
elList.addEventListener("click", displayListGrid);

// font size
function FontSize() {
  let FontSizeSelect = document.getElementById("font_size").selectedIndex;
  let sizes = document.getElementsByTagName("option")[FontSizeSelect].value
  let getFontSize = document.getElementsByClassName("text")
  for (i = 0; i < getFontSize.length; i++) {
    if (sizes == "20px") {
      getFontSize[i].style.fontSize = "20px";
    } else if (sizes == "24px") {
      getFontSize[i].style.fontSize = "24px";
    } else if (sizes == "32px") {
      getFontSize[i].style.fontSize = "32px";
    } else if (sizes == "36px") {
      getFontSize[i].style.fontSize = "36px";
    }
  }
}

var elFontSize = document.getElementById("font_size");
elFontSize.addEventListener("change", FontSize, false);

// type area
function type() {
  let input = document.getElementById("type").value
  let getText = document.getElementsByClassName("text")
  for (i = 0; i < getText.length; i++) {
    getText[i].innerHTML = input
    if (input == 0) {
      getText[i].innerHTML = "This is my Chingu Solo Project"
    }
  }
}

var elText = document.getElementById("type")
elText.addEventListener("input", type, false);