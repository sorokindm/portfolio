export default BackgroundLogo;

function BackgroundLogo() {
  return (
    <>
      <svg className="background-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750.51 122.41" preserveAspectRatio="none">
        <defs>
          <style>{` .cls-1 { fill:url(#linear-gradient);} `}</style>
          <style>{` .cls-2{fill:none;stroke:#d7bd85;stroke-miterlimit:10;} `}</style>
          <linearGradient
            id="linear-gradient"
            spreadMethod="repeat"
            x1=".8%"
            y1=".15%"
            x2="0"
          >
            <stop stopColor="#F8DA5E" />
            <stop offset=".556" stopColor="#F8DA5E" />
            <stop offset=".556" stopColor="#F4CF47" />
            <stop offset=".778" stopColor="#F4CF47" />
            <stop offset=".778" stopColor="#F3CB3E" />
            <stop offset="1" stopColor="#F3CB3E" />
            <stop offset="1" stopColor="#F8DA5E" />
          </linearGradient>
        </defs>
        <g id="Layer_6" data-name="Layer 6">
          <path
            className="cls-1"
            d="M.13,121.5C124,121,249,123,373,121c14,0,27-1,41-2,21-2,40-7,60-12,14-5,27-10,40-18,18-13,32-26,47-40,27-24,60-32,95-40,32-7,63-8,94.5-8.5H.5V122"
            transform="translate(0 -0.5)"
          />
        </g>
        <g id="Layer_4" data-name="Layer 4">
          <path
            className="cls-2"
            d="M.5.5V122h2l19.69,0,36.54.06,47.92.07,53.89.08,54.41.08,49.48.08s139.12.1,142.12-2.9"
            transform="translate(0 -0.5)"
          />
        </g>
      </svg>
    </>
  );
}
