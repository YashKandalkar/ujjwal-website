import "./TeamMember.css";

function TeamMember({ imagePath, text, role }) {
  return (
    <div className="teamCard m-4">
      <div className="circle">
        <div className="imgbox">
          <img
            className="team-member"
            src={imagePath}
            alt="ron"
            style={{ filter: "" }}
          />
        </div>
      </div>
      <div className="teamCard-content text-center">
        <p className="text-gray-100 text-lg pt-4">{text}</p>
        <p className="text-gray-400 text-base pt-0">{role}</p>
      </div>
      <svg
        id="svgfilters"
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter
            id="sepia"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feColorMatrix
              type="matrix"
              values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0"
              in="SourceGraphic"
              result="colormatrix"
            />
            <feComponentTransfer in="colormatrix" result="componentTransfer">
              <feFuncR type="table" tableValues="0.26 0.95" />
              <feFuncG type="table" tableValues="0.19 0.78" />
              <feFuncB type="table" tableValues="0.11 0.59" />
              <feFuncA type="table" tableValues="0 1" />
            </feComponentTransfer>
            <feBlend
              mode="normal"
              in="componentTransfer"
              in2="SourceGraphic"
              result="blend"
            />
          </filter>
          <filter
            id="purple-warm"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feColorMatrix
              type="matrix"
              values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0"
              in="SourceGraphic"
              result="colormatrix"
            />
            <feComponentTransfer in="colormatrix" result="componentTransfer">
              <feFuncR type="table" tableValues="0.52 0.97 1" />
              <feFuncG type="table" tableValues="0 0.62 1" />
              <feFuncB type="table" tableValues="0.51 0.39 0.89" />
              <feFuncA type="table" tableValues="0 1" />
            </feComponentTransfer>
            <feBlend
              mode="normal"
              in="componentTransfer"
              in2="SourceGraphic"
              result="blend"
            />
          </filter>
          <filter id="grain">
            <feTurbulence baseFrequency="0.60,0.90" result="colorNoise" />
            <feColorMatrix
              in="colorNoise"
              type="matrix"
              values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"
            />
            <feComposite
              operator="in"
              in2="SourceGraphic"
              result="monoNoise"
            />
            <feBlend in="SourceGraphic" in2="monoNoise" mode="multiply" />
          </filter>
          <filter id="posterize">
            <feComponentTransfer>
              <feFuncR type="discrete" tableValues="0 .5 1" />
            </feComponentTransfer>
          </filter>
          <filter
            id="sea"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feColorMatrix
              type="matrix"
              values=".33 .33 .33 0 0
					.33 .33 .33 0 0
					.33 .33 .33 0 0
					0 0 0 1 0"
              in="SourceGraphic"
              result="colormatrix"
            />
            <feComponentTransfer in="colormatrix" result="componentTransfer">
              <feFuncR type="table" tableValues="0.02 0.13 0.8" />
              <feFuncG type="table" tableValues="0.02 0.47 0.97" />
              <feFuncB type="table" tableValues="0.26 0.52 0.48" />
              <feFuncA type="table" tableValues="0 1" />
            </feComponentTransfer>
            <feBlend
              mode="normal"
              in="componentTransfer"
              in2="SourceGraphic"
              result="blend"
            />
          </filter>
          <filter id="squiggly-0">
            <feTurbulence
              id="turbulence1"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed="0"
            />
            <feDisplacementMap
              id="displacement"
              in="SourceGraphic"
              in2="noise"
              scale="6"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default TeamMember;
