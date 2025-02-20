import { useState, useRef, useEffect } from "react";
import img7 from "../../assets/image7.jpeg";
import Header from "./Header";
import logo from "../../assets/grayScaleLogo.png";
import OtherPopup from "./OtherPopup";
import Controls from "../Utils.jsx/Controls";
//import useTimeout from "../Utils.jsx/useTimeout";

function MultiSelect({
  currentQuestion,
  handleMultiSelect,
  handleNext,
  handleBack,
  count,
  questionIndex,
  img,
  handleOther,
  isAutoAdvance,
  setIsAutoAdvance,
}) {
  const colNumTailwind = Math.min(Math.floor(currentQuestion.Response_1.length / 3), 3);
  const [isSelected, setIsSelected] = useState(false);
  const [hasOther, setHasOther] = useState(currentQuestion.Response_1.filter((x) => x.includes("Other") || x.includes("other")).length > 0);
  const [isError, setIsError] = useState(false);
  {
    /* <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
  </label>
</div> */
  }

  // console.log(currentQuestion.question.length);

  function handleSelection(item, currentSelections) {
    const maxSel = currentQuestion.max;
    // console.log({ maxSel, currentQuestion });
    if (maxSel && maxSel != null && maxSel > 0 && !currentSelections.includes(item)) {
      if (currentSelections.length == maxSel || (currentSelections.length == maxSel - 1 && currentQuestion.other != "")) {
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 1000);
        return;
      }
      handleMultiSelect(item);
      return;
    }
    handleMultiSelect(item);
  }

  function useTimeout(callback, delay) {
    const timeoutRef = useRef(null);
    const savedCallback = useRef(callback);
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      const tick = () => savedCallback.current();
      if (typeof delay === "number") {
        timeoutRef.current = window.setTimeout(tick, delay);
        return () => window.clearTimeout(timeoutRef.current);
      }
    }, [delay]);
    return timeoutRef;
  }

  function stopError() {
    setIsError(false);
  }

  return (
    <div className="md:flex w-screen">
      <div className="md:w-1/2">
        <Header currentQuestion={currentQuestion} count={count} questionIndex={questionIndex} />

        <div className="flex flex-col justify-center items-center">
          <h2
            className={
              "max-sm:h-28  text-md md:text-xl text-center min-h-28 max-sm:pt-2 md:pt-10 pl-8 pr-8" +
              (currentQuestion.question.length > 150 && " max-sm:text-sm ") +
              (currentQuestion.question.length > 200 && " max-sm:text-xs ")
            }
          >
            {currentQuestion.question}
          </h2>
          <div className="max-sm:h-[316px] max-sm:bg-slate-100 max-sm:w-full max-sm:mx-2 max-sm:border max-sm:pb-4 pt-10 max-sm:overflow-y-scroll md:grid md:grid-cols-2 p-6 pb-0 md:grid-flow-row flex flex-col gap-1 md:justify-center ">
            {isError && <div className="absolute ml-24 tooltip tooltip-open" data-tip={currentQuestion.errorMessage}></div>}

            {currentQuestion.Response_1.map((choice, i) => {
              let item = choice.replace("-", "").trim();

              if (item.includes("other") || item.includes("Other")) {
                return;
              }
              // let isSelected = questionNum.selections.indexOf(item) > -1;
              //  console.log(currentQuestion.Response_1.length);
              return (
                <div className=" hover:bg-slate-200  max-w-72 form control bg-white  border-2 rounded max-sm:mt-0 " key={`btn_${choice}_${i}`}>
                  <label className="label cursor-pointer flex justify-start gap-3 p-1 ">
                    <input
                      onChange={() => {
                        let temp = currentQuestion.selections;
                        handleSelection(item, temp);
                        // if (`#${item}_check`)
                        //   console.log(item);
                      }}
                      id={`${item}_check`}
                      type="checkbox"
                      checked={currentQuestion.selections.includes(item)}
                      className="checkbox checkbox-primary"
                    />
                    <span className="">{item.split("(")[0]}</span>
                  </label>
                </div>
              );
            })}

            {hasOther && (
              <div className=" hover:bg-slate-200 max-w-72 md:w-58 form control  bg-white border-2 rounded">
                <label className="label cursor-pointer flex justify-start gap-3 p-1 ">
                  <input
                    onChange={() => {
                      document.getElementById("my_modal_1").showModal();
                      // if (`#${item}_check`)
                    }}
                    checked={currentQuestion.other}
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="">{currentQuestion.other ? "Other: " + currentQuestion.other : "Other (Please Specify)"}</span>
                </label>
              </div>
            )}
          </div>
          <div className="mt-6 max-sm:w-full">
            <Controls
              currentQuestion={currentQuestion}
              handleBack={handleBack}
              handleNext={handleNext}
              questionIndex={questionIndex}
              isActive={currentQuestion.selections.length >= currentQuestion.min || currentQuestion.other}
              isAutoAdvance={isAutoAdvance}
              setIsAutoAdvance={setIsAutoAdvance}
              showAutoAdvance={false}
            />
          </div>
          {/* <div onClick={handleNext} className="btn  bg-[#FFCB18] border-slate-300 shadow-sm mt-4">
              NEXT
            </div> */}
        </div>
        <OtherPopup other={currentQuestion.other} setOther={handleOther} />
      </div>

      <div className="hidden md:block md:min-w-1/2 md:w-1/2  mt-2 right-0 fixed">
        <img src={img} className=" object-center object-cover  h-screen " alt={currentQuestion.img_aria} />
      </div>

      <img src={logo} className="hidden md:block fixed w-[280px] bottom-0 right-1" alt="" />
    </div>
  );
}

export default MultiSelect;
