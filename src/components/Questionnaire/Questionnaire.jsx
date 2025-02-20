import { useState, useEffect } from "react";
import "../../index.css";
//import { questionBank, resultsList } from "../../modules/question-bank";
import { questionBank, categoriesList } from "../../modules/question-bank-v3-scrubbed";
import { useLocation } from "react-router-dom";
import NavBar from "../Navigation/NavBar";

import SectionComplete from "./SectionCompleted";
import AllSectionsComplete from "./AllSectionsComplete";
import Header from "./Header";
import SliderSelect from "./SliderSelect";
//import Results from "../Results/Results";
import categoryList from "../Utils.jsx/CategoryList";
import MultiSelect from "./MultiSelect";
import img7 from "../../assets/image7.jpeg";
import { PopupButton } from "@typeform/embed-react";
import SingleSelect from "./SingleSelect";
import ResultsNew from "../ResultsNew/ResultsNew";
import logo from "../../assets/GreyLogo.png";
import cLogo from "../../assets/colorLogo.png";
import img1 from "../../assets/image10.jpeg";
import img2 from "../../assets/image14.jpg";
import img3 from "../../assets/image16.jpg";
import img4 from "../../assets/image17.jpg";
import img5 from "../../assets/image18.jpg";
import img6 from "../../assets/image5.jpeg";
import img8 from "../../assets/image8.jpeg";
import img9 from "../../assets/image6.jpeg";
import img10 from "../../assets/image11.jpeg";
import ResultsFlat from "../ResultsNew/ResultsFlat";
import useTimeout from "../Utils.jsx/useTimeout";
import ResultsFull from "../ResultsNew/ResultsFull";
import HeaderDiag from "../Utils.jsx/HeaderDiag";

