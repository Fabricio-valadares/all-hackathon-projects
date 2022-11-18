import { Routes, Route } from "react-router-dom";
import Dashboarding from "../pages/dashboarding";
import Login from "../pages/login";
import ScreenInitial from "../pages/onboarding/screenInitial";
import Register from "../pages/register";
import QuestionOne from "../pages/onboarding/questionOne";
import QuestionTwo from "../pages/onboarding/questionTwo";
import QuestionThree from "../pages/onboarding/questionThree";
import QuestionFour from "../pages/onboarding/questionFour";
import QuestionFive from "../pages/onboarding/questionFive";

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/onboarding/screen-initial' element={<ScreenInitial />} />
			<Route path='/dashboarding' element={<Dashboarding />} />
			<Route path='/onboarding/question-one' element={<QuestionOne />} />
			<Route path='/onboarding/question-two' element={<QuestionTwo />}/>
			<Route path='/onboarding/question-three' element={<QuestionThree />}/>
			<Route path='/onboarding/question-four' element={<QuestionFour />}/>
			<Route path='/onboarding/question-five' element={<QuestionFive />}/>
		</Routes>
	);
};

export default Router;