import Beer from "./Beer";
import "./beer.css";

export default function BeerList ({beers}) {
    return (
        <div className="beer-list-container">
            <h2 className="beer-list-title">Nuestra Selección de Cervezas</h2>
            <div className="beer-grid">
                {
                    beers.map((beer) => (
                        <Beer key={beer.name} beer={beer} />
                    ))
                }
            </div>
        </div>
    )
}