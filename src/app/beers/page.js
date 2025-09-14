import BeerList from "./components/BeerList";
import {beers} from "../data/mocs";

//Aca uso el componente BeerList
export default function BeerPage () {
    //TO DO: Llamar al al API: https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Beers.json
    
    return (
        <BeerList beers={beers} />
    );
}
