import ExamsCards from "../components/ExamsCards";
import FutureGoals from "../components/FutureGoals";
import IntroMessage from "../components/IntroMessage";
import WhyChooseUs from "../components/WhyChooseUs";

function Home(){
    return(
        <>
            <IntroMessage/>
            <WhyChooseUs/>
            <ExamsCards/>
            <FutureGoals/>
        </>
    )
}
export default Home;