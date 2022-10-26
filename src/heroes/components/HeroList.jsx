import { getHeroesByPubliser } from "../helpers"

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPubliser( publisher );

  return (
    <ul>
        {
        heroes.map((heroe)=>(
            <li key={heroe.id}>{heroe.superhero}</li>
        ))
        }
    </ul>
  )
}
