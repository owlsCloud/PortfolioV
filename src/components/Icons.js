import * as React from "react";

export const LinkedinIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);
export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const CircularText = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={400}
    height={400}
    viewBox="0 0 300 300"
    {...props}
  >
    <path d="M141.2 65.6c-7.1 4.9-3.1 16.4 5.7 16.4 2.5 0 7.1-2 7.1-3.1 0-1.3-1.8-2-2.5-.9-.3.5-2.4 1-4.5 1-2.9 0-4.3-.6-5.5-2.3-1.5-2.1-1.5-2.2 1.7-2.5 9.7-.7 11.8-1.3 11.8-3.3 0-5.5-8.8-8.8-13.8-5.3zm9.3 2.4c1 1.1 1.6 2.3 1.3 2.6-.3.3-3.1.8-6.2 1.1-6.1.6-7-.3-3.6-3.7 2.6-2.6 6.2-2.6 8.5 0zM160.5 66.2c-.2.7-.6 3.5-1 6.3-.4 2.7-.9 6-1.2 7.2-.3 1.6-.1 2.3.9 2.3s1.9-2.2 2.9-6.3c1.3-5.7 1.7-6.3 4.7-7.2 1.7-.5 3.2-1.3 3.2-1.7 0-1.3-4.5-.9-5.9.4-1.1 1.1-1.3 1-.8-.5.4-1.1.1-1.7-.9-1.7-.8 0-1.6.6-1.9 1.2zM120.2 70.2c-1.8 1.8-2.4 2-3.1.9-.6-1-1-1-1.6-.2-1 1.7 6.5 23.1 8.2 23.1 1.7 0 1.7-1.2-.1-5.5l-1.4-3.4 3.9.1c7.9.1 11.8-8.2 6.8-14.6-2.7-3.5-9.4-3.7-12.7-.4zm9.6 1.4c4.5 3.1 1.9 11.4-3.6 11.4-3.6 0-6.2-2.7-6.2-6.6 0-3.4 2.8-6.4 6-6.4.9 0 2.6.7 3.8 1.6zM202.9 78.9c-.8 1.1-4.1 4.9-7.3 8.6-4.2 4.6-5.6 6.9-4.9 7.6.8.8 2.1 0 4.5-2.6l3.3-3.7 4.7 4.1c2.8 2.5 4.9 3.7 5.3 3.1.4-.6-1.4-2.9-4-5.2l-4.7-4.1 3.1-3 3-3.1 5.1 4.3c7.2 6.1 8.3 4 1.3-2.4-3.2-3-6.3-5.4-6.9-5.5-.6 0-1.8.9-2.5 1.9zM99.6 80.6c-3.7 3.7-3.5 8.6.3 12.5 2 2 3.9 2.9 6.1 2.9 4.5 0 9-4.7 9-9.5 0-7.9-9.7-11.6-15.4-5.9zm8.9 0c2.6 1 4.6 5.9 3.6 8.7-1.6 4.1-7.5 5.1-10.6 1.7-4.6-5.1.6-12.8 7-10.4zM177.1 84.3c-1.4 1.7.3 4.1 2.3 3.4.9-.4 1.6-1.3 1.6-2.1 0-1.9-2.6-2.8-3.9-1.3zM82.6 85.9c-1 1.5 17.7 18.2 18.6 16.8.5-.8-2.2-4-7.9-9.4-9-8.4-9.8-9-10.7-7.4zM211 101.2c-3 2.2-6.2 4.3-7 4.8-1.1.7-1.2 1.2-.3 2 .8.9 2.2.5 5.6-1.9 5.1-3.5 7.2-3.8 9.8-1.5 2.5 2.3 4.5.8 2.3-1.7-.9-1-2.4-1.9-3.2-1.9-1.1 0-1.2-.3-.3-1.3 1-1.3.5-2.8-.8-2.6-.3 0-3.1 1.9-6.1 4.1zM80.2 101.5c-7.5 6.3-.6 18.2 8.6 14.9 4.5-1.6 8.6-10.1 5.5-11.1-.7-.3-1.3.2-1.3 1.1 0 4.6-5 9.3-8.5 8-1.1-.5-.6-1.9 2.6-6.6 4.4-6.4 4.3-7.4-.7-8.4-2.4-.4-3.7 0-6.2 2.1zm5.7 4.2c-4.7 7.9-4.6 7.8-5.8 5.5-1.5-2.8-1.4-4.4.5-7 1-1.4 2.5-2.2 4.5-2.2h3.1l-2.3 3.7zM215.7 112.1c-2.9 1.7-4.6 6.7-3.6 10.3 2 7.1 9.8 8.9 15.1 3.6 2.6-2.7 3-3.6 2.5-6.8-1.1-6.6-8.5-10.3-14-7.1zm9.6 3.7c.9.8 1.7 2.7 1.7 4.2 0 6.1-8.3 8.6-11.6 3.5-2.1-3.3-1.1-7 2.3-8.9 2.9-1.5 4.8-1.2 7.6 1.2zM71 115.9c0 .5 2.8 3.4 6.1 6.4l6.2 5.5-8.1.7c-5.8.5-8.2 1.1-8.6 2.2-.5 1.3.1 1.4 3.6 1 2.4-.4 6.9-.9 10.1-1.3 4.1-.5 5.7-1 5.7-2.1 0-.9-2.8-4.2-6.2-7.4-5.9-5.5-8.8-7.1-8.8-5zM222 132.9c-3.7.4-5.5 1-5.5 2s1.8 1.4 7 1.5c6.5.1 7.1.3 8.2 2.8.7 1.4 1 3.3.7 4.1-.7 2-5.6 3.7-10.5 3.7-2.8 0-3.9.4-3.9 1.5 0 3.2 14.1 1 16-2.5 1.5-2.7 1.2-6.2-.6-8.8-.8-1.2-1-2.2-.5-2.2.6 0 1.1-.7 1.1-1.5 0-1.6-1.7-1.7-12-.6zM69.3 137.2c-2.9 1.4-4.7 5.9-3.8 9.8 1.4 6.5 10.8 8.7 15.1 3.6 3.4-3.8 3.2-12.6-.2-12.6-1.7 0-1.7.2-.2 3.5 1.4 3.1 0 6.8-3.2 8.5-2.1 1.1-2.2 1-1.8-6.4.3-7.1.2-7.6-1.7-7.5-1.1 0-3 .5-4.2 1.1zm3.7 7.4c0 4.7-.3 5.5-1.7 5.2-1-.2-2.4-1.5-3.2-2.9-1.3-2.4-1.3-2.9.2-5.3 3-4.5 4.7-3.4 4.7 3zM233 155.5c0 1.6-.8 1.6-10-.1-1.4-.2-3.3.1-4.3.8-2.1 1.5-2.8 6.9-.9 7.5.7.3 1.2-.5 1.2-2.1 0-3.4 1.1-3.9 7.6-3 5.5.6 5.6.7 5.2 3.5-.3 2 0 2.9.9 2.9.7 0 1.3-1.1 1.3-2.5 0-2 .5-2.5 2.5-2.5 1.6 0 2.5-.6 2.5-1.5 0-.8-.9-1.5-2-1.5s-2-.7-2-1.5-.4-1.5-1-1.5c-.5 0-1 .7-1 1.5zM69 157.7c-3 1.1-6 4.7-6.6 7.9-.5 3 1.1 12.9 2.5 15.3.6.9 10.6-1.2 21.3-4.5 1.5-.4 1.5-1-.3-7.2-2.3-8.4-6.1-12.2-11.7-12.1-2 0-4.4.3-5.2.6zm11.3 5.2c2.8 3.4 4.5 10 2.8 11.1-1.8 1.1-16.2 4.3-16.8 3.7-.2-.3-.7-3.2-1-6.5-.5-5.5-.3-6.3 2-8.6 3.8-3.8 9.7-3.6 13 .3zM221.6 171.6c-1.4 4.1-1.4 4.5.1 4.2 2.2-.4 4.7-7.4 2.8-8.2-.9-.3-1.9 1-2.9 4zM207.8 183.5c-2.1 3.5-3.8 6.8-3.8 7.4 0 2.5 2 .8 5-4.2 1.8-2.8 3.4-5.3 3.5-5.5.6-.7 6.5 2.9 6.5 3.8 0 .6-1.1 2.8-2.5 5s-2.5 4.4-2.5 5c0 2.3 2 .7 4.6-3.8 1.5-2.6 2.8-4.8 3-5 .1-.2 1.1.1 2.1.7 4.8 2.7 4.7 2.6 1.3 8.6-2.1 3.7-2.9 6-2.3 6.6.7.7 2.5-1.5 5.2-6.1 2.4-3.9 4.1-7.3 3.9-7.5-1.1-1-19-11.5-19.6-11.5-.4 0-2.4 2.9-4.4 6.5zM86.9 189.5c-6 3.2-6 11.1 0 15.2l3.2 2.2-3.5 2.7c-2.6 2.1-3.2 3.1-2.5 4.1.8.9 3.3-.7 10.5-6.9 5.1-4.4 9.1-8.5 8.8-9-.3-.5-1.2-.7-2-.4-.9.4-1.4-.2-1.4-1.5 0-2.8-5.3-7.9-8.2-7.9-1.3.1-3.5.7-4.9 1.5zM96 193c2.6 2.6 2.5 5.8-.2 8.7-2.6 2.8-6.1 3-8.8.3-2.6-2.6-2.5-5.8.2-8.7 2.6-2.8 6.1-3 8.8-.3zM200.5 193.9c-.4.7 1 3 3.4 5.6 2.3 2.5 4.1 5.2 4.1 6 0 1.9-4.4 6.5-6.1 6.5-.7 0-3.3-2.3-5.9-5.1-5-5.4-7.9-5.4-4.1 0 3.8 5.3 8.1 8.3 11 7.6 2.9-.6 7.1-4.8 7.1-7 0-.8.6-1.2 1.4-.9 3.4 1.3 1.9-1.6-3.9-7.5-4-4.1-6.5-5.9-7-5.2zM105.6 202.8c-1.3 1.2-.5 2.2 1.7 2.2 2.9 0 6.7 3.9 6.7 6.8 0 3-1.2 2.8-6.9-1.3-5.4-3.9-6.6-4.2-7.5-1.9-3.5 9 6.8 16.3 14.1 10 3.5-3 3.9-9.5.7-12.6-2.1-2.1-7.8-4.2-8.8-3.2zm4 11.9c2.2 1.4 2.3 1.8 1 3.1-3.1 3.1-10.8-2.2-9.2-6.4.7-1.8 0-2 8.2 3.3zM178 210.9c-1.8 1.8-3.2 2.5-3.8 1.9-.6-.6-1.2-.6-1.6 0-.9 1.5 9.3 22.2 11 22.2 1.8 0 1.8-.3-.6-5l-2-4h2.9c1.7 0 4.2-1.1 6-2.6 4.2-3.5 4.3-8.4.2-12.5-3.9-3.9-8.2-3.9-12.1 0zm10.4 2.3c3 4.3 1.4 9.1-3.5 10.3-3.1.8-6.5-1.8-7.4-5.7-1.4-5.7 7.6-9.4 10.9-4.6zM120.1 223.1c-3.4 5.6-6 10.4-5.7 10.6 1.3 1.3 3.5-1.1 7.6-8.6 2.5-4.4 4.8-8.1 5.1-8.1.4 0 1 4.6 1.5 10.2 1.2 13.4 2.3 13.7 8.9 2.3 2.8-4.6 5.3-8.5 5.6-8.5.4 0 1 4.5 1.4 10 .6 8.4 1 10 2.4 10 1.6 0 1.6-.8.3-11.8-1.2-10.3-2.1-13.1-4.3-13.2-.3 0-2.7 3.8-5.4 8.5-2.7 4.6-5.1 8.2-5.4 7.9-.3-.2-1-4.6-1.6-9.7-1.4-12.7-2.6-12.7-10.4.4zM157.3 216.6c-.8 2.1 1.3 4.2 2.8 2.7 1.3-1.3.5-4.3-1.1-4.3-.6 0-1.3.7-1.7 1.6z" />
  </svg>
);

export default CircularText;
export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...rest}
    className={` ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...rest}
    className={` ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);
