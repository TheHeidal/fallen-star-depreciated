import { OrrerySVG } from "./OrrerySVG";
import Ring from "./primitives/Ring";

export default function Orrery() {
  return (
    <div className="flex flex-col content-center">
      <h1 className="text-3xl text-center">The Orrery</h1>
      <div className="flex flex-row content-center">
        <OrrerySVG
          className="size-3/4"
          viewbox="-100 -100 200 200"
          childrenList={[<Ring r={80} fill="red" />]}
        />
        <div>
          <>
            <p>During the Planning Phase, spend time by placing a Token…</p>
            <ul className="list-disc list-inside">
              <li>
                On the Meeting Phase, to attend the Wizardmoot. (Encouraged, but
                not required)
              </li>
              <li>
                On the Orrery, to move any celestial body (besides the Sun)
                forward or backwards a distance equal to its arc.
              </li>
              <li>
                On one of your Companions, to get +1 in their associated Element
                for the month.
              </li>
              <li>
                On your Codex, to change the Lore of your Isle, Sanctum, or
                Secrets.
              </li>
              <li>
                On your Domain, to fulfill some aspect of your Domain's
                mechanics.
              </li>
              <li>With the Grimoire, to cast a spell Patiently. </li>
              <li>Anywhere else the game provides.</li>
            </ul>
            <p>You may also place your Star…</p>
            <ul className="list-disc list-inside">
              <li>
                On one of your Tokens, in order to turn that action into a
                scene, and play out what happens there.
              </li>
              <li>
                On another Wizard, to have a scene with that Wizard in a
                location and context of his choice.
              </li>
            </ul>
          </>
        </div>
      </div>
    </div>
  );
}
