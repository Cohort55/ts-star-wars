import {defaultHero, starWarsInfo} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";
import useHero from "../utils/hooks.ts";

const StarWars = () => {
    const {isHeroValid} = useHero(defaultHero);

    return isHeroValid ? (
        <div className="farGalaxy">
            {starWarsInfo}
        </div>
    ) : <ErrorPage/>;
};

export default StarWars;