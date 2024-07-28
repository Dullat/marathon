import nameSvg from "../assets/gol-logo.svg"
import bottomBG from "../assets/goliath_about_bg_desktop_large.jpg"

const HeroBottom = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bottomBG})` }}
      className="bg-cover bg-center px-[10%] text-white relative grid grid-cols-4 grid-rows-hero"
    >
      <div className="px-4 col-span-4 justify-self-center h-fit relative w-full">
        <div className="w-full top-0 translate-y-[-50%] h-fit">
          <img src={nameSvg} alt="" />
        </div>
      </div>
      <p className="text-3xl row-start-2 col-span-3 row-end-3 h-fit mb-20">
        a massive ghost ship hangs in low orbit over a lost colony on Tau Ceti
        IV. The 30,000 souls who call this place home have disappeared without a
        trace. Strange signals hint at mysterious artifacts, long-dormant AI,
        and troves of untold riches. You are a Runner, venturing into the
        unknown in a fight for fame… and infamy. Who among you will write their
        names across the stars?
      </p>
      <div className="row-start-2 col-span-1 h-fit justify-self-end">
        <svg
          width="6rem"
          height="5.9rem"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0024 0C5.82105 0 0 5.62352 0 12.5612C0 18.911 4.88286 24.1452 11.212 24.9892V16.5982C7.68468 15.8157 5.0525 12.7712 5.0525 9.12273C5.0525 4.88644 8.61171 1.448 12.9968 1.448C17.3819 1.448 20.9411 4.88644 20.9411 9.12273C20.9411 12.7912 18.2715 15.8565 14.7123 16.6136V25C21.0781 24.1867 25.9984 18.9372 25.9984 12.5612C26 5.62352 20.1789 0 12.9968 0H13.0024Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="relative row-start-3 col-span-2 grid-rows-subgrid grid-cols-subgrid h-max">
        <span className="bg-[#823b70] px-2 py-1 absolute z-10">
          889-UTC: 2019
        </span>
        <svg
          className="w-full h-fit"
          viewBox="0 0 613 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.15873 -93.1089L-525.117 306.518L-524.472 307.001L8.80385 -92.6255L8.15873 -93.1089Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M18.6587 -93.1153L-514.617 306.511L-513.972 306.995L19.3038 -92.6318L18.6587 -93.1153Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M29.1519 -93.1162L-504.124 306.51L-503.479 306.994L29.797 -92.6328L29.1519 -93.1162Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M39.6455 -93.1104L-493.63 306.516L-492.985 307L40.2907 -92.6269L39.6455 -93.1104Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M50.1363 -93.1167L-483.14 306.51L-482.495 306.993L50.7814 -92.6333L50.1363 -93.1167Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M60.6299 -93.1109L-472.646 306.516L-472.001 306.999L61.275 -92.6274L60.6299 -93.1109Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M71.1294 -93.117L-462.146 306.51L-461.501 306.993L71.7746 -92.6335L71.1294 -93.117Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M81.6226 -93.1116L-451.653 306.515L-451.008 306.998L82.2677 -92.6282L81.6226 -93.1116Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M92.1231 -93.1175L-441.153 306.509L-440.508 306.992L92.7682 -92.634L92.1231 -93.1175Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M102.616 -93.1119L-430.66 306.515L-430.015 306.998L103.261 -92.6284L102.616 -93.1119Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M113.117 -93.1177L-420.159 306.509L-419.514 306.992L113.762 -92.6343L113.117 -93.1177Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M123.61 -93.1119L-409.666 306.515L-409.021 306.998L124.255 -92.6284L123.61 -93.1119Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M134.103 -93.1133L-399.173 306.513L-398.528 306.997L134.748 -92.6299L134.103 -93.1133Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M144.603 -93.1123L-388.673 306.514L-388.028 306.998L145.248 -92.6289L144.603 -93.1123Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M155.097 -93.1136L-378.179 306.513L-377.534 306.996L155.742 -92.6301L155.097 -93.1136Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M165.597 -93.1128L-367.679 306.514L-367.034 306.997L166.242 -92.6294L165.597 -93.1128Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M176.09 -93.1141L-357.186 306.512L-356.541 306.996L176.735 -92.6306L176.09 -93.1141Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M186.59 -93.1131L-346.686 306.513L-346.041 306.997L187.235 -92.6296L186.59 -93.1131Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M197.084 -93.1143L-336.192 306.512L-335.547 306.996L197.729 -92.6309L197.084 -93.1143Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M207.584 -93.1136L-325.692 306.513L-325.047 306.996L208.229 -92.6301L207.584 -93.1136Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M218.077 -93.1148L-315.199 306.512L-314.554 306.995L218.722 -92.6313L218.077 -93.1148Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M228.57 -93.1089L-304.706 306.518L-304.06 307.001L229.215 -92.6255L228.57 -93.1089Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M239.07 -93.1153L-294.206 306.511L-293.56 306.995L239.715 -92.6318L239.07 -93.1153Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M249.564 -93.1094L-283.712 306.517L-283.067 307.001L250.209 -92.626L249.564 -93.1094Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M260.064 -93.1153L-273.212 306.511L-272.567 306.995L260.709 -92.6318L260.064 -93.1153Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M270.557 -93.1097L-262.719 306.517L-262.074 307L271.202 -92.6262L270.557 -93.1097Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M281.057 -93.1158L-252.219 306.511L-251.574 306.994L281.702 -92.6323L281.057 -93.1158Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M291.542 -93.11L-241.734 306.517L-241.089 307L292.187 -92.6265L291.542 -93.11Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M302.042 -93.1163L-231.234 306.51L-230.589 306.994L302.687 -92.6329L302.042 -93.1163Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M312.535 -93.1105L-220.741 306.516L-220.096 307L313.18 -92.627L312.535 -93.1105Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M323.028 -93.1119L-210.248 306.515L-209.603 306.998L323.673 -92.6285L323.028 -93.1119Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M333.528 -93.1109L-199.748 306.516L-199.103 306.999L334.173 -92.6274L333.528 -93.1109Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M344.022 -93.1119L-189.254 306.515L-188.609 306.998L344.667 -92.6284L344.022 -93.1119Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M354.522 -93.1111L-178.754 306.515L-178.109 306.999L355.167 -92.6277L354.522 -93.1111Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M365.015 -93.1123L-168.261 306.514L-167.616 306.998L365.66 -92.6289L365.015 -93.1123Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M375.515 -93.1116L-157.761 306.515L-157.116 306.998L376.16 -92.6282L375.515 -93.1116Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M386.008 -93.1128L-147.268 306.514L-146.622 306.997L386.653 -92.6294L386.008 -93.1128Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M396.508 -93.1184L-136.768 306.508L-136.122 306.991L397.153 -92.635L396.508 -93.1184Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M407.002 -93.1131L-126.274 306.513L-125.629 306.997L407.647 -92.6296L407.002 -93.1131Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M417.495 -93.1143L-115.781 306.512L-115.136 306.996L418.14 -92.6309L417.495 -93.1143Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M427.995 -93.1133L-105.281 306.513L-104.636 306.997L428.64 -92.6299L427.995 -93.1133Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M438.489 -93.1148L-94.7871 306.512L-94.142 306.995L439.134 -92.6313L438.489 -93.1148Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M448.988 -93.1138L-84.2876 306.513L-83.6425 306.996L449.633 -92.6304L448.988 -93.1138Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M459.482 -93.1153L-73.7939 306.511L-73.1488 306.995L460.127 -92.6318L459.482 -93.1153Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M469.982 -93.1143L-63.2939 306.512L-62.6488 306.996L470.627 -92.6309L469.982 -93.1143Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M480.475 -93.1153L-52.8008 306.511L-52.1557 306.995L481.12 -92.6318L480.475 -93.1153Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M490.969 -93.1097L-42.3071 306.517L-41.662 307L491.614 -92.6262L490.969 -93.1097Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M501.469 -93.1158L-31.8071 306.511L-31.162 306.994L502.114 -92.6323L501.469 -93.1158Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M511.962 -93.1099L-21.314 306.517L-20.6688 307L512.607 -92.6265L511.962 -93.1099Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M522.462 -93.1162L-10.814 306.51L-10.1688 306.994L523.107 -92.6328L522.462 -93.1162Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M532.956 -93.1104L-0.320312 306.516L0.324808 307L533.601 -92.6269L532.956 -93.1104Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M543.447 -93.1162L10.1709 306.51L10.816 306.994L544.092 -92.6328L543.447 -93.1162Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M553.94 -93.1109L20.6641 306.516L21.3092 306.999L554.585 -92.6274L553.94 -93.1109Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M564.439 -93.1167L31.1636 306.51L31.8087 306.993L565.085 -92.6333L564.439 -93.1167Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M574.933 -93.111L41.6572 306.516L42.3023 306.999L575.578 -92.6275L574.933 -93.111Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M585.426 -93.1124L52.1504 306.514L52.7955 306.998L586.072 -92.629L585.426 -93.1124Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M595.926 -93.1117L62.6504 306.515L63.2955 306.998L596.572 -92.6282L595.926 -93.1117Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M606.421 -93.1129L73.1445 306.514L73.7897 306.997L607.066 -92.6295L606.421 -93.1129Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M616.92 -93.1119L83.644 306.515L84.2892 306.998L617.565 -92.6284L616.92 -93.1119Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M627.414 -93.1131L94.1377 306.513L94.7828 306.997L628.059 -92.6296L627.414 -93.1131Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M637.913 -93.1119L104.637 306.515L105.282 306.998L638.558 -92.6284L637.913 -93.1119Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M648.407 -93.1133L115.131 306.513L115.776 306.997L649.052 -92.6299L648.407 -93.1133Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M658.907 -93.1123L125.631 306.514L126.276 306.998L659.552 -92.6289L658.907 -93.1123Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M669.4 -93.1138L136.124 306.513L136.769 306.996L670.045 -92.6304L669.4 -93.1138Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M679.894 -93.1082L146.618 306.518L147.263 307.002L680.539 -92.6248L679.894 -93.1082Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M690.394 -93.1141L157.118 306.512L157.763 306.996L691.039 -92.6306L690.394 -93.1141Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M700.887 -93.1084L167.611 306.518L168.256 307.002L701.532 -92.625L700.887 -93.1084Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M711.387 -93.1143L178.111 306.512L178.756 306.996L712.032 -92.6309L711.387 -93.1143Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M721.88 -93.1087L188.604 306.518L189.25 307.001L722.526 -92.6252L721.88 -93.1087Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M732.38 -93.1148L199.104 306.512L199.75 306.995L733.026 -92.6313L732.38 -93.1148Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M742.874 -93.1089L209.598 306.518L210.243 307.001L743.519 -92.6255L742.874 -93.1089Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M753.374 -93.1153L220.098 306.511L220.743 306.995L754.019 -92.6318L753.374 -93.1153Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M763.867 -93.1162L230.591 306.51L231.236 306.994L764.512 -92.6328L763.867 -93.1162Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M774.361 -93.1109L241.085 306.516L241.73 306.999L775.006 -92.6274L774.361 -93.1109Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M784.851 -93.1167L251.575 306.51L252.22 306.993L785.496 -92.6333L784.851 -93.1167Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M795.345 -93.1109L262.069 306.516L262.714 306.999L795.99 -92.6274L795.345 -93.1109Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M805.845 -93.117L272.569 306.51L273.214 306.993L806.49 -92.6335L805.845 -93.117Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M816.338 -93.1116L283.062 306.515L283.708 306.998L816.984 -92.6282L816.338 -93.1116Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M826.838 -93.1175L293.562 306.509L294.207 306.992L827.483 -92.634L826.838 -93.1175Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M837.332 -93.1119L304.056 306.515L304.701 306.998L837.977 -92.6284L837.332 -93.1119Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M847.832 -93.1178L314.556 306.509L315.201 306.992L848.477 -92.6343L847.832 -93.1178Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M858.325 -93.1119L325.049 306.515L325.694 306.998L858.97 -92.6285L858.325 -93.1119Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M868.819 -93.1134L335.543 306.513L336.188 306.997L869.464 -92.63L868.819 -93.1134Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M879.319 -93.1124L346.043 306.514L346.688 306.998L879.964 -92.629L879.319 -93.1124Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M889.812 -93.1139L356.536 306.513L357.181 306.996L890.457 -92.6304L889.812 -93.1139Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M900.312 -93.1129L367.036 306.514L367.681 306.997L900.957 -92.6295L900.312 -93.1129Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M910.805 -93.1141L377.529 306.512L378.174 306.996L911.45 -92.6307L910.805 -93.1141Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M921.305 -93.1133L388.029 306.513L388.674 306.997L921.95 -92.6299L921.305 -93.1133Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M931.799 -93.1143L398.523 306.512L399.168 306.996L932.444 -92.6309L931.799 -93.1143Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M942.299 -93.1136L409.023 306.513L409.668 306.996L942.944 -92.6301L942.299 -93.1136Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M952.792 -93.1148L419.516 306.512L420.161 306.995L953.437 -92.6313L952.792 -93.1148Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M963.286 -93.1089L430.01 306.518L430.655 307.001L963.931 -92.6255L963.286 -93.1089Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M973.786 -93.1153L440.51 306.511L441.155 306.995L974.431 -92.6318L973.786 -93.1153Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M984.278 -93.1097L451.002 306.517L451.648 307L984.923 -92.6262L984.278 -93.1097Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M994.778 -93.1153L461.502 306.511L462.148 306.995L995.423 -92.6318L994.778 -93.1153Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1005.27 -93.1099L471.997 306.517L472.642 307L1005.92 -92.6265L1005.27 -93.1099Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1015.77 -93.1158L482.497 306.511L483.142 306.994L1016.42 -92.6323L1015.77 -93.1158Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1026.26 -93.1099L492.98 306.517L493.626 307L1026.9 -92.6265L1026.26 -93.1099Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1036.76 -93.1162L503.48 306.51L504.126 306.994L1037.4 -92.6328L1036.76 -93.1162Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1047.25 -93.1106L513.974 306.516L514.619 306.999L1047.9 -92.6272L1047.25 -93.1106Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1057.74 -93.1119L524.467 306.515L525.112 306.998L1058.39 -92.6284L1057.74 -93.1119Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1068.24 -93.1111L534.967 306.515L535.612 306.999L1068.89 -92.6277L1068.24 -93.1111Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1078.74 -93.1121L545.461 306.514L546.106 306.998L1079.38 -92.6287L1078.74 -93.1121Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1089.24 -93.1116L555.961 306.515L556.606 306.998L1089.88 -92.6282L1089.24 -93.1116Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1099.73 -93.1126L566.454 306.514L567.099 306.997L1100.38 -92.6291L1099.73 -93.1126Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1110.23 -93.1119L576.954 306.515L577.599 306.998L1110.88 -92.6284L1110.23 -93.1119Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1120.72 -93.1131L587.447 306.513L588.092 306.997L1121.37 -92.6296L1120.72 -93.1131Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1131.22 -93.1192L597.947 306.507L598.592 306.991L1131.87 -92.6357L1131.22 -93.1192Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
          <path
            d="M1141.72 -93.1133L608.441 306.513L609.086 306.997L1142.36 -92.6299L1141.72 -93.1133Z"
            fill="white"
            fill-opacity="0.5"
          ></path>
        </svg>
        <span className="absolute top-0 left-[100%] text-[10px] after:content-[''] after:block after:w-2 after:h-20 after:bg-[#823b70] after:absolute after:top-0 after:left-0">
          <p className="ml-3">SERIAL09</p>
        </span>
      </div>
    </div>
  )
}

export default HeroBottom
