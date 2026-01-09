import { type } from "../data/animals";

export function Filter() {
  return (
    <div>
      <div>
        <h3>Type d'animal</h3>
        <select>
          {type.map((key) => (
            <option key={key.type}>{key.type}</option>
          ))}
        </select>
      </div>
      <div>
        <h3>Localisation</h3>
        <input type="search" placeholder="Votre ville" />
      </div>
    </div>
  );
}