const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function Questionnaire() {
  const location = useLocation();

  const [currentSliderValue, setCurrentSliderVal] = useState(0);
  const [desiredSliderValue, setDesiredSliderVal] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [isExploding, setIsExploding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sectionComplete, setSectionComplete] = useState(false);
  // const [isOpen, setOpen] = useState(true);
  const [seeResult, setSeeResult] = useState(false);
  const [spotLight, setSpotLight] = useState(1);
  const [tfHidden, settfHidden] = useState({});
  const [imageIndex, setImgageIndex] = useState(0);
  const [isAutoAdvance, setIsAutoAdvance] = useState(false);
  const [isError, setIsError] = useState(false);
  const [noOfQuestions, setNoOfQuestions] = useState(false);
  const [tooltipFlag, setToolTipFlag] = useState(0);
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    //Scroll if using navbar for better visibility
    // window.matchMedia("(min-width: 768px)").matches
    //   ? window.scrollTo({ top: 112, behavior: "smooth" })
    //   : window.scrollTo({ top: 72, behavior: "smooth" });
    //setQuestionList([]);
    //window.history.replaceState();
    // window.history.replaceState({}, "");
    //console.log(location.state);
    setCampaign(location.state.campaignId);
    let tempList = questionBank.filter((el) => {
      let test = categoriesList.map((x) => x.Type);
      // console.log(test);
      return !test.includes(el.Dimension);
    });

    let includedCategories = [
      "",
      "HR Ecosystem Maturity",
      "Skills Maturity",
      "Implementation and Change Management",
      "HR Strategy and Planning",
      "Artificial Intelligence",
      "Digital Experience",
      "HR Data",
      "Organization Size",
    ];
    // console.log(location.state);
    for (const key in location.state.selections) {
      if (location.state.selections[key]) {
        includedCategories = [...includedCategories, categoriesList.filter((cat) => cat.DiamondLoc == key)[0]];
      }
    }
    //  console.log(includedCategories);
    // filterCategories
    includedCategories.map((cat) => {
      let temp = questionBank.filter((q) => q.Dimension == cat.Type);
      tempList = [...tempList, ...temp];
    });
    // console.log(tempList);

    tempList = tempList.sort((a, b) => {
      return a.Number - b.Number;
    });
    //  console.log(tempList);
    tempList.map((el, i) => {
      tempList[i].Current = 0;
      tempList[i].Desired = 0;
      tempList[i].selections = [];
    });

    console.log(tempList);

    setQuestionList(tempList);
    setCurrentQuestion(tempList[0]);
    setNoOfQuestions(tempList.length);
  }, []);

  function handleSlider(sliderValue, sliderType) {
    let temp = currentQuestion;
    temp[sliderType] = parseInt(sliderValue);

    if (sliderType == "Desired") {
      setDesiredSliderVal(parseInt(sliderValue));
    } else {
      setCurrentSliderVal(parseInt(sliderValue));
    }

    updateQuestionState(temp);

    // if (isAutoAdvance && checkForAutoAdvance(sliderType, sliderValue)) {
    //   //  console.log("handling current");
    //   setTimeout(() => {
    //     handleNext();
    //   }, 900);
    // }
  }

  function checkForAutoAdvance(sliderType, sliderValue) {
    return (
      (sliderType == "Desired" && currentSliderValue > 0 && (sliderValue > currentSliderValue || (currentSliderValue == 4 && sliderValue == 4))) |
      (sliderType == "Current" && sliderValue > 0 && (sliderValue < desiredSliderValue || (desiredSliderValue == 4 && sliderValue == 4)))
    );
  }

  function handleSingleSelect(item) {
    let temp = { ...currentQuestion };
    temp.selections = item;
    updateQuestionState(temp);
  }

  //  function showError(){

  //  }

  function handleMultiSelect(item) {
    let temp = { ...currentQuestion };
    let i = temp.selections.indexOf(item);
    console.log(temp);
    console.log({ i });

    if (i < 0) {
      temp.selections.push(item);
    } else if (i > -1) {
      temp.selections = temp.selections.filter((x) => x != item);
    }
    // STEP OUTS

    // Remove selected options from Question 8
    const selectionsToRemoveFromQ8 = temp.selections;
    if (temp.hs_formName == "q6" || temp.hs_formName == "q8") {
      let tempQuestions = [...questionList];
      if (temp.hs_formName == "q6") {
        console.log(tempQuestions);
        tempQuestions = tempQuestions.map((question) => {
          if (question.hs_formName == "q8") {
            question.Response_1 = question.Response_1.filter((responseOption) => {
              return !selectionsToRemoveFromQ8.includes(responseOption.trim()) || responseOption.trim() == "None";
            });
          }
          return question;
        });
      }
      // Remove None if items are selected
      if (!temp.selections.includes("None") && temp.selections.length > 0) {
        console.log("!includesNone and length > 0");
        let indexOfNone = temp.Response_1.indexOf("None");
        if (indexOfNone > -1) {
          temp.Response_1.splice(indexOfNone, 1);
        }
      }
      // Add None if no items are selected.
      console.log(temp.selections);
      console.log(temp.Response_1);

      if (temp.selections.length == 0 && !temp.Response_1.includes("None")) {
        temp.Response_1.push("None");
      }

      setQuestionList(tempQuestions);
    }
    updateQuestionState(temp);
  }

  function updateQuestionState(newState) {
    setCurrentQuestion(newState);
    setQuestionList((prev) => {
      prev[questionIndex] = newState;
      let tempHidden = {};
      prev.map((el) => {
        if (el.fieldType == "Slider Field") {
          tempHidden[`${el.hs_formName}`] = `Current: ${el.Current}, Desired: ${el.Desired}`;
        } else {
          tempHidden[`${el.hs_formName}`] = el.selections.toString();
        }
      });
      // console.log({ prev, tempHidden });
      settfHidden(tempHidden);

      return prev;
    });
  }

  function handleNext(isManual) {
    let tempIndex = questionIndex;
    if (
      tempIndex + 1 < questionList.length &&
      (questionList[tempIndex].fieldType == "Multi-Select" || questionList[tempIndex].fieldType == "Single Select")
    ) {
      setImgageIndex((x) => x + 1);
    }
    if (questionIndex + 1 == questionList.length) {
      setProgress(1);
      // let tempList = questionList;

      setIsExploding(true);
      // setTimeout(document.getElementById("my_modal_1").showModal(), 1000);
      return;
    }
    let tempList = questionList;
    if (questionList[tempIndex].fieldType != "Slider Field" || !isAutoAdvance || (isAutoAdvance && !isManual)) {
      setProgress((questionIndex + 1) / questionList.length);
      setCurrentSliderVal(tempList[questionIndex + 1].Current);
      setDesiredSliderVal(tempList[questionIndex + 1].Desired);
      setCurrentQuestion(questionList[questionIndex + 1]);
      setQuestionIndex((prev) => prev + 1);
    }
  }

  function handleBack() {
    let tempList = questionList;

    setCurrentSliderVal(tempList[questionIndex - 1].Current);
    setDesiredSliderVal(tempList[questionIndex - 1].Desired);
    setCurrentQuestion(questionList[questionIndex - 1]);
    if (questionList[questionIndex - 1].fieldType == "Multi-Select" || questionList[questionIndex - 1].fieldType == "Single Select") {
      setImgageIndex((x) => x - 1);
    }
    setQuestionIndex((prev) => prev - 1);
  }

  function handleOther(val) {
    let temp = { ...currentQuestion };
    temp.other = val;
    updateQuestionState(temp);
  }

  return (
    <>
      {!seeResult && !isExploding && (
        <>
          {/* <HeaderDiag /> */}
          <div className="fixed top-18 -mt-2.5 overflow-x-clip">
            <progress className="progress progress-secondary w-screen " value={progress * 100} max="100"></progress>
          </div>

          <div className="h-screen text-primary flex-col md:flex-row flex w-screen ">
            {sectionComplete && <SectionComplete setSectionComplete={setSectionComplete} setSeeResult={setSeeResult} />}
            {!isExploding && !sectionComplete && (
              <>
                <div tabIndex={0} id="focus-gaurd" aria-label="Guard to start focus at beginning of inputs.">
                  {currentQuestion.fieldType == "Slider Field" && (
                    <>
                      <Header currentQuestion={currentQuestion} count={noOfQuestions} questionIndex={questionIndex} />
                      <SliderSelect
                        spotLight={spotLight}
                        setSpotLight={setSpotLight}
                        currentSliderValue={currentSliderValue}
                        desiredSliderValue={desiredSliderValue}
                        handleSlider={handleSlider}
                        currentQuestion={currentQuestion}
                        questionIndex={questionIndex}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        isAutoAdvance={isAutoAdvance}
                        setIsAutoAdvance={setIsAutoAdvance}
                        tooltipFlag={tooltipFlag}
                        setToolTipFlag={setToolTipFlag}
                      />
                    </>
                  )}
                </div>

                {currentQuestion.fieldType == "Multi-Select" && (
                  <div className="flex max-sm:flex-col ">
                    <MultiSelect
                      handleOther={handleOther}
                      handleNext={handleNext}
                      handleBack={handleBack}
                      handleMultiSelect={handleMultiSelect}
                      currentQuestion={currentQuestion}
                      count={noOfQuestions}
                      questionIndex={questionIndex}
                      img={IMAGES[currentQuestion.img_index]}
                      isAutoAdvance={isAutoAdvance}
                      setIsAutoAdvance={setIsAutoAdvance}
                    />
                  </div>
                )}

                {currentQuestion.fieldType == "Single Select" && (
                  <SingleSelect
                    handleNext={handleNext}
                    handleBack={handleBack}
                    handleSingleSelect={handleSingleSelect}
                    currentQuestion={currentQuestion}
                    count={noOfQuestions}
                    questionIndex={questionIndex}
                    img={IMAGES[currentQuestion.img_index]}
                    isAutoAdvance={isAutoAdvance}
                    setIsAutoAdvance={setIsAutoAdvance}
                  />
                )}
              </>
            )}
            <div
              tabIndex={0}
              className="focus-gaurd"
              onFocus={() => {
                let nextEl = document.querySelector("#focus-gaurd");
                console.log(nextEl);
                nextEl.focus();
              }}
            ></div>
          </div>
        </>
      )}{" "}
      {isExploding && (
        <div id="complete-message-wrapper" className="flex flex-col justify-center items-center w-screen">
          <AllSectionsComplete campaign={campaign} setIsExploding={setIsExploding} setSeeResult={setSeeResult} tfHidden={tfHidden} />
        </div>
      )}
      {seeResult && questionList && (
        <>
          {/* // <div className=" w-screen h-screen flex flex-col text-center pt-20">Coming Soon</div> */}
          <div className="">
            <ResultsFull diagnostic={questionList} selections={location.state.selections} />
          </div>
        </>
      )}
    </>
  );
}

export default Questionnaire;
