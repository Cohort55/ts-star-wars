import {characters} from "./constants.ts";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "./context.ts";

const useHero = (defaultHero: string) => {
    const {heroId} = useParams();
    const {changeHero} = useContext(SWContext)

    const isHeroValid = !!(heroId && characters[heroId])

    useEffect(() => {
        if (isHeroValid) {
            changeHero(heroId);
        }
    }, [heroId, changeHero, isHeroValid]);
    return {
        heroId: isHeroValid ? heroId : defaultHero,
        isHeroValid,
    }
}

export default useHero;