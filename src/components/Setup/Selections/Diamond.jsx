import React, { useState, useEffect } from "react";
import { questionBank } from "../../../modules/question-bank";
import { PopupButton } from "@typeform/embed-react";

export default function Diamond({ handleReady, selections, setSelections }) {
  const [topLeft, setTopLeft] = useState(false);
  const [topRight, setTopRight] = useState(false);
  const [rightCircle, setRightCircle] = useState(false);
  const [bottomCircle, setBottomCircle] = useState(false);
  const [leftCircle, setLeftCircle] = useState(false);
  const [middleCircle, setMiddleCircle] = useState(false);
  const [tf_hidden, setTfHidden] = useState({
    leadership: false,
    extended_workforce: false,
    planning: false,
    productivity: false,
    talent_aquisition: false,
    talent_management: false,
  });

  const COMPONENT_MAP = {
    topLeft: "leadership",
    topRight: "extended_workforce",
    rightCircle: "planning",
    bottomCircle: "productivity",
    leftCircle: "talent_aquisition",
    middleCircle: "talent_management",
  };

  function handleDiamondComponentColors(component) {
    component == "topLeft" && setTopLeft((prev) => !prev);
    component == "topRight" && setTopRight((prev) => !prev);
    component == "leftCircle" && setLeftCircle((prev) => !prev);
    component == "rightCircle" && setRightCircle((prev) => !prev);
    component == "bottomCircle" && setBottomCircle((prev) => !prev);
    component == "middleCircle" && setMiddleCircle((prev) => !prev);
  }

  function handleSelection(component) {
    let tempSelections = selections;
    tempSelections[component] = !tempSelections[component];
    let tempHidden = tf_hidden;
    tempHidden[COMPONENT_MAP[component]] = !tempHidden[COMPONENT_MAP[component]];
    setTfHidden(tempHidden);
    console.log(tf_hidden);
    setSelections(tempSelections);
    handleDiamondComponentColors(component);
  }

  return (
    <>
      <div className="hidden md:block text-[#09497B] text-3xl font-light">Click on the diamond component to add it to your assessments</div>
      <div className="md:hidden text-[#09497B] text-3xl font-light">Tapon the diamond component text add it to your assessments</div>
      <div className="divider w-[40%] pl-4"></div>
      <div className="relative">
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
          onClick={(e) => handleSelection(e.target.id)}
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
          <polygon className="st8" points="187.9,47.1 214.7,27.2 241.6,47.1 214.7,60.3 " />
          <g>
            (
            <path
              id="topLeft"
              className={
                "cursor-pointer " + ((topLeft == false && "fill-[#cccccc] hover:fill-[#FFCB18]") || "") + ((topLeft && "fill-[#FDB517] ") || "")
              }
              d="M103,47.6c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7s-8.7,3.9-8.7,8.7C94.3,43.7,98.2,47.6,103,47.6"
            />
            )
            <path
              className={
                "cursor-pointer " + ((topLeft == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") || "") + ((topLeft && "fill-[#FDB517] ") || "")
              }
              d="M103,50.6c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7c6.4,0,11.7,5.2,11.7,11.7S109.4,50.6,103,50.6z
               M103,28.5c-5.7,0-10.4,4.7-10.4,10.4s4.7,10.4,10.4,10.4c5.7,0,10.4-4.7,10.4-10.4S108.7,28.5,103,28.5z"
            />
            <path
              id="topRight"
              className={
                "cursor-pointer " + ((topRight == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") || "") + ((topRight && "fill-[#FDB517] ") || "")
              }
              d="M326.8,47.6c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7s-8.7,3.9-8.7,8.7S322,47.6,326.8,47.6"
            />
            <path
              className={
                "cursor-pointer " + ((topRight == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") || "") + ((topRight && "fill-[#FDB517] ") || "")
              }
              d="M326.8,50.6c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S333.3,50.6,326.8,50.6z
               M326.8,28.5c-5.7,0-10.4,4.7-10.4,10.4s4.7,10.4,10.4,10.4s10.4-4.7,10.4-10.4S332.6,28.5,326.8,28.5z"
            />
            <path
              id="rightCircle"
              className={
                "cursor-pointer " +
                ((rightCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") || "") +
                ((rightCircle && "fill-[#FDB517] ") || "")
              }
              d="M388.5,113.5c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7s-8.7,3.9-8.7,8.7
              C379.8,109.6,383.7,113.5,388.5,113.5"
            />
            <path
              className={
                "cursor-pointer " +
                ((rightCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") || "") +
                ((rightCircle && "fill-[#FDB517] ") || "")
              }
              d="M388.5,116.5c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S395,116.5,388.5,116.5z
               M388.5,94.4c-5.7,0-10.4,4.7-10.4,10.4s4.7,10.4,10.4,10.4c5.7,0,10.4-4.7,10.4-10.4S394.3,94.4,388.5,94.4z"
            />
            <path
              id="leftCircle"
              className={
                "cursor-pointer " +
                ((leftCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") || "") +
                ((leftCircle && "fill-[#FDB517] ") || "")
              }
              d="M39.2,113.5c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7s-8.7,3.9-8.7,8.7C30.5,109.6,34.4,113.5,39.2,113.5"
            />
            <path
              className={
                "cursor-pointer " +
                ((leftCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") || "") +
                ((leftCircle && "fill-[#FDB517] ") || "")
              }
              d="M39.2,116.5c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S45.6,116.5,39.2,116.5z
               M39.2,94.4c-5.7,0-10.4,4.7-10.4,10.4s4.7,10.4,10.4,10.4s10.4-4.7,10.4-10.4S44.9,94.4,39.2,94.4z"
            />
            <path
              id="bottomCircle"
              className={
                "cursor-pointer " +
                ((bottomCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") || "") +
                ((bottomCircle && "fill-[#FDB517] ") || "")
              }
              d="M216.1,291c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7s-8.7,3.9-8.7,8.7C207.4,287.1,211.3,291,216.1,291"
            />
            <path
              className={
                "cursor-pointer " +
                ((bottomCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") || "") +
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
                    <rect id="SVGID_1_" x="156.2" y="99.5" width="115.3" height="105.3" />
                  </defs>
                  <clipPath id="SVGID_00000069389745432376306500000010666004258969912708_">
                    <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
                  </clipPath>
                  <path
                    style={{
                      clipPath: "url(#SVGID_00000069389745432376306500000010666004258969912708_)",
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
          <text transform="matrix(1 0 0 1 234.1006 145.6056)" className="st13 st14 st15">
            {" "}
          </text>
          <text transform="matrix(1 0 0 1 231.3374 156.4054)" className="st13 st14 st15">
            {" "}
          </text>
          <path
            id="middleCircle"
            className={((middleCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") || "") + ((middleCircle && "fill-[#FDB517] ") || "")}
            d="M167.2,192c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7c-4.8,0-8.7,3.9-8.7,8.7
          C158.6,188.1,162.5,192,167.2,192"
          />
          <path
            className={((middleCircle == false && "fill-[#cccccc] hover:fill-[#FFCB18] ") || "") + ((middleCircle && "fill-[#FDB517] ") || "")}
            d="M167.2,195c-6.4,0-11.7-5.2-11.7-11.7s5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7S173.7,195,167.2,195z
           M167.2,172.9c-5.7,0-10.4,4.7-10.4,10.4s4.7,10.4,10.4,10.4s10.4-4.7,10.4-10.4S173,172.9,167.2,172.9z"
          />
        </svg>
        <div className="absolute w-[25%] h-[1px] bg-[#FDB517] top-[62%] left-[13%] "></div>

        <div
          onClick={() => handleSelection("topLeft")}
          className={
            "md:leading-5 text-[#1290e5] font-bold  cursor-pointer font-lighter absolute  w-[25%] md:w-[20%] top-[5%] -left-3 md:left-0  text-xs md:text-lg " +
            (topLeft && "underline decoration-[#FDB517]")
          }
        >
          {questionBank.find((el) => el.DiamondLoc == "topLeft").Type.toUpperCase()}
        </div>

        <div
          onClick={() => handleSelection("topRight")}
          className={
            "md:leading-5 text-[#1290e5] font-bold  cursor-pointer font-lighter absolute  w-[23%] md:w-[20%] top-[5%]  -right-[3%] text-right text-xs md:text-lg " +
            (topRight && "underline decoration-[#FDB517]")
          }
        >
          {questionBank.find((el) => el.DiamondLoc == "topRight").Type.toUpperCase()}
        </div>
        <div
          onClick={() => handleSelection("rightCircle")}
          className={
            "md:leading-5 text-[#1290e5] font-bold cursor-pointer font-lighter absolute  w-[23%] md:w-[20%] top-[50%] md:top-[45%] text-right -right-[6%] text-xs md:text-lg " +
            (rightCircle && "underline decoration-[#FDB517]")
          }
        >
          {questionBank.find((el) => el.DiamondLoc == "rightCircle").Type.toUpperCase()}
        </div>
        <div
          onClick={() => handleSelection("leftCircle")}
          className={
            "md:leading-5 text-[#1290e5] font-bold  cursor-pointer font-lighter absolute -left-[8%] w-[23%] md:w-[20%] top-[40%] md:top-[38%]  text-xs md:text-lg " +
            (leftCircle && "underline decoration-[#FDB517]")
          }
        >
          {questionBank.find((el) => el.DiamondLoc == "leftCircle").Type.toUpperCase()}
        </div>
        <div
          onClick={() => handleSelection("middleCircle")}
          className={
            "md:leading-5 text-[#1290e5] font-bold  cursor-pointer font-lighter absolute  w-[23%] md:w-[20%] top-[62%]  text-xs md:text-lg " +
            (middleCircle && "underline decoration-[#FDB517]")
          }
        >
          {questionBank.find((el) => el.DiamondLoc == "middleCircle").Type.toUpperCase()}
        </div>
        <div
          onClick={() => handleSelection("bottomCircle")}
          className={
            "md:leading-5 text-[#1290e5] font-bold cursor-pointer font-lighter absolute  w-[23%] md:w-[25%] bottom-[6%] right-[12%] text-right text-xs md:text-lg " +
            (bottomCircle && "underline decoration-[#FDB517]")
          }
        >
          {questionBank.find((el) => el.DiamondLoc == "bottomCircle").Type.toUpperCase()}
        </div>
        <div className="absolute text-[6pt] md:text-sm lg:text-md xl:text-lg text-center font-semibold w-[20%] left-[40%] bottom-[42%]">
          WORKFORCE AGILITY
        </div>
        <div className="absolute w-[25%] h-[1px] bg-[#FDB517] bottom-[6%] right-[22%] "></div>
        <div className="absolute -bottom-2 md:bottom-3 md:bottom-6 l-2">
          {selections && !Object.values(selections).includes(true) && (
            <button className="text-2xl font-lighter w-[100px] outline text-slate-300 disabled ">READY</button>
          )}
          {selections && Object.values(selections).includes(true) && (
            <PopupButton
              hidden={tf_hidden}
              onSubmit={(event) => {
                console.log({ event });
                handleReady();
              }}
              id="JU5OyH4T"
              style={{ fontSize: 20 }}
              className="my-button btn btn-outline text-sm md:text-[#09497B]"
            >
              READY
            </PopupButton>

            // <button className="text-2xl font-lighter w-[100px] outline text-[#016AAB] font-bold hover:text-[#0EA8DC] " onClick={() => handleReady()}>
            //   READY
            // </button>
          )}
        </div>
      </div>
    </>
  );
}
