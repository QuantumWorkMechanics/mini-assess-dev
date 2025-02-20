import React, { useState } from "react";

export default function DiamondSVG({
  topLeft,
  topRight,
  rightCircle,
  leftCircle,
  bottomCircle,
  middleCircle,
}) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 426.4 309.3"
      style={{ enableBackground: "new 0 0 426.4 309.3" }}
      xmlSpace="preserve"
      onClick={(e) => handleSVG(e)}
    >
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\t.st0{fill:#0DA6D9;}\n\t.st1{fill:#79D0E6;}\n\t.st2{fill:#4FBFE5;}\n\t.st3{fill:#E0EBF0;}\n\t.st4{fill:#006BAB;}\n\t.st5{fill:#3EC1E4;}\n\t.st6{fill:#BADEF5;}\n\t.st7{fill:#00477D;}\n\t.st8{fill:#D1E8F5;}\n\t.st9{fill:#FDB517;}\n\t.st10{opacity:0.5;}\n\t.st11{clip-path:url(#SVGID_00000065042254358001774540000012300393864369682862_);fill:#FFFFFF;}\n\t.st12{fill:#FCB517;}\n\t.st13{fill:#231F20;}\n\t.st14{font-family:'Gibson-Light';}\n\t.st15{font-size:9px;}\n\t.st16{fill:#09497B;}\n",
        }}
      />
      <polygon className="st0" points="214.7,282.3 214.7,133.2 115.6,133.2 " />
      <polygon className="st1" points="214.7,60.3 130.1,60.3 214.7,133.2 " />
      <polygon className="st2" points="115.6,133.2 130.1,60.3 214.7,133.2 " />
      <polygon className="st3" points="214.7,60.3 187.9,47.1 130.1,60.3 " />
      <polygon className="st2" points="214.7,282.3 39.2,103.4 115.6,133.2 " />
      <polygon className="st1" points="130.1,60.3 39.2,103.4 115.6,133.2 " />
      <polygon className="st2" points="39.2,103.4 103.2,37.2 130.1,60.3 " />
      <polygon className="st3" points="187.9,47.1 103.2,37.2 130.1,60.3 " />
      <polygon className="st3" points="103.2,37.2 214.7,27.2 187.9,47.1 " />
      <polygon className="st4" points="214.7,282.3 214.7,133.2 313.9,133.2 " />
      <polygon className="st5" points="214.7,60.3 299.4,60.3 214.7,133.2 " />
      <polygon className="st0" points="313.9,133.2 299.4,60.3 214.7,133.2 " />
      <polygon className="st6" points="214.7,60.3 241.6,47.1 299.4,60.3 " />
      <polygon className="st7" points="214.7,282.3 390.3,103.4 313.9,133.2 " />
      <polygon className="st4" points="299.4,60.3 390.3,103.4 313.9,133.2 " />
      <polygon className="st0" points="390.3,103.4 326.3,37.2 299.4,60.3 " />
      <polygon className="st8" points="241.6,47.1 326.3,37.2 299.4,60.3 " />
      <polygon className="st6" points="326.3,37.2 214.7,27.2 241.6,47.1 " />
      <polygon
        className="st8"
        points="187.9,47.1 214.7,27.2 241.6,47.1 214.7,60.3 "
      />
      <g>
        <path
          id="topLeftCircle"
          className={
            "cursor-pointer " +
            ((topLeft == false && "fill-[#cccccc] hover:fill-[#FFCB18]") ||
              "") +
            ((topLeft && "fill-[#FDB517] ") || "")
          }
          d="M103,47.6c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7s-8.7,3.9-8.7,8.7C94.3,43.7,98.2,47.6,103,47.6"
        />
        <path
          id="topLeftRing"
          className={
            "cursor-pointer " +
            ((topLeft == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") ||
              "") +
            ((topLeft && "fill-[#FDB517] ") || "")
          }
          d="M103,50.6c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7c6.4,0,11.7,5.2,11.7,11.7S109.4,50.6,103,50.6z
               M103,28.5c-5.7,0-10.4,4.7-10.4,10.4s4.7,10.4,10.4,10.4c5.7,0,10.4-4.7,10.4-10.4S108.7,28.5,103,28.5z"
        />
        <path
          id="topRightCircle"
          className={
            "cursor-pointer " +
            ((topRight == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") ||
              "") +
            ((topRight && "fill-[#FDB517] ") || "")
          }
          d="M326.8,47.6c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7s-8.7,3.9-8.7,8.7S322,47.6,326.8,47.6"
        />
        <path
          id="topRightRing"
          className={
            "cursor-pointer " +
            ((topRight == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") ||
              "") +
            ((topRight && "fill-[#FDB517] ") || "")
          }
          d="M326.8,50.6c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S333.3,50.6,326.8,50.6z
               M326.8,28.5c-5.7,0-10.4,4.7-10.4,10.4s4.7,10.4,10.4,10.4s10.4-4.7,10.4-10.4S332.6,28.5,326.8,28.5z"
        />
        <path
          id="rightCircle"
          className={
            "cursor-pointer " +
            ((rightCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") ||
              "") +
            ((rightCircle && "fill-[#FDB517] ") || "")
          }
          d="M388.5,113.5c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7s-8.7,3.9-8.7,8.7
              C379.8,109.6,383.7,113.5,388.5,113.5"
        />
        <path
          id="rightRing"
          className={
            "cursor-pointer " +
            ((rightCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") ||
              "") +
            ((rightCircle && "fill-[#FDB517] ") || "")
          }
          d="M388.5,116.5c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S395,116.5,388.5,116.5z
               M388.5,94.4c-5.7,0-10.4,4.7-10.4,10.4s4.7,10.4,10.4,10.4c5.7,0,10.4-4.7,10.4-10.4S394.3,94.4,388.5,94.4z"
        />
        <path
          id="leftCircle"
          className={
            "cursor-pointer " +
            ((leftCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") ||
              "") +
            ((leftCircle && "fill-[#FDB517] ") || "")
          }
          d="M39.2,113.5c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7s-8.7,3.9-8.7,8.7C30.5,109.6,34.4,113.5,39.2,113.5"
        />
        <path
          id="leftRing"
          className={
            "cursor-pointer " +
            ((leftCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") ||
              "") +
            ((leftCircle && "fill-[#FDB517] ") || "")
          }
          d="M39.2,116.5c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S45.6,116.5,39.2,116.5z
               M39.2,94.4c-5.7,0-10.4,4.7-10.4,10.4s4.7,10.4,10.4,10.4s10.4-4.7,10.4-10.4S44.9,94.4,39.2,94.4z"
        />
        <path
          id="bottomCircle"
          className={
            "cursor-pointer " +
            ((bottomCircle == false &&
              "fill-[#cccccc] hover:fill-[#FFCB18] ") ||
              "") +
            ((bottomCircle && "fill-[#FDB517] ") || "")
          }
          d="M216.1,291c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7s-8.7,3.9-8.7,8.7C207.4,287.1,211.3,291,216.1,291"
        />
        <path
          id="bottomRing"
          className={
            "cursor-pointer " +
            ((bottomCircle == false &&
              "fill-[#cccccc] hover:fill-[#FFCB18] ") ||
              "") +
            ((bottomCircle && "fill-[#FDB517] ") || "")
          }
          d="M216.1,294c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7c6.4,0,11.7,5.2,11.7,11.7S222.5,294,216.1,294z
               M216.1,271.9c-5.7,0-10.4,4.7-10.4,10.4s4.7,10.4,10.4,10.4s10.4-4.7,10.4-10.4S221.9,271.9,216.1,271.9z"
        />
      </g>
      <g>
        <g className="st10">
          <g>
            <g>
              <defs>
                <rect
                  id="SVGID_1_"
                  x="156.2"
                  y="99.5"
                  width="115.3"
                  height="105.3"
                />
              </defs>
              <clipPath id="SVGID_00000069389745432376306500000010666004258969912708_">
                <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
              </clipPath>
              <path
                style={{
                  clipPath:
                    "url(#SVGID_00000069389745432376306500000010666004258969912708_)",
                  fill: "#FFFFFF",
                }}
                d="M213.9,106.5
                    c-26.9,0-48.6,21.8-48.6,48.6s21.8,48.6,48.6,48.6s48.6-21.8,48.6-48.6S240.7,106.5,213.9,106.5"
              />
            </g>
          </g>
        </g>
        <path
          className="st12"
          d="M160.2,155.5h0.6c0-14.6,5.9-27.9,15.5-37.5c9.6-9.6,22.9-15.5,37.5-15.5c14.6,0,27.9,5.9,37.5,15.5
              c9.6,9.6,15.5,22.8,15.5,37.5c0,14.6-5.9,27.9-15.5,37.5c-9.6,9.6-22.9,15.5-37.5,15.5s-27.9-5.9-37.5-15.5
              c-9.6-9.6-15.5-22.9-15.5-37.5H160.2h-0.6c0,29.9,24.3,54.2,54.2,54.2c29.9,0,54.2-24.3,54.2-54.2s-24.3-54.2-54.2-54.2
              c-29.9,0-54.2,24.3-54.2,54.2H160.2z"
        />
      </g>
      <text
        transform="matrix(1 0 0 1 234.1006 145.6056)"
        className="st13 st14 st15"
      >
        {" "}
      </text>
      <text
        transform="matrix(1 0 0 1 231.3374 156.4054)"
        className="st13 st14 st15"
      >
        {" "}
      </text>
      <path
        id="middleCircle"
        className={
          ((middleCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") ||
            "") + ((middleCircle && "fill-[#FDB517] ") || "")
        }
        d="M167.2,192c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7c-4.8,0-8.7,3.9-8.7,8.7
          C158.6,188.1,162.5,192,167.2,192"
      />
      <path
        id="middleRing"
        className={
          ((middleCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") ||
            "") + ((middleCircle && "fill-[#FDB517] ") || "")
        }
        d="M167.2,195c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S173.7,195,167.2,195z
           M167.2,172.9c-5.7,0-10.4,4.7-10.4,10.4s4.7,10.4,10.4,10.4s10.4-4.7,10.4-10.4S173,172.9,167.2,172.9z"
      />
    </svg>
  );
}
