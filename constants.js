//color definitions
const land1 = "#3D2E00";
const land2 = "#382F17";
const land3 = "#443408";
const land4 = "#50431C";
const land5 = "#6B613C";
const land6 = "#C6C7B1";

const waterLight = "#354146";
const waterDark = "#212A2E";

const paths = "#99925D";
const linework = "#241C05";

//map 

const shrineIcon = `
<svg width="10%" height="10%" 
    viewBox="0 0 1000 1000" 
    id="shrine" version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    xml:space="preserve" xmlns:serif="http://www.serif.com/" 
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;">

    <path d="M222,469.06L495.3,200L768.31,469.06L495.3,741.38L222,469.06ZM535.02,563.22C535.02,529.75 451.35,527.21 451.35,563.22L451.35,633.11L495.65,670.51L535.02,633.11L535.02,563.22ZM633.45,529.75L692.51,469.06L495.15,275.79L298.78,469.06L359.81,529.75C376.51,502.54 400.03,474.47 429.62,456.45L429.62,402.77C440.99,329.1 545.64,325.23 559.94,402.77L559.94,456.45C589.52,474.47 616.75,502.54 633.45,529.75Z" style="fill:rgb(15,173,235);stroke:rgb(45,56,139);stroke-width:12px;"/>
</svg>
`;

document.getElementById('shrine').innerHTML = shrineIcon;


