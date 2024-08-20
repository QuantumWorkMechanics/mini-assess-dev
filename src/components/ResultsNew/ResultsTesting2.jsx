import { useEffect, useState } from "react";
import { mockResults } from "../../modules/results/mock-results";
import LaunchForm from "../Results/LaunchForm";
import LaunchPDF from "./LaunchPDF";
import ResultsFlat from "./ResultsFlat";
import { scoreDiagnostic } from "../../modules/results/scoring-service";

function ResultsTesting2({ diagnostic, selections }) {
  const [results, setResults] = useState();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let tempResults = scoreDiagnostic(mockResults);
    setResults(tempResults);
    console.log(tempResults);
  }, []);

  return (
    <div>
      <div>
        <ResultsFlat selections={selections} diagnostic={diagnostic} />
      </div>
      <div className="bottom-0 fixed w-screen justify-center">
        {results && <LaunchPDF progress={progress} setProgress={setProgress} results={results} />}
      </div>
    </div>
  );
}

export default ResultsTesting2;
