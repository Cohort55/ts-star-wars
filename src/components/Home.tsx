import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import {defaultHero} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";
import useHero from "../utils/hooks.ts";

const Home = () => {
    const {isHeroValid} = useHero(defaultHero);

    return isHeroValid ? (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    ) : <ErrorPage/>;
};

export default Home;