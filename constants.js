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

const shrineC1 = 'rgb(15,173,235)';
const shrineC2 = 'rgb(45,56,139)';

const iconLight = ' ';
const iconDark = ' ';


class Icons { //class to hold all of the Icon SVGs
    constructor() {
        this.shrineIcon = `
        <svg width="10%" height="10%" 
            viewBox="0 0 1000 1000" 
            id="shrine" class = 'shrine' version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            xml:space="preserve" xmlns:serif="http://www.serif.com/" 
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;">

            <path d="M222,469.06L495.3,200L768.31,469.06L495.3,741.38L222,469.06ZM535.02,563.22C535.02,529.75 451.35,527.21 451.35,563.22L451.35,633.11L495.65,670.51L535.02,633.11L535.02,563.22ZM633.45,529.75L692.51,469.06L495.15,275.79L298.78,469.06L359.81,529.75C376.51,502.54 400.03,474.47 429.62,456.45L429.62,402.77C440.99,329.1 545.64,325.23 559.94,402.77L559.94,456.45C589.52,474.47 616.75,502.54 633.45,529.75Z" style="fill:rgb(15,173,235);stroke:rgb(45,56,139);stroke-width:12px;"/>
        </svg>`;

        this.towerIcon = ' ';

        this.resHallIcon = `
        <svg width="3%" height="3%" viewBox="0 0 1000 1040" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <rect id="Artboard1" x="0" y="0" width="1000" height="1039.37" style="fill:none;"/>
            <clipPath id="_clip1">
                <rect id="Artboard11" serif:id="Artboard1" x="0" y="0" width="1000" height="1039.37"/>
            </clipPath>
              id="resHallIcon" class = 'resHallIcon'
            <g clip-path="url(#_clip1)">
                <path d="M0,100C-0,73.478 10.536,48.043 29.289,29.289C48.043,10.536 73.478,0 100,-0L900,0C926.522,0 951.957,10.536 970.711,29.289C989.464,48.043 1000,73.478 1000,100C1000,298.617 1000,740.753 1000,939.37C1000,965.892 989.464,991.327 970.711,1010.08C951.957,1028.83 926.522,1039.37 900,1039.37L100,1039.37C73.478,1039.37 48.043,1028.83 29.289,1010.08C10.536,991.327 -0,965.892 0,939.37L0,100Z" style="fill:rgb(198,183,119);"/>
                <g id="building" transform="matrix(1,0,0,1,37.1038,-24.682)">
                    <g id="res-hall" serif:id="res hall">
                        <g id="building1" serif:id="building">
                            <path d="M234.848,847.155L236.91,227.692L523.44,227.692L523.44,847.155L234.848,847.155Z" style="fill:rgb(165,140,83);"/>
                            <g transform="matrix(1,0,0,1,-136,0)">
                                <path d="M657.052,847.155L826.944,847.155L826.944,453.933L654.536,453.875L657.052,847.155Z" style="fill:rgb(165,140,83);"/>
                            </g>
                            <path d="M365.083,861.042L366.165,729.38L440.973,729.946L439.9,861.042L365.083,861.042" style="fill:rgb(198,183,119);"/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>`;
    
        this.labIcon = `
        <svg width="3%" height="3%" viewBox="0 0 1000 1040" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <rect id="Artboard1" x="0" y="0" width="1000" height="1039.37" style="fill:none;"/>
            <clipPath id="_clip1">
                <rect id="Artboard11" serif:id="Artboard1" x="0" y="0" width="1000" height="1039.37"/>
            </clipPath>
             id="labIcon" class = 'labIcon'
            <g clip-path="url(#_clip1)">
                <path d="M0,100C-0,73.478 10.536,48.043 29.289,29.289C48.043,10.536 73.478,0 100,-0L900,0C926.522,0 951.957,10.536 970.711,29.289C989.464,48.043 1000,73.478 1000,100C1000,298.617 1000,740.753 1000,939.37C1000,965.892 989.464,991.327 970.711,1010.08C951.957,1028.83 926.522,1039.37 900,1039.37L100,1039.37C73.478,1039.37 48.043,1028.83 29.289,1010.08C10.536,991.327 -0,965.892 0,939.37L0,100Z" style="fill:rgb(198,183,119);"/>
                <g id="beaker" transform="matrix(1,0,0,1,-3.28534,-11.2429)">
                    <g id="lab">
                        <g id="beaker1" serif:id="beaker">
                            <g transform="matrix(0.878343,0,0,0.878343,87.2595,236.61)">
                                <path d="M408.196,219.22C296.559,221.512 294.926,272.933 400.062,285.781C455.024,292.498 375.148,489.649 375.148,489.649C303.051,577.434 205.46,685.366 211.114,742.988C220.6,839.668 321,844.951 321,844.951L638.474,844.951C638.474,844.951 745.412,848.22 735.808,734.925C728.838,652.71 633.63,590.266 575.899,485.531C566.878,469.167 509.107,285.05 558.037,284.127C669.565,282.024 671.388,217.573 556.822,219.734C494.1,220.916 446.098,218.442 408.196,219.22Z" style="fill:rgb(165,140,83);"/>
                            </g>
                            <g transform="matrix(1.34286,0,0,1.34286,-276.83,-131.549)">
                                <ellipse cx="608.337" cy="340.435" rx="29.193" ry="26.24" style="fill:rgb(165,140,83);"/>
                            </g>
                            <g transform="matrix(1.34286,0,0,1.34286,-276.83,-131.549)">
                                <ellipse cx="519.977" cy="255.398" rx="59.167" ry="58.797" style="fill:rgb(165,140,83);"/>
                            </g>
                            <g transform="matrix(1.34286,0,0,1.34286,-276.83,-131.549)">
                                <ellipse cx="634.188" cy="185.169" rx="24.079" ry="25.34" style="fill:rgb(165,140,83);"/>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>`;

        this.diningIcon = `
        <svg width="3%" height="3%" viewBox="0 0 1000 1040" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <rect id="Artboard1" x="0" y="0" width="1000" height="1039.37" style="fill:none;"/>
            <clipPath id="_clip1">
                <rect id="Artboard11" serif:id="Artboard1" x="0" y="0" width="1000" height="1039.37"/>
            </clipPath>
            id= 'diningIcon' class ='diningIcon'
            <g clip-path="url(#_clip1)">
                <path d="M0,100C-0,73.478 10.536,48.043 29.289,29.289C48.043,10.536 73.478,0 100,-0L900,0C926.522,0 951.957,10.536 970.711,29.289C989.464,48.043 1000,73.478 1000,100C1000,298.617 1000,740.753 1000,939.37C1000,965.892 989.464,991.327 970.711,1010.08C951.957,1028.83 926.522,1039.37 900,1039.37L100,1039.37C73.478,1039.37 48.043,1028.83 29.289,1010.08C10.536,991.327 -0,965.892 0,939.37L0,100Z" style="fill:rgb(198,183,119);"/>
                <g id="dining">
                    <g transform="matrix(1.28565,0,0,1.16693,-69.683,-103.151)">
                        <path d="M278.161,752.517C275.1,842.711 331.303,849.548 334.532,754.43C337.761,659.312 340.22,586.853 340.22,586.853C340.22,586.853 341.733,479.287 342.159,448.984C342.435,429.359 352.149,432.366 374.112,408.41C391.536,389.405 396.175,348.998 379.921,280.997C365.095,218.971 271.468,221.792 258.933,282.964C249.631,328.358 230.535,375.752 258.787,409.048C278.732,432.556 287.291,438.768 287.974,450.05C288.467,458.185 283.789,586.716 283.789,586.716C283.789,586.716 279.166,722.904 278.161,752.517Z" style="fill:rgb(165,140,83);"/>
                    </g>
                    <g transform="matrix(1.05659,0,0,1.05659,-28.2414,-48.9233)">
                        <path d="M538.814,356.877C538.94,148.38 502.284,191.571 502.183,358.225C502.165,388.719 489.488,417.96 515.121,440.284C540.753,462.608 576.478,443.9 581.478,518.422C583.506,548.661 581.027,682.924 581.027,682.924C581.027,682.924 585.163,781.989 586.368,810.861C589.4,883.47 656.502,882.162 653.409,808.062C651.528,763.014 647.9,676.128 647.9,676.128C647.9,676.128 636.781,560.102 636.289,518.837C635.546,456.403 649.824,459.046 668.461,451.891C722.975,430.964 707.873,406.057 702.78,350.137C688.428,192.541 665.721,151.422 662.292,349.074C661.635,386.903 631.84,376.251 628.375,348.486C595.149,82.185 576.061,292.056 578.749,350.758C580.772,394.957 538.807,368.348 538.814,356.877Z" style="fill:rgb(165,140,83);"/>
                    </g>
                </g>
            </g>
        </svg>`;

        this.goatIcon = `
        <svg width="3%" height="3%" viewBox="0 0 1000 1040" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <rect id="Artboard1" x="0" y="0" width="1000" height="1039.37" style="fill:none;"/>
            <clipPath id="_clip1">
                <rect id="Artboard11" serif:id="Artboard1" x="0" y="0" width="1000" height="1039.37"/>
            </clipPath>
            id="goatIcon" class = 'goatIcon'
            <g clip-path="url(#_clip1)">
                <path d="M0,100C-0,73.478 10.536,48.043 29.289,29.289C48.043,10.536 73.478,0 100,-0L900,0C926.522,0 951.957,10.536 970.711,29.289C989.464,48.043 1000,73.478 1000,100C1000,298.617 1000,740.753 1000,939.37C1000,965.892 989.464,991.327 970.711,1010.08C951.957,1028.83 926.522,1039.37 900,1039.37L100,1039.37C73.478,1039.37 48.043,1028.83 29.289,1010.08C10.536,991.327 -0,965.892 0,939.37L0,100Z" style="fill:#c6b777;"/>
                <g id="icon">
                    <path d="M28.988,201.822C28.988,201.822 125.329,276.011 221.976,231.936C321.236,186.669 415.592,209.656 452.226,268.847C467.351,293.285 480.323,314.245 480.323,314.245L518.873,314.245C518.873,314.245 563.892,238.296 591.281,229.524C617.744,221.049 650.199,191.797 820.157,238.99C894.635,259.67 969.341,201.822 969.341,201.822C969.341,201.822 962.375,267.909 909.404,289.168C856.432,310.428 755.18,313.973 728.046,306.055C700.912,298.137 648.771,312.752 643.181,320.712C637.591,328.672 690.548,324.768 718.774,394.525C746.651,463.421 798.918,487.963 821.613,483.802C833.171,481.682 755.199,544.119 669.479,511.699L597.178,689.2C597.178,689.2 605.853,768.177 562.24,810.832C538.355,834.194 464.401,831.105 437.828,810.832C411.256,790.56 402.806,689.2 402.806,689.2L330.331,511.699C330.331,511.699 268.657,531.039 242.937,520.604C217.217,510.17 186.33,495.334 177.976,484.714C169.623,474.094 235.728,491.118 266.168,424.793C310.037,329.206 358.647,324.441 358.647,324.441C358.647,324.441 365.505,297.363 207.327,312.412C47.386,327.628 28.988,201.822 28.988,201.822Z" style="fill:#a58c53;"/>
                    <g transform="matrix(-1.24097,-0.387509,-0.377419,1.20866,1341.41,135.043)">
                        <path d="M563.434,511.699C582.15,480.732 611.902,469.814 633.846,483.077C640.62,487.171 610.926,511.699 610.926,511.699C610.926,511.699 559.876,517.586 563.434,511.699Z" style="fill:#c6b777;"/>
                    </g>
                    <g transform="matrix(1.24097,-0.387509,0.377419,1.20866,-336.22,135.043)">
                        <path d="M563.434,511.699C582.15,480.732 611.902,469.814 633.846,483.077C640.62,487.171 610.926,511.699 610.926,511.699C610.926,511.699 559.876,517.586 563.434,511.699Z" style="fill:#c6b777;"/>
                    </g>
                    <path d="M597.178,689.2L669.479,511.699" style="fill:none;"/>
                </g>
            </g>
        </svg>`;
    }

    insertShrineIcon(elementId) {
        document.getElementById(elementId).innerHTML = this.shrineIcon;
    }
    insertGoatIcon(elementId) {
        document.getElementById(elementId).innerHTML = this.goatIcon;
    }
    insertDiningIcon(elementId) {
        document.getElementById(elementId).innerHTML = this.diningIcon;
    }
    insertlabIcon(elementId){
        document.getElementById(elementId).innerHTML = this.labIcon;
    }
    insertResHallIcon(elementId){
        document.getElementById(elementId).innerHTML = this.resHallIcon;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const icons = new Icons();
    icons.insertShrineIcon('shrine');
    icons.insertGoatIcon('goatIcon');
    icons.insertDiningIcon('diningIcon');
    icons.insertlabIcon('labIcon');
    icons.insertResHallIcon('resHallIcon');

});

// Links class
class Links { //class to manage links
    constructor() {
        this.wpiLinks = {
            daniels: "https://www.wpi.edu/about/locations/daniels-hall",
            east: "https://www.wpi.edu/about/locations/east-hall",
            morgan: "https://www.wpi.edu/about/locations/morgan-hall",
            riley: "https://www.wpi.edu/about/locations/sanford-riley-hall",
            messenger: "https://www.wpi.edu/about/locations/messenger-hall",
            founders: "https://www.wpi.edu/about/locations/founders-hall",
            institute: "https://www.wpi.edu/about/locations/institute-hall",
            stoddard: "https://www.wpi.edu/about/locations/stoddard-complex",
            ellsworth: "https://www.wpi.edu/about/locations/ellsworth-apartments",
            fuller: "https://www.wpi.edu/about/locations/fuller-apartments"
        };
    }
}

class baseMap{ //class to control the base map
    constructor(){
        this.mainMap = 'placeholder4';
    }
}