import React from "react";
import LoginNav from "../Components/RegistrNav/LoginNav.jsx";
import { PrimeReactProvider } from 'primereact/api';
import PageOne from "./PageOneLogin.jsx";
import PageOneSign from "./PageOneSign.jsx";
import PageTwoSigin from "../Components/SingFlowPages/PageTwoSigin.jsx";
import PagethreeSign from "../Components/SingFlowPages/PagethreeSign.jsx";
import PageFourCreateprofil from "../Components/SingFlowPages/PageFourCreateprofil.jsx";
import PageFiveCreateProfil from "../Components/SingFlowPages/PageFiveCreateProfil.jsx";
import Page6creatProfil from "../Components/SingFlowPages/Page6creatProfil.jsx";
import PageSevenProfil from "../Components/SingFlowPages/PageSevenProfil.jsx";
import PageEateProfil from "../Components/SingFlowPages/PageEateProfil.jsx";
import PagenineProfil from "../Components/SingFlowPages/PagenineProfil.jsx";
import TheEndPage from "../Components/SingFlowPages/theEndPage.jsx";
import { useNavigate, useParams } from "react-router";

const SurveQuestions = () => {

  const { step } = useParams()
  const navigate = useNavigate()
  const currentStep = parseInt(step) || 1

  return (
    <div>
      {currentStep === 1 && <PageTwoSigin />}

      {/* <PageOneSign /> */}
      {/* <PageTwoSigin /> */}
      {/* <PagethreeSign /> */}
      {/* <PageFourCreateprofil /> */}
      {/* <PageFiveCreateProfil /> */}
      {/* <Page6creatProfil /> */}
      {/* <PageSevenProfil /> */}
      {/* <PageEateProfil /> */}
      {/* <PagenineProfil /> */}
      {/* <TheEndPage /> */}
    </div>
  );
};

export default SurveQuestions;
