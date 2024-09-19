import "./Codex.css";
export default function Codex() {
  return (
    <div className="codex">
      <header>
        <h1>The Book of Thrones</h1>
        <p>The Warlock's Codex of the Seven-Part Pact</p>
        <p>Draft 3.24.9.2 (September 2024)</p>
      </header>
      <section>
        <h2>Part I: The Warlock</h2>
        <p>
          Behold the Warlock, known as the Keeper of the Throne, Blade-Bearer,
          and the Furious Lord of Lords. He is the oath-sworn Wizard of the
          Ishanian King, who acts on behalf of the crown of Isha to ensure the
          stability of power across the archipelago. He is oft of an honorable
          and harsh temperament, and he is governed by the planet Mars and the
          metal Iron. It is said the first Warlock was the King's oath-bound
          court Wizard, and the love shared between the two was only marred by
          their vicious betrayal. He is the only Wizard of the Seven-Part Pact
          empowered to commit violence against an errant wizard, and thus he is
          known as the Pact's Executioner.
        </p>
        <p>
          Within this Part of The Book of Thrones, you will be prompted with a
          number of choices to make on behalf of your Wizard. Should your
          answers ever change, or your Wizard grow beyond your original image of
          him, your Elements should change as well.
        </p>
        <section>
          <h3>Humour & Temperament</h3>
          <p className="question">
            The four Elements govern your relationship with magic, and these
            Elements are governed by your relationship with the world. Mark down
            which path best describes you, and increase the corresponding
            Elemental Circle.
          </p>
          <ul>
            <li>
              One of the many noble clans of Isha claims you as a member of
              their family. Were you your father's favorite child (+1 Earth) or
              the black sheep of the family (+1 Air)?
            </li>
            <li>
              As a member of the nobility, it is expected for you to possess
              tremendous wealth. Are you frugal and austere (+1 Earth) or do you
              spend lavishly on that which appeals to you (+1 Water)?
            </li>
            <li>
              You are a warrior on behalf of the King, and have thus fought in
              battle. Within your own mind, are you a chivalrous hero and
              adventurer (+1 Water) or a brutal executioner (+1 Air)?
            </li>
            <li>
              The King commands you to murder an innocent woman, who begs for
              your mercy. Do you save her life and hide her away (+1 Water) or
              follow his commands despite your misgivings (+1 Fire)?
            </li>
            <li>
              You serve two masters, and are caught between your loyalties.
              Which do you value more: the King (+1 Air) or the Pact (+1 Fire)?
            </li>
            <li>
              You have killed a man before. When you close your eyes and
              remember, do you feel proud (+1 Fire) or guilty (+1 Earth)?
            </li>
          </ul>
          Your fragment of the Seven-Part Pact is a blade, but in your hands it
          may take another form:
          <ul>
            <li>
              A regal broadsword, engraved with an oath of power, which may
              burst into flames at your will. (+1 Fire)
            </li>
            <li>
              A shining longbow, carved with glorious depictions of warriors
              past, and always nocked with an arrow. (+1 Air)
            </li>
            <li>
              A cruel ax, heavy with blood and executions past, which no man but
              you may lift. (+1 Earth)
            </li>
            <li>
              Twin cutlasses, one white as bone and the other black as night,
              well-versed in naval combat. (+1 Water)
            </li>
          </ul>
          <section>
            <p>
              You have a familiar who accompanies you in your magic, and who
              accompanies you when you charge into battle. They are:
            </p>
            <ul>
              <li>
                A glorious stallion, with iron hooves and a flowing mane. (+1
                Fire)
              </li>
              <li>
                A powerful hawk, with violent talons and a piercing call. (+1
                Air)
              </li>
              <li>
                A growling mastiff, with dull eyes and drooling jaws. (+1 Earth)
              </li>
              <li>
                A playful ermine, with beautiful fur and tiny sharp teeth (+1
                Water)
              </li>
              <li>
                (Or another animal, who provides +1 to an Element of your
                choice)
              </li>
            </ul>
          </section>
        </section>
        <section id="history-and-secrets">
          <h3>History & Secrets</h3>
          <p className="question">
            There was another Wizard before you, your old master who taught you
            the practice of malison, and in many ways was a father for you. How
            did he teach you, and what became of him? Choose 1 which is known to
            all and 1 which you harbor in secret.
          </p>
          <ul>
            <li>
              He was a popular and gregarious noble, who knew how to inspire
              largesse in all who knew him, including you. He passed away
              choking on a bone during a feast, or some similar uneventful and
              unremarkable death.
            </li>
            <li>
              He was the last of an older kind of hero, a chivalrous knight who
              raised you on stories of adventure and codes of honor. He was
              killed by a wild boar during a hunting expedition, a great tragedy
              that all of Isha mourned.
            </li>
            <li>
              He was a monstrous tyrant, finding pleasure from the misery of
              others, and who taught you both to inflict violence on others and
              to suffer it. He died while fighting against one of the great foes
              of the Pact, or perhaps another Wizard.
            </li>
            <li>
              He was a greedy craven coward, who played Isha's politics to
              maintain his authority, and who taught you the violence of lies
              and manipulation. You killed him yourself, and it brought you no
              small pleasure to do so.
            </li>
            <li>
              He was the hound of his betters, and served both the king and the
              Pact with obedient fury, teaching you to do the same. He died the
              way all violent dogs do — someone had to finally put him down.
            </li>
            <li>
              You never met the former Warlock, as you were chosen by the King
              and the Pact working together to fill a vacant seat. You learned
              much from the agony of trying to fill his shoes.
            </li>
            <li>
              You learned your magic amid the politics and tutors of the court,
              and you have the scars to prove it. You needed no master to teach
              you the art of violence.
            </li>
          </ul>
          <p>
            The one scarcity all Wizards share is time. Wizards discuss their
            age in scores, periods of twenty years that shape their long and
            wizened lives. How old are you, and what is expected of you in your
            age?
          </p>
          <ul>
            <li>
              You are just a boy, far too young to assume the mantle of Warlock,
              but the sudden death of your old master and the demands of the
              King forced you to take on power beyond your years.
            </li>
            <li>
              You are a young fellow, not yet two scores old, and it is expected
              for you to already be betrothed to another noble's daughter, and
              for you to have engaged in your first duel.
            </li>
            <li>
              You are of a middling age, between two and three scores old, and
              you are expected to be married, and to have fathered at least one
              child.
            </li>
            <li>
              You are of a proper age, between three and four scores old, and
              you are expected to have led a campaign of war, and to have taken
              many lives.
            </li>
            <li>
              You are of a great age, between four and five scores old, and you
              are expected to be the patriarch of your clan, and to be among the
              oldest and wisest within court.
            </li>
            <li>
              You are at least a century old, older than the king, and it is
              expected for you to be dead by now, and everyone at court is
              waiting hungrily for your passing.
            </li>
            <li>
              You are far more than a century old, older than entire dynasties
              of Isha's rule, and you have become part of the architecture of
              the court, a single constant amid a sea of chaos.
            </li>
          </ul>
          <p>
            Magic changes those who work with it. Choose 1 change, and another 1
            for every score you've been alive:
          </p>
          <ul>
            <li>
              You can move as fast as falling rain, as fast as a hawk, as fast
              as a battlecry.
            </li>
            <li>
              You are as tall and broad as three men put together, and have the
              hunger of an army.
            </li>
            <li>
              An extra pair of arms burst from your shoulders, strong enough to
              lift mountains.
            </li>
            <li>
              Your face contorts to resemble a war-mask, with fearsome eyes and
              tusks jutting from your lips.
            </li>
            <li>
              You can smell blood better than a hound, and you can smell in
              someone's sweat their fear and hate.
            </li>
            <li>
              A flaming ring burns above your head, which shines brighter in
              your anger and fury.
            </li>
            <li>Your blood is blue, and scalding for any who touch it.</li>
            <li>
              Armor grows from your skin, scales and plate etched with tales of
              your exploits.
            </li>
            <li>
              Multiple pairs of iron wings extend from your back, sharp enough
              to cut skin and strong enough to carry you through the air.
            </li>
            <li>
              When you rage your breath transforms into flames, and you may
              breathe fire the way a dragon might.
            </li>
            <li>
              A long barbed tail juts from your back, prehensile and dripping
              poison.
            </li>
            <li>
              Your teeth are sharpened to points and your tongue lolls from your
              mouth like a dog.
            </li>
            <li>You crave the taste of human flesh.</li>
          </ul>
          <section>
            <p className="question">
              You are a man, as all Wizards are. However within your heart you
              know:
            </p>
            <ul>
              <li>
                To be a man is to be a leader and dominate over others, and you
                are always at the beck and call of your master.
              </li>
              <li>
                To be a man is to be a chivalrous hero, and yet this world has
                no more room for heroes, and chivalry is an easy way to a
                pathetic death.
              </li>
              <li>
                Some deep-set part of you is repulsed by your maleness, and so
                you double down into a crueler and harsher version of
                masculinity.
              </li>
              <li>
                There is some part of you which is kind and caring and
                distinctly feminine, but you must guard that part of your heart
                from the violence of your job, and only show it to those closest
                to you.
              </li>
              <li>
                You were once a woman, but you had no choice but to kill that
                part of you, and reject the weakness of femininity in order to
                serve the King.
              </li>
              <li>
                No one dares speculate on your manhood. You would kill the next
                person to make such a claim in front of you.
              </li>
              <li>
                There is an even greater secret, which is for you and you alone.
              </li>
            </ul>
          </section>
          <section>
            <p className="question">
              Your name as a Wizard within the Seven-Part Pact is:
            </p>
            <ul>
              <li>
                A name taken from military history or from a great king of the
                past.
              </li>
              <li>A title bestowed upon you by the King himself.</li>
              <li>An honorific earned from your exploits in battle.</li>
              <li>A nickname picked up in the halls of the court.</li>
            </ul>
          </section>
        </section>
        <section>
          <h3>Might & Trappings</h3>
          <p>
            Through your Pact-Fragment, you may freely perform any of the
            following:
          </p>
          <ul>
            When casting a spell directly against an unwilling foe, or when
            casting any spell during Combat (as discussed during Part IV),
            consult an additional die. Interpret the presence of "⊖" (Salt) as
            "♂" (Mars). Murder any mortal who stands before you with a single
            strike of your Pact-Fragment, faster than they can react and with
            such certainty that none may dispute their death.
          </ul>
          <section>
            <p>
              Along with your Pact-Fragment, you possess 3 of the following
              Treasures. Pick which ones you inherited from your old master,
              which were gifted to you by the King for your service, and which
              you won in combat:
            </p>
            <ul>
              Armor forged from old mage-steel, scavenged up from beneath the
              seas, and strong enough to withstand any blow from a mundane
              weapon. A shield bearing a perfectly mirrored surface, and
              reflecting certain lesser magics back at those who seek you harm.
              A pair of greaves bearing feathery wings, such that when you
              strike them against the ground by your will, they lift you up into
              the air at a tremendous speed. A full set of chess pieces, who
              when commanded, will transform into soldiers and fight at your
              side until sunrise. An iron ring used in ancient days by torturers
              and soldiers amidst the Tragedies. Whoever wears it cannot die
              from any wound. One of the last dragon's eggs, rare beyond measure
              and warm to the touch. A beautiful locket on a delicate chain, the
              sort carried by soldiers on a long campaign, with enough room for
              a portrait of someone you long for.
            </ul>
          </section>
          <section>
            <p>
              Additionally, you are adept at the secret practices of malison,
              which grant you access to certain Humble Magics, cantrips which
              you may perform at any time through your will and without any
              incantation. They include:
            </p>
            <ul>
              <li>
                Perform a daring feat of physical athleticism which dazzles
                others' senses, leap into the air, or lift heavy stones which no
                one else could lift.
              </li>
              <li>
                Roar with a thunderous voice, or carry your voice across a
                battlefield, or act with the sounds of drums and horns at your
                steps, to motivate your troops or dismay others.
              </li>
              <li>
                Place both hands upon someone's shoulders, and in an instant
                divine whether they are an eligible heir for the bloodline of
                Isha's royalty.
              </li>
            </ul>
          </section>
          Finally, you carry the following possessions: A red silk robe, with
          iron clasps bearing the symbol of Mars. Three sets of clothes, at
          least: suitable for a wealthy nobleman, a general commanding an army,
          or a simple servant incognito amongst the court. Any materials
          necessary for the casting of magic, such as: arrowheads, golden coins,
          flowers, etc. Any accessibility aids or mobility tools, such as:
          glasses, a cane, painkillers, etc. This very Codex, filled with the
          notes of Warlocks past.
        </section>
      </section>
      <section>
        Part II: The Keep & Its Companions In the monumental fortress of the
        past the Warlock schemes, surrounded by those few useful enough to keep
        his company. It is a cutthroat and bitter life, here at the head of
        Isha, but it is the seat of power for the Furious Lord of Lords, and all
        know to watch their backs when they visit his home. Within this Part of
        The Book of Thrones, you will be prompted with a number of choices to
        make about your Wizard's Isle, Sanctum, and Companions. Many of these
        choices are not immediate, and if you intend to stay with this Warlock
        for a long period of time, you may wait until you have a free moment (or
        until the story of the Pact calls upon such knowledge). The Keep Within
        The Halcyon Isles The Halcyon Isles are the traditional seat of power in
        Isha, all surrounding the King's castle. Change or add one detail from
        its Lore, if you would like. You may Spend Time to care for the Halcyon
        Isles, and in doing so, change or add to its Lore further. The Halcyon
        Isles are a beautiful and serene place, with rolling hills, sprawling
        gardens, and groves of carefully-tended trees tucked away amid its
        towering cliffs. The Castle of the King looks over the Halcyon Isles, an
        enormous structure of great hewn stone and bearing countless towers and
        parapets overlooking the southern seas. It is rumored the palace was
        built by giants, for the doorways are far too large for any man and the
        stairs had to be carved anew. Generations of kings have further added to
        the castle, with incongruous and spectacular new wings. Every noble clan
        maintains an estate somewhere in the Halcyon Isles, and those nearest to
        the Castle connect to it via narrow stone bridges high above the rocks.
        The Halcyon Isles require incredible amounts of produce and manpower
        from the rest of the archipelago in order to maintain the hedonistic
        lifestyle of the nobles who dwell there. The Warlock's Keep is a small
        castle built across a narrow strait from the palace of the King, and
        serves as your private Sanctum from the outside world. Change or add one
        detail from its Lore, if you would like. You may Spend Time to care for
        your Sanctum, and in doing so, change or add to its Lore further. The
        keep of the Warlock is musty and minimalist, maintained by servants too
        afraid to move anything that could be valuable. The keep is enormous and
        uncomfortable, with ceilings too tall for any human and doorways made
        for giants. The keep is covered in tapestries and trophies of wars long
        forgotten, surrounding you with your own inadequacy. A bridge runs from
        the palace directly to your sleeping chambers, allowing the King to
        fetch you at his whims. Traps prepared by paranoid Warlocks previous to
        you litter the lower floors and walls, and you must tread carefully,
        lest you accidentally set one of them off. A Map of the Halcyon Isles
        Whenever you have a spare moment, complete and mark the map of the
        Halcyon Isles. It should include some or all of the following details:
        The Warlock's Keep. The part of the palace the King currently dwells in.
        The older abandoned parts of the palace. The estates of the various
        powerful clans. The barrack and servants' quarters, hidden from view.
        Where the powerful go to relax in public. Where the cunning go to scheme
        in secret. Companions & Care While you are a Wizard, you are also
        mortal, and as a mortal, you require care from others to survive. These
        are your four Areas of Care, and each is associated with a particular
        Element. Your daily life, ensuring your quarters are kept clean, your
        vestments are prepared, and only the finest foods will touch your plate.
        (Earth) Your emotional life, comforting you when your thoughts turn
        violent, keeping your bed warm each night, and washing your scars with
        herbal baths. (Water) Your private life, guarding your keep from spies
        and assassins, concealing your emotions from the outside world, and
        ensuring your secrets never leave this room. (Air) Your creative life,
        providing conversation late into the night, practice with both strategy
        and physical skill, and stimulating conversation on the nature of power.
        (Fire) The higher your Elemental Circle is, the more important and
        valued that Companion's Care will be. Choose four Companions, with at
        least 1 Companion who shares your Keep with you and at least 1 who
        prefers the comforts of the palace, and assign each an area of Care.
        Your prentice, who must serve as Warlock when you die. Your wife, an
        arranged marriage from an allied clan. Your child, naive to the violence
        of power. Your sibling, who tends to the affairs of your family estates.
        Your lover, who doesn't care about your scars or your titles. Your
        tutor, who trained you in matters of the court. Your soldiers, who are
        willing to die by your command. Your ancestor, whose spirit watches over
        your lineage. You may Spend Time with one of your Companions to gain +1
        in their associated Elemental Circle. You may also, during a Scene, ask
        of them any favor, and they will comply if they are able to, and ask
        something of you in return. Should one of your Companions ever depart,
        die, or become unwilling to provide their Care, you must do so yourself.
        Each month you must Spend Time fulfilling or handling the missing Care,
        often in a sloppy, self-destructive, or vice-filled way. If you don't,
        the associated Elemental Circle is reduced to zero this month.
        Developing Your Companions Whenever you have a spare moment, develop
        more about your Companions by answering questions about them, exploring
        their inner lives further. Your Prentice How did you find your Prentice?
        What is his name? What lie have you told your Prentice about his
        origins? Who else from the court is trying to manipulate your Prentice?
        or How must you indoctrinate your Prentice into the warrior's life? Your
        Wife How did you meet your wife? What is her name? What secrets does
        your wife understand which you cannot grasp? When did the two of you
        learn to work together as a team? or What political ambitions does she
        still vie for? Your Child Which gender do you know your child is? What
        is his or her name? What is it about politics which your child is still
        unaware of? Why is your child not your prentice, despite their wishes?
        or Where does your child go, when they sneak away at night? Your Sibling
        Is your sibling older or younger than you? What is their name? Why
        wasn't your sibling chosen to be Warlock instead of you? What power does
        your sibling possess amid the politics of Isha? or What have you helped
        your sibling achieve, which they could never have gotten on their own?
        Your Lover How do first impressions often deceive your lover's nature?
        What is their name? What gift does their presence give you which no one
        else can provide? How do the two of you express your affection for one
        another? or Why must your relationship stay secret from the King? Your
        Tutor What has age taken from your tutor? What do you call them? What
        did your tutor teach you that your parents never would? Which part of
        them is just as vivid as it was in her youth? or What secret would your
        tutor never teach you? Your Soldiers How do you train your soldiers?
        What do you call them? What vice do your soldiers indulge in above all
        else? Who have your soldiers killed for you? or What other power do your
        soldiers serve? Your Ancestor When did your ancestor die? What is their
        name now? Why is your ancestor disappointed in you? What secrets does
        your ancestor teach you? or Under what oath is your ancestor bound?
      </section>
      <section>
        Part III: The Court of the King The King of Isha sits upon a sturdy
        throne at the heart of his bustling court, full of politicians and
        generals, heirs and traitors, all squabbling and bickering over their
        part of the great coffers of power. To rule over Isha is to find
        agreement between a thousand conflicting interests, to consolidate
        countless factions into a single mighty force. You ought not to envy the
        King, although you may be grateful that he has you to aid him in his
        plans. Within this Part of The Book of Thrones, you will be prompted to
        establish the Laws of the Court and the personality of the King of Isha,
        along with the rough sketches of those who fill his court. This Part
        will also walk through the rules for maintaining the Court, adding new
        Servants to its ranks, and executing the will of those Servants once
        they catch the ear of the King. Entering The Court The King of Isha
        Within the walls of the palace, the stars and planets orbit only around
        the King of Isha, the Halcyon King, the Divine Regent of the Immortal
        Flames, Most Wise, and the Summer Lord of a Thousand Isles. Determine
        his sun, moon and rising by completing the following sentences. Sun Sign
        — The King outwardly appears to be… Moon Sign — The King is secretly…
        Rising Sign — The King wishes he was… Aries — A righteous warrior or an
        argumentative fool. Taurus — A sturdy commander or a stubborn bastard.
        Gemini — A beloved diplomat or a two-faced spymaster. Cancer — A
        romantic lover or a weepy crybaby. Leo — A legendary hero or an arrogant
        braggart. Virgo — A nurturing father or a scrupulous penny-pincher.
        Libra — A prudent philosopher or a cowardly people-pleaser. Scorpio — A
        brilliant artist or a manipulative rat. Sagittarius — A noble champion
        or a furious tyrant. Capricorn — A dependable guardian or a miserable
        melancholic. Aquarius — A scholarly genius or a pseudointellectual
        windbag. Pisces — An amateur Wizard in his own right or a delusional
        madman. The King's name may be of any style you think is appropriate,
        and is frequently followed by a number. A King is given a new name upon
        his ascent to the throne, to align him in history with his predecessors.
        Kings never have surnames — it is unbecoming to have to claim authority
        through association. Palace Politics This is a model of the King's
        Court, showing his opinion of those who serve him. His Servants
        (including you) all Stand somewhere in his estimation, although his
        opinions are mercurial at best, and will frequently adjust where each of
        his Servants Stands. Proximity to the Inner Circle (His Love, His Guide,
        His Friend, and His Heir) takes Time and effort, and if one isn't
        careful it's easy to slide off the Court and to be dismissed from his
        presence. The Laws of the Palace depend upon the whims and desires of
        the King, and failure to follow them will result in a reduction of
        Standing at best, or exile or imprisonment at worst: One may not speak
        to the king without being spoken to. One must always speak kindly of the
        King and agree with him, no matter how absurd his statements. One must
        always be dressed in elaborate silks, gowns, armors, and other
        decorative elements which can take many hours to adorn. One must follow
        elaborate rules of etiquette while eating and dining, the subtleties of
        which require extensive training. One must gift lavishly and excessively
        to all other nobility they encounter. One must always keep one's murders
        secret, for it's considered tasteless to kill another. One must never
        speak the name of the previous king within the palace. Power in Isha is
        consolidated amongst the Clans, noble houses who each command and tithe
        different areas of the archipelago. To learn more of their secrets,
        consult The Noble Clans starting on page XX. The Croft Clan, who lay
        claim to most of the arable land in Isha, and control farming,
        shepherding, and most other parts of rural Isha's economy. The Uroch
        Clan, who are responsible for creating many of Isha's great works of
        art, and control the royal quarries, the order of stonemasons, and the
        lapidary association. The Lark Clan, who profit off of Isha's bountiful
        oceans, and control the fisheries, wet markets, and the drowned towers
        of Old Isha. The Caravel Clan, who long ago mastered the holy art of
        ship-building, and control the sacred shipwright houses, their timber
        groves, and their secrets. The Oshrani Clan, who wield a chokehold over
        Isha's ports, and control the markets and tariffs of Isha, the five
        banking halls, and the merchant guilds. The Wain Clan, who ferry the
        dead and dying out to the Graven Isle, and control the black freight,
        the surgeon guilds, and (in secret) the import of illegal magic and
        goods from Scuttleport. The Ix Clan, who safeguard Isha's secret
        liturgical writing systems, and control Isha's scriptorium, the vellum
        drovers, and the lesser universities. Rules of the Court Summary of the
        Court Each Servant occupies a Standing within the King's Court. Each
        Standing only has room for one Servant. If someone is moved forward,
        then someone else is pushed further away from the King. The four
        Standings closest to the King (Love, Friend, Guide, and Heir) are his
        Inner Circle. A Servant's Agenda is determined by their Authority.
        Whenever a Servent implements their Agenda, it changes Isha. If you're
        in the Inner Circle, you may use your Agenda as well, to Impact Isha. If
        you're in the King's Inner Circle, you must Spend Time each month to
        maintain your Standing. You may Spend Time to move any Servant to an
        adjacent Standing, or if someone is at the Risky Standings (Harlot,
        Traitor, Worthless, Disgrace), to remove them from the Court. Each
        month, consult the Stars in alignment with the King's Sun, Moon, and
        Rising signs. Mercury: Determines who the King pushes forward or pushes
        away. Venus: Determines which member of the Inner Circle's Agenda
        occurs. Mars: Determines who the King advances from within the Court.
        Jupiter: Determines who from outside joins the Court. Saturn: Determines
        the state of violence within the Court. The Sun: Determines the King's
        regal performance. Authorities & Allegiances Every member of the Court
        is composed of two parts: their Authority and their Allegiance. Their
        Authority is an appointment granted to them by the King, liable to be
        stripped away at any moment, and determines how they wield power over
        Isha when they occupy the King's Inner Circle. Their Allegiance
        determines whose interests they serve and protect when they do wield
        power. Each Servant's Authority and Allegiance, along with their Agenda,
        is tracked on their Authority Card, which can be found starting on page
        XX. You can give these Servants more information by answering the
        questions in Part IV: Keeper of the Throne on page XX when you have a
        spare moment. New Servants will frequently join the Court. Choose
        whichever Authority and Allegiance makes the most fictional sense, and
        consult with the rest of the Celestial Audience for advice. The easy
        choice is always the Ascendant Allegiance. Agendas in the Court The
        position of the stars determine which Servant's Agenda occurs each
        month. Agendas are powerful ways to Impact Isha, and can produce
        enormous changes to the Domains of other Wizards — for good or for ill.
        When a Servant's Agenda occurs, look at their Authority Card and choose
        one of their Agendas. Try to choose the Agenda that will be most
        interesting as the Celestial Audience, rather than the choice which
        benefits you as the Warlock. This Agenda may Impact other Domains, add
        new Servants to the Court, rework the Court dramatically, or cause the
        death of an important character. Frequently the Agenda will favor that
        Servant's Allegiance. Standing In The Court The Court is composed of 20
        Standings, which determine each Servant's stance in the eyes of the
        King. Those closest to the King (His Love, His Friend, His Guide, and
        His Heir) are his Inner Circle. The four immediate outside the Inner
        Circle (His Courtesan, His Confidant, His Ward, and His Hound) represent
        those he values but who he doesn't fully trust. The eight beyond that,
        in the outskirts of the Court, are those the King finds irritating or
        unpleasant in this moment. The final four (Harlot, Traitor, Worthless,
        and Disgrace) are the Risky Standings, and those in them are most at
        risk of being disposed of, through the risk provided by the Standing.
        When a Servant moves into a Standing which already possesses a Servant,
        the old Servant is forced to move to a further Standing. This will often
        cause more Servants to be pushed further back. If a Servant is forced to
        move back, and they're already in a Risky Standing, then they will be
        disposed of. If you're in the King's Inner Circle, you must Spend Time
        to stay in his good graces. If you don't, at the end of the month, move
        backwards in his Standing. If you're at a Risky Standing, you must
        similarly Spend Time to maintain your position. If you don't, you'll be
        Disposed of. While the Warlock's disposal is rare, if it occurs, work
        with the Gate-Keeper to determine if and how you survive. If you do
        manage to live, consult page XX for how to proceed when the Warlock is
        not trusted by the King. Dueling, Charming, and Disposal Gentlemanly
        Dueling When two men at court wish to prove their power over one
        another, or for some reason one feels wronged by the other, they may
        choose to Duel. These Duels are often (although not always) non-lethal,
        focused instead on proving authority and demonstrating mastery. Only men
        can be challenged to Duels. When two Servants Duel, ask the Celestial
        Audience who would win. The winner moves forward in the King's Standing,
        while the loser moves back in Standing. Charming Seduction, both literal
        and more metaphorical, occurs constantly at Court, and everyone's
        loyalties can be quite mercurial. When a Servant charms another Servant,
        change the Charmed Servant's Allegiance to match the charmer. If a
        Servant Charms another Servant of the same Allegiance, instead: The two
        Servants have sex. Perhaps they have a baby. The two Servants run away
        together. Remove them from the Court. The two Servants conspire to kill
        another Servant. Dispose of an enemy Servant. Disposal If a Servant is
        at a Risky Standing, and is pushed further back, they are Disposed of.
        This will be different based on which corner of the Court they were
        removed from. If the Servant is Assassinated or Executed, they're dead.
        Discuss with the Gate-Keeper who killed them. If the Servant is
        Imprisoned or Exiled, they may still be alive. Set them aside, and add
        them to the Court when a new King takes power. If the Warlock (or any
        other Wizard) would be disposed of, instead ask the Gate-Keeper for when
        a Wizard is dying, or consult the rules for When The Warlock Does Not
        Stand Within The Court on page XX. Spending Time At Court There are
        spies everywhere within the palace, and manipulating the webs of gossip
        is just as valuable a skill as martial prowess to survive within the
        court. You may Spend Time to whisper in the King's ear and move any
        other Servant one Standing forward or backwards in the King's
        estimation. If someone is at a Risky Standing, you may Spend Time to
        Dispose of them. You may also Spend Time to Charm any Servant of the
        Court, or Duel any man in the Court. Watching The Stars Celestial Body
        Sun Sign Moon Sign Rising Sign Unaligned With Any Mercury The King moves
        two of his Courtesan, his Confidant, his Ward or his Hound into his
        Inner Circle. The King moves someone from the outskirts of his Court two
        Standings closer. The King moves up to two Servants from the Ascendent
        Allegiance closer to him. Two non-Wizard men in the Court Duel. The
        Victor moves 2 Steps closer to the King, while the Loser moves 2 Steps
        further away. Venus His Heir's Agenda occurs. If there is no Heir, the
        next-closest Servant's Agenda occurs instead. His Guide's Agenda occurs.
        If there is no Guide, the next-closest Servant's Agenda occurs instead.
        His Friend's Agenda occurs. If there is no Friend, the next-closest
        Servant's Agenda occurs instead. His Love's Agenda occurs. If there is
        no Love, the next-closest Servant's Agenda occurs instead. Mars The King
        finds someone he's interested in and wants to keep around. Choose one of
        the Social Authorities and add them to the Court, assigning them the
        same Allegiance as a member of the Inner Circle. The King is charmed by
        a mysterious new stranger. Choose one of the Social Authorities and add
        them to the Court, assigning them the Allegiance of a Foreign Power or
        other unexpected force. A royal pregnancy is discovered. Ask the
        Celestial Audience who the mother is. Six months (two trimesters) from
        now, the child will be born and enter the Court as a Prince or Princess,
        unless their mother dies. The King fills a political office. Choose one
        of the Political Authorities and add them to the Court, assigning them
        the same Allegiance as a member of the Inner Circle. Jupiter The King
        curries favor with another member of the Pact. Ask any other Wizard to
        choose any Authority and add them to the Court, with Allegiance to that
        Wizard. A Dignitary from another world arrives to meet with the King.
        Ask the Celestial Audience to choose a Realm beyond ours, or a mythical
        land, as their Allegiance. The King's Guide spreads their wisdom through
        the court. Three Servants of your choice are Charmed by the King's
        Guide. If there is no Guide, choose the next-closest Servant instead.
        The Court is otherwise quiet this month. Saturn When Saturn first
        enters, a member of the King's Inner Circle is assassinated. Each
        subsequent month Saturn is alignment, create an Impact representing the
        dead Servant's Allegiance seeking revenge. When Saturn first enters,
        flip a coin. On heads, he narrowly survives an attempt on his life. On
        tails, he is not so lucky, and is murdered by a member of his Inner
        Circle. Proceed to Inheritance on page XX. The King grows cautious of
        those he once considered friends. Every Servant in the Court, starting
        with those in a Risky Position, are moved back in Standing. The Court is
        otherwise quiet this month. The Sun It is his birthday. All Wizards must
        Spend Time to attend and have a collective Scene, during which each
        Wizard must give him a present. Any errant Wizards receive a
        Complication. The King, in a moment of cruel tyranny, decides to embark
        on his own project to cement part of his negative reputation. Work with
        the Celestial Audience to create a Complication for each other Wizard as
        a result. The King begins a historic initiative to celebrate and exalt
        part of his positive reputation. Give each other Wizard a Gift as a
        result. The Court is otherwise quiet this month. List of Authority Cards
        As Warlock, you are an Authority as well. Your card is on page XX. There
        are two kinds of Authority, divided by how they achieve and maintain
        their power. First are Social Authorities. These are Authorities whose
        power is granted from fondness or fascination on the part of the King. A
        Mistress, who sleeps with the King and pleasures him. May also be called
        a concubine, catamite, or a betrothed. On page XX. A Bard, who
        entertains the King through performance, japes, and artistry. May also
        be called a painter, a fool, or a poet. On page XX. A Knight, who fights
        on behalf of the King and keeps him company. May also be called a
        knight, a bachelor, or the master of the hunt. On page XX. An Advisor,
        who whispers advice and wisdom to the King. May also be called a doctor,
        a chaplain, or a vizier. On page XX. A Mercenary, who protects the King
        and their Allegiance. On page XX. Certain Social Authorities are central
        to the operation of the palace, and represent the King's immediate
        household. The Queen, whose loyalty determines the Ascendent Allegiance.
        On page XX. A Prince, who is a son of the King (by blood, adoption, or
        trade). On page XX. A Princess, who is the daughter of the King (by
        same, or by marriage). On page XX. The second category are Political
        Authorities. These are the Authorities whose power is granted via an
        official appointment from the King. The Viceroy, who may also be called
        a secretary, an emissary, or the hand of the king. They represent the
        King in foreign affairs. On page XX. The Treasurer, who may also be
        called a steward, a chamberlain, or a seneschal. They take care of the
        King's treasury and the Royal Mint. On page XX. The Governor of a
        specific Isle, who rules over that Isle as a representative of the King.
        There may only be one Governor per Isle. On page XX. A Dignitary from a
        foreign power or powerful clan, who represents them at court. There may
        only be one Dignitary per Foreign Power. On page XX. Certain Political
        Authorities only wield power at the Court if a specific Wizard is also
        present at the table. While you may still choose to include these
        Authorities during play, their Agenda may be limited. The Champion of
        the King, only if a Necromancer is present, on page XX. The Pontifex of
        the Royal Faith, only if a Hierophant is present, on page XX. The
        Admiral of the Royal Fleet, only if a Mariner is present, on page XX.
        The Constable of the King's Guard, only if a Faustian is present, on
        page XX. The Chronicler of the King's History, only if a Sorcerer is
        present, on page XX. The Oracle of the King's Future, only if an
        Anchorite is present, on page XX. If there are multiple Political
        Authorities, they may share duties but possess different Titles, drawing
        on the list of Alternate Titles on their Authority Card. Social
        Authorities Queen The Queen's Allegiance is always Ascendant. The Queen
        must always be a woman. There can only be one Queen. Her Agenda is
        (choose 1 each time): Dispose of all Mistresses. Each other member of
        her Allegiance moves forward in Standing, then performs one of their
        Agendas. (They cannot move the Queen from her Standing). Add two new
        Servants of any Authority and of her Allegiance to the Court. Prince The
        Prince's Agenda is (choose 1 each time): Become Heir. If he was already
        Heir, instead Duel another man in the Court. If the Prince wins, the
        loser must change their Allegiance to the Prince's Allegiance. Charm any
        woman in the Court, changing her Allegiance to his. Move forward in
        Standing everyone of his Allegiance. Princess The Princess's Agenda is
        (choose 1 each time): Become any other Authority. Marry someone else
        (either via betrothal or elopement). Ask the Celestial Audience who.
        Remove the Princess from the Court, add a Dignitary from her fiance's
        Allegiance in the Standing she occupied. Add a new Mercenary, Bard, or
        Mistress of her Allegiance to the Court. Mistress Alternate Titles:
        Concubine, Catamite, Betrothed. The Mistress's Agenda is (choose 1 each
        time): Move the Queen to a Risky Standing. If there is no Queen in the
        Court, or if the Queen is already Risky, instead Dispose of the Queen
        and become Queen. Their Allegiance becomes Ascendent. Ravish the King.
        For each Servant of their Allegiance in the Court, choose an Agenda of
        theirs to Occur. Add a new Prince, Princess, or Mercenary of their
        Allegiance to the Court. Bard Alternate Titles: Artist, Fool, Poet. The
        Bard's Agenda is (choose 1 each time): Charm someone else in the Court,
        changing their Allegiance. Create a beautiful work of art venerating and
        honoring the King. For each Servant of their Allegiance in the Court,
        choose an Agenda of theirs to Occur. Display a great public work in
        Isha. Describe it, and create an Impact upon another Wizard's Domain
        representing the propaganda. Knight Alternate Titles: Optimate,
        Bachelor, Master of the Hunt The Knight's Agenda is (choose 1 each
        time): Become any Political Authority. Duel another man in the Court. If
        the Knight wins, Charm someone else in the Court, changing their
        Allegiance. Go on an adventure with the King. Ask the Celestial Audience
        how it goes, and create an Impact upon another Wizard's Domain
        representing the results of their trip. Advisor Alternate Titles:
        Vizier, Chaplain, Doctor The Advisor's Agenda is (choose 1 each time):
        Choose any two other Servants of the Advisor's Allegiance. Both of their
        Agendas occur. Add two Servants of any Authority and of the Advisor's
        Allegiance to the Court, then move them both forward in Standing. Charm
        someone else in the Court, changing their Allegiance. Mercenary
        Alternate Titles: Warrior, Praetor, Eunuch The Mercenary's Agenda is
        (choose 1 each time): Guard another Servant of their Allegiance. The
        next time that Servant would die or be otherwise disposed of, they swap
        places with this Mercenary. Duel another man in the Court. If the
        Mercenary wins, the loser dies. Move a Servant of their Allegiance to
        the King's Heir. If someone of their Allegiance is already Heir, instead
        kill the King and proceed On Inheritance. Political Authorities Viceroy
        of Foreign Affairs Alternate Titles: Secretary, Minister, Hand of the
        King The Viceroy's Agenda is (choose 1 each time): Strengthen ties
        between Isha and a Foreign Power. Add a Dignitary of that Allegiance to
        the Court, and determine the Impact of these relations on Isha. Make a
        demand of a Foreign Power to empower your Allegiance. If they don't
        assent, escalate to economic sanctions. If there are already economic
        sanctions, instead declare War. Determine the Impact of this on Isha.
        Remove someone else from the Court and appoint them a diplomat to a
        foreign power, sending them away from Isha. Treasurer of the Royal Coin
        Alternate Titles: Steward, Treasurer, Seneschal The Chamberlain's Agenda
        is (choose 1 each time): Tithe the common folk of Isha, taking food from
        their granaries and coin from their purses. Determine the Impact of
        these losses on the populace. Use the King's finances to support the
        Chamberlain's Allegiance. Describe in what way, and determine the Impact
        of this on Isha. Hire a Mercenary, Advisor, or Bard of their Allegiance,
        and add them to the Court. Governer of an Isle Alternate Titles:
        Intendant, Marquis, Dapifer Choose an Isle of Isha for the Governer to
        govern. The Governor's Agenda is (choose 1 each time): Appease the
        populace of their Isle. Ask the Celestial Audience what they want, and
        the King gives it to them. Determine the Impact of this generosity, and
        give a Gift to the associated Wizard. Pass a law across their Isle to
        favor their Allegiance. Describe the law and determine the Impact of the
        law on the people of the Isle. Demand the Wizard of their Isle Spends
        Time with them and listens to their demands. If that Wizard doesn't,
        create a Complication for them. Dignitary from a Foreign Land Alternate
        Titles: Ambassador, Envoy, Diplomat The Dignitary's Agenda is (choose 1
        each time): Establish a physical outpost of their Allegiance on one of
        the Isles of Isha. Determine the Impact of this presence. Provide the
        King with a lavish gift from their Allegiance. Improve the Standing of
        all Servants of their Allegiance. Add a Mistress, Advisor, or Mercenary
        from their Allegiance to the Court. Champion of the King Alternate
        Titles: Executioner, Headsman, Lord Marshall The Champion's Agenda is
        (choose 1 each time): Duel someone else. If the Champion wins, the loser
        dies. Murder any non-Wizard character who opposes the King. They must
        become a Foe within death. Lead a strike on behalf of their Allegiance
        against their enemies. Choose an enemy, and determine the Impact of this
        skirmish. This creates a Foe within death. Pontifex of the Royal Faith
        Alternate Titles: Bishop, Chapelmaster, Almoner The Pontifex's Agenda is
        (choose 1 each time): Provide charity for the people of Isha. Tell the
        Hierophant to remove any two Problems, then move the Pontifex back in
        Standing. Invest in a large piece of religious art or iconography
        celebrating their Allegiance. Choose a Temple, change its Lore
        appropriately, and create a Rank 2 Problem for the Hierophant reflecting
        this. Push the court towards piety and devotion. Add an Advisor to the
        Court with "Orthodoxy" as their Allegiance. Admiral of the Royal Fleet
        Alternate Titles: Commodore, General, Duke The Admiral's Agenda is
        (choose 1 each time): Devote energy and care to maintaining Isha's
        shipping network. Tell the Mariner to place five Ships on his Map.
        Declare war against one of the Wild Things on the Mariner's Map. Place a
        Front down upon that Wild Thing. It's treated as a Foreign Power. Hire
        sailors from outside Isha to protect the archipelago. Add a Mercenary to
        the Court, whose Allegiance is to a Foreign Power. Ships cannot be
        destroyed by Storms next month. Constable of the King's Guard Alternate
        Titles: Magistrate, Captain, Bailiff The Magistrate's Agenda is (choose
        1 each time): Arrest another member of the Court (who isn't in the
        King's Inner Circle) and Imprison them. Clamp down on criminal activity.
        Remove an Occultist or Cult from the Faustian's Communities. If there
        are no Occultists or Cults, instead the police violence creates a new
        Occultist or Cult. Protect their Allegiance from dangerous influences.
        Remove all Schemes from the Faustian's Community most closely associated
        with their Allegiance, and then put two Schemes on the Community their
        Allegiance is most opposed to. Chronicler of the King's History
        Alternate Titles: Tutor, Teacher, Professor The Chronicler's Agenda is
        (choose 1 each time): Demand each Archive move one of their Records to
        the King's Personal Library. Any Archives which choose not to do so are
        Disrupted. Create a new Scholar, patronized by the King's Personal
        Library. If there are fewer than two Records in that Archive, grant them
        patronage to another Archive as well. Add a new Bard or Advisor to the
        Court, whose loyalty is to "The King's Personal Library." Oracle of the
        King's Future Alternate Titles: Haruspex, Auger, Astrologer The Oracle's
        Agenda is (choose 1 each time): Change the Allegiance of any member of
        the Court to the Oracle's Allegiance, although they may not be aware of
        how their fate has been manipulated. Divine a glorious future for the
        King or another member of his Inner Circle. Give them a random face-down
        Destiny. Warn the King of a nightmare that threatens his Domain. Ask the
        Anchorite to reveal a Nightmare's Hooks in the Warlock's Domain and then
        remove it. Court Wizard When a Wizard (including the Warlock) enacts his
        Agenda, he may choose from the following: Give a minor Gift (or minor
        Complication) to every Wizard, on behalf of the King. Dismiss any
        non-Ascendent Allegiance of your choice , removing every Servant of that
        Allegiance from the Court. Add two new Servants of any combination of
        Authorities, with Allegiance to you. Change any one Servant's Authority.
        Move everyone else in the Court back in Standing. Imprison, Assassinate,
        Execute, or Banish any one person in Isha. Declare War on a Foreign
        Power. The current King steps down. Replace him with his Heir, following
        the rules On Inheritance on page XX. Give a major Gift (or major
        Complication) to any Wizard, as long as it is within the King's power to
        conceivably provide. Create any other Impact you may desire within the
        Archipelago.
      </section>
      <section>
        Part IV: Keeper of the Throne While you play the Warlock, there is also
        a second role which you must fulfill, in your part as Throne-Keeper of
        the Celestial Audience. Through the Celestial Audience, you will
        represent the ceaseless violence of the world, the brutality in the
        hearts of men and the great machines of war, and ensure that when blood
        is spilled, Wizards pay their dues. Wizards are men, and as men we must
        all carry the seeds of anti-life within our hearts — someone must remind
        them of this fact. Within this Part of The Book of Thrones, you will
        learn your responsibilities as a member of the Celestial Audience and
        the unique rules governing your own domain, that of warfare and
        politics, and the violence which underpins them. These will provide you
        with tools to engage with scenes even when your character isn't present.
        All Wizards Are Men All Wizards Are Men, indeed, all Wizards know this.
        In your part as the Celestial Audience, you are the guardian of this
        truth, who provides its implications as they play out across the world
        of Isha. Maleness and power are intertwined. To successfully be a
        powerful man is to be a member of an exclusive club, where women are
        eager to please and other men vie for your attention. Everyone benefits
        from this hierarchy, as long as they're willing to play by the rules. A
        noblewoman can call upon her husband or father to protect her from the
        common folk, and in that act of violence she too benefits from that
        consolidation of power (as long as that woman never challenges or
        undermines his own authority in any way). Manhood is enforced through
        internal and external pressure. There are a tremendous number of
        expectations tied to masculinity; expectations of abledness, virility,
        heterosexuality, confidence, and domination. Failure to live up to these
        expectations results in social rejection and hostility, while embracing
        masculinity is lionized and virtuous. Proving that you're good at being
        a man means other men will respect you and the women in your life will
        trust that they can depend on you to protect them. No one will doubt
        your right to rule if only you're man enough. Masculinity is performed
        and asserted through violence. If people start doubting your masculine
        authority, your grip on power is threatened. The only way to prove (to
        yourself, to others, to the world) that you're a real man is through
        dominating those weaker than you. The greater the threat of emasculation
        and powerlessness, the more pressure you face to commit acts of violence
        that prove your authority. Even if a woman joined the Pact, she would
        still need to prove herself within this system through cruelty and
        domination, and the cycle of power would continue unabated. You make the
        final call. Within the Celestial Audience, you rule absolutely on all
        matters of your Domain. If there is any uncertainty around the
        mechanisms of violence or expectations of masculinity from any member of
        the Pact, you make the final decision. If you feel ill-equipped or too
        biased to make that decision, you may deputize another member of the
        Celestial Audience to decide for you. When men lay blows against one
        another to prove their power, you can consult the Rules for Combat on
        page XX. During Other Scenes When you're operating as part of the
        Celestial Audience, keep an eye out for the following: Ways in which
        Wizards negatively Impact the King, his Court, the noble Clans, or other
        powerful institutions in Isha. Represent this through the adding or
        adjusting of Servants to the Court, changing Allegiances, or in rare
        cases, utilize the Rules for War. Opportunities to remind the Pact that
        All Wizards are Men, and to invoke the Rules For Combat. Space to
        enforce the hierarchy of power that dominates Ishanian life,
        expectations of masculinity pushed upon the wizards, and the way
        patriarchy warps the archipelago. Rules For Combat Once more, the blade
        is drawn. Once more, blood must flow. No matter what, we find ourselves
        here again. Combat can take many forms, from simple duels to messy
        brawls to large scale battles. Combats are composed of Combatants,
        individuals or groups who act together. Each Combatant is armed with
        Assets, a short list of weapons, armaments, defenses, incantations, and
        skills that are relevant for the Combat at hand. Combat proceeds back
        and forth, exchanging The Initiative — a token bearing a crown on it,
        and the measure of who is leading the fight, and who is following
        behind. Skilled Combatants are those who can make elegant and creative
        use of their Assets, and who can stay on their toes and keep their
        focus. A fight is a lot like a dance, and the first to stumble will most
        likely fall. Observing Combat The Throne-Keeper, and any other members
        of the Celestial Audience not present in the Combat, have the vital
        responsibility of observing the fight and adjudicating on what is or
        isn't permissible. Throughout every fight, Combatants will be taking
        various actions, strikes, parries, and responses, and if at any moment
        any member of the Celestial Audience finds one's behavior to be
        implausible, they must speak up and challenge this act. Everyone must
        remember their duties to the believability of the world of Isha and the
        story of the Pact. While Combat favors those with quick wits, it should
        be won by those who can ground their actions in believability and
        previously-established truth. While a Map isn't necessary, it can be
        helpful for the Celestial Audience to follow along with the events of
        the fight, especially if they're not participating. Draw a
        representation of the battlefield, and represent each Combatant with a
        token placed somewhere on the map. Adjust the tokens as the fight
        continues on, and use their placement to make decisions about the
        plausibility of various strikes and parries. For large-scale battles,
        where a Combatant may have Assets composed of platoons of troops and
        armadas of ships, instead represent each Asset as its own token on the
        Map. Preparing Assets At the start of every Combat, for each Combatant,
        the player speaking for that Combatant prepares a list of Assets
        available by answering the following questions about how prepared their
        Combatant is and what tools they possess. What weapons do you possess?
        (Each weapon is a separate Asset) Are you wearing any armor or wielding
        a shield? (Armor is collectively a single Asset) Do you have any
        Treasures on your person? (Each Treasure is a separate Asset) Do you
        have any magical abilities or know any humble magic? (Each magic is a
        separate Asset) Are you accompanied by any beasts or lesser servants?
        (Each is considered their own Asset) Do you have any training or
        relevant skills? (If so, your training is an Asset) Can you wield the
        landscape here to your advantage? (If so, that familiarity is an Asset)
        Are the winds, the seas, or any higher power present on your side? (If
        so, this power is an Asset) Do you feel excited or dedicated to this
        fight ? (If so, your excitement or dedication is an Asset) Dueling A
        duel between two honorable warriors is the model of violence, from which
        all other forms are descended. It is a shame, then, how rare they are.
        When a Duel is to begin, both sides prepare their list of Assets, and
        the initiator of the Duel seizes the Initiative. The wielder of the
        Initiative then takes an action, which is responded to by the opposing
        Combatant. Both duelists go back and forth in this manner, until one is
        unable to respond. If you possess the Initiative, you may choose from
        the following actions… Say: "I strike at you with [an Asset], which will
        [inflict Violence]." You must justify how this Asset commits violence.
        The opposing Combatant must now respond. Say: "In a decisive blow, I use
        [an Asset] to destroy [an opposing Asset]." You must justify how that
        Asset may be used to so thoroughly destroy the opposing Asset. They lose
        this Asset, but that opposing Combatant gain the Initiative. Say: "I
        step back and gather my strength." You pass the Initiative, but create a
        new Asset, repair a lost Asset, cast a spell, or Flee. If you've taken
        this action three times in a row, you must Flee. Say: "I don't know."
        You must pass the Initiative. If you don't possess the Initiative, you
        may choose from the following responses… Respond with: "I parry your
        strike with [an Asset]." You must justify how this Asset allows you to
        avoid or ignore the blow. Your opponent retains the Initiative. Respond
        with: "I take this blow, accepting your violence, but I strike back."
        You suffer the injury and pain inflicted by their strike, as many Assets
        as they can justify you lose, but you seize the Initiative. If the
        violence is enough to Incapacitate you, you must become Incapacitated.
        Respond with: "I don't know." and suffer the pain and injury of the
        strike, destroying as many Assets as they please and most likely
        Incapacitating you. In a fight with multiple Combatants, they then pass
        the Initiative. Casting Magic As Wizards, we frequently resort to magic
        during Combat. Magic isn't quick, however — when one casts a spell, they
        must step back and pass the Initiative. Record the results of the spell,
        and treat them as Assets to be utilized. A single spell can create
        multiple Assets in this fashion. When you use a Spell in this way, some
        of its properties may be hindered by the opposing Combatant's Wards, if
        they have any. Once you regain the Initiative, you may use the spell,
        and if they have no method to defend against such magical attacks, then
        they'll have no appropriate response. If a maledictive spell is
        described as occurring especially quickly, or faster than someone may
        respond, you immediately regain the Initiative after casting it, as the
        opposing Combatants simply cannot respond in time. Fleeing a Fight When
        someone has the Initiative, they may attempt to Flee a Combat. When they
        do so, they describe by what method you Flee (through magic, through a
        Treasure, through their own two legs, etc.) and whether they have any
        Assets which make their escape easier. The opposing Combatant may in
        turn justify which of their Assets could be used to impede the escape.
        The Celestial Audience decides whether the escape was a success. If it
        was, the fleeing Combatant is no longer present. If it wasn't, instead
        the fleeing Combatant loses one of their relevant Assets and the
        opposing Combatant seizes the Initiative. Incapacitation and Loss An
        Incapacitated Combatant is entirely at the mercy of the winning
        Combatant. They may choose to take the loser prisoner, maim the loser in
        some fashion, humiliate them, kill them, or let them go. If they would
        die, this encounter is no longer your responsibility — ask the
        Gate-Keeper what happens next. Multiple Combatants Fights with multiple
        Combatants function similarly to Duels, but with certain elements worth
        addressing. When one passes the Initiative (by stepping back or
        hesitating), they must pass it to whoever has been waiting the longest
        for their turn to act. When an Asset is destroyed with a decisive blow,
        the Initiative passes to the Combatant whose Asset was destroyed.
        Combatants who both lack the Initiative and lack any chance to respond
        can be assumed to be circling around the edge of the fight, licking
        their wounds and angling for a good attack. The Combat isn't over until
        all standing Combatants agree it has concluded, at which point they
        collectively decide what to do with the Incapacitated Combatants. If a
        Wizard is fighting against a squad of soldiers or another group of
        less-powerful Combatants, it can make sense to group those warriors
        together into one Combatant. If you do, choose one from below to best
        describe them: They are a small and skilled team. (Add an Asset for each
        team member and their skill) They are a gang of less than 20. (Add the
        Asset: "We're able to work together and coordinate.") They are an
        enormous mob. (Add the Assets: "Although we are many, we act as one."
        and "There are a limitless number of us.") Other Forms Of Combat There
        are forms of Combat which lie beyond these rules. Certain dinner parties
        between powerful nobles, contests of mental will in the realm of Dreams,
        and academic debates within the University may all be, on occasion, more
        accurately described as a form of Combat should the Celestial Audience
        deem it so. In these cases, determine Assets as you feel is appropriate,
        reflecting the unique circumstances of the fight. Rules For War Lords
        and ladies love to pretend that war will be quick and easy. The truth is
        that war is a messy affair, a state of volatility fought on many fronts,
        that ripples outwards throughout the world. While a battle may be
        modeled in the movement of troops and heroes, war is instead represented
        through volatility and chaos. Once a war begins, those who lead it are
        only somewhat in control of its motions, and war may continue to rage
        even without the support of its commanders. Wars aren't just fought with
        men, but with economies, propaganda, and in some cases, even dreams.
        Fronts When War begins, choose which member of the Celestial Audience
        will be representing each Side. As the Throne-Keeper, it is customary
        that you represent Isha itself. The attacking Side places down three
        Fronts to begin onto any other Wizard's Domain, a token representing a
        locus of contention and a site of wrestled control. Every different
        Domain with at least one Front present is said to be In Turmoil. Any
        Wizard's Sanctum or Isle, or the Orrery itself, representing a literal
        war being waged within their home. The Seas and Isles of the Mariner are
        locations of physical battles fought with troops, or strategic maneuvers
        to seize resources from those areas. Most Fronts of traditional Wars
        between nations will be placed here. Each Rank of the Temples of the
        Hierophant are a facet of Isha's economy and culture. (Notor is the port
        and trade, Zephon is farming and agriculture, Krolis is artisan
        craftworks, Hestar is for knowledge and faith) The Court Standings of
        the Warlock represent shadow battles and exchanges of political power
        within Isha. Each of the Communities of the Faustian are for the hearts
        and minds of the various Ishanian social classes. The Sorcerer's Books
        are historical events and perspectives on past events in Isha. The Gates
        of the Necromancer and the Sorcerer's Dreams can only be chosen and
        fought over by sides with some kind of access to those other realms.
        They may still possess Fronts, when Isha clashes with supernatural
        armies or when Wizards go to war against each other, but this is not the
        norm. Any other Lore in a Wizard's Codex may also possess a Front, which
        could represent an ideological battle or a far-away conflict in the
        furthest hells. Each month, every Front creates a Complication
        associated with its placement for their Wizard. Applying Force During
        the Planning Moon of each month, each Side participating in a War gains
        a certain amount of Force. Force represents the amount of (military,
        financial, social, magical, etc.) pressure your Side can apply to
        Fronts. Everyone representing a Side secretly places their Force: You
        can place any amount of Force on a Front, as you apply pressure there.
        You can spend four Force on an otherwise calm Domain to make that Domain
        In Turmoil and place a Front within it. You can spend two Force on any
        Domain In Turmoil, to create a new Front there. You can spend Force to
        leverage a foreign power, mercenary company, or other neutral party to
        lend aid. Two Force spent will ensure financial aid, providing an
        additional one Force for the next three months. Four Force spent will
        ensure soldiers and reinforcements, providing an additional three Force
        for the next three months. Cancel out opposing Force on Fronts
        one-to-one, leaving any excess Force on that Front. If a Side has at
        least two more Force than anyone else on that Front, they gain control
        of it, and may do one of the following: Push the Front to an adjacent
        space within that Domain. If there are two Fronts in the same space,
        they merge into one Front. If the Front at the edge of the Domain (one
        of the Near Gates of Death, a Rank I within a Temple, the Risky
        Standings in the Court, the Horizon Line of the Mariner's Map, or any
        space in the Faustian, Librarian, or Sorcerer Domains), remove the Front
        entirely. Remove the Front, claim control of the area the Front occupies
        and create a Bastion there for your Side, or destroy a Bastion present
        there. Bastions A Bastion for a side represents their ability to control
        that portion of a Wizard's Domain. This can be a literal fortress or
        battalion, or it can be a more metaphorical embargo or cult of
        personality, depending on the Domain. A Wizard must Spend an extra week
        of Time whenever they want to interact with the controlled portion of
        their Domain. The Bastion contributes an extra two Force to any other
        Fronts in the same Domain as it. Bastions can only be removed if a Front
        is moved over them and then won, or if the Bastion's controller willing
        lets go of control. War Comes To Isha Rallying Armies The armies of Isha
        are a diverse coalition of various forces, mustered together by a shared
        loyalty to the King. Each Allegiance is willing to contribute one Force
        if they have a Servant in the King's Court, and another two Force if
        they have a Servant in the King's Inner Circle. In the event of a civil
        war, or one in which Clans turn against the King, each traitorous
        Allegiance can contribute up to three Force to the Side if they're
        contributing manpower, or one Force if they're only contributing
        financially. If a foreign nation invades Isha, the amount of Force they
        can contribute each month depends on the amount of effort they're able
        to invest. The attackers get three Force, gaining an additional two
        Force for every active Front. If they're receiving ten or more Force,
        then this qualifies as a massive invasion of Isha. Every month a foreign
        power utilizes ten or more Force from their home, change their Lore to
        reflect the strain of this attack upon their economy. Suing For Peace
        Not all war ends with a formal declaration of peace. Hrotingmen, for
        instance, will sometimes arrive in the isles, spread chaos, and then
        withdraw their Forces as quickly as they arrived. Often though, when one
        Side has leverage of some kind over the other (such as a Front directly
        on top of their capital, or a kidnapped nobleman, or a trade route
        hostage, etc.), peace will be negotiated. Either side may call for Peace
        by placing one Force in the other Side's hand. If they accept, and
        return one Force, then during the Story Phase there is a scene where the
        two sides meet and negotiate concessions. Some concessions include:
        Return a surrendered Commander. Surrender an Isle or piece of territory.
        Provide Force to serve in the enemy's army. Provide an important
        individual to live in the enemy court. Remove all military presence from
        this land. Recognize the enemy as the true ruler of this land. Gift the
        enemy with some valuable resource. Forgive a debt owed to the enemy.
        Pledge to aid the enemy in the future. Any side may reject a peace
        treaty and demand further negotiations. If rejected, peace cannot be
        proposed again until next month. Frequently, there will be no clear
        winner of a war, and both sides must make concessions. Sometimes a side
        may insist upon certain concessions as a matter of revenge, or perhaps
        under the belief that such a concession will ensure no war of this
        nature comes to this land again. If the leader was forced to surrender,
        then they must still sign a peace treaty, but the terms will be entirely
        invented and negotiated by the enemy. Once a peace treaty is negotiated,
        work with the Celestial Audience to determine its Impact in Isha. War is
        a State of Mind Even if one side gives up or acquiesces to the demands
        of the other, the Fronts established continue to rage. Chains of command
        are ineffectual and unclear, and an army abandoned in the mountains of
        Isha will cheerfully turn towards banditry and piracy. Even once all
        sides agree the war is over, Force must still be applied each month to
        move the Fronts out of the Domains and restore Isha to a state of peace.
        War Outside Isha If Isha goes to war with a foreign power and sends
        their armies outside the archipelago, consult with the Wilds-Keeper on
        their Atlas of Faraway Lands (page XX of the Mariner's Codex) and
        establish Fronts within that. Each of these Fronts must be supported —
        in order to place Force on a Front so far away from Isha, it will cost
        one Force for each Step on the Journey, unless that Force can be
        obtained from a foreign power. Wizards At War Wizards may Spend Time to
        contribute two Force to the War effort through the resources of their
        Sanctum and their Companions. A Wizard may also use their Star upon any
        Front to enter into a Large-Scale Combat, and play out the battle which
        occurs there. This Battle can create a huge Impact if won, destroying
        Bastions and Fronts or even forcing an entire overcommitted side to
        surrender. If a Wizard possesses an army, perhaps rallied from the
        peasantry or conjured through some strange magic, it contributes between
        one and five Force to his side in the war, at the discretion of the
        Celestial Audience. In war, it will be especially tempting for a Wizard
        to take an outsized role in its resolution — perhaps to create a storm
        which destroys all of an empire's armies, or leave a king dead before he
        can blink. It is good for all Wizards to remember there is a reason the
        Seven-Part Pact was established in the first place, and why Wizards no
        longer command armies the way they did during the Tragedies.
      </section>
      <section>
        Part V: The Court's Secrets The Ishanian Legal System The laws of Isha
        (much like the laws of any nation) are fickly, arbitrary things,
        selectively enforced against different people based on the power and
        approval of the ruling powers. While a peasant can expect to be punished
        for the violation of any of these laws, a powerful noble can act without
        fear of consequence, as long as he stays on the good side of the King.
        Who Upholds The Law In the Blue City, and within the Palace, the law is
        enforced by the King's Guard, led by the Magistrate. Across the Halcyon
        Isles, in many smaller Isles, and in rural Isha, the law is enforced by
        the ruling Clan's Guard. These guards often are more concerned with
        trespassing and crimes against the ruling Clan, and will sometimes act
        against the King's interest in favor of their Clan. Sacred Tahv is
        protected by the militarized Servants of the Flame. The Free Duchy of
        Thyr and Scuttleport both have their own legal system outside Isha
        (despite the King's most valiant attempts otherwise). In the Free Duchy,
        the Duke's Guard function similarly to the King's own, while in
        Scuttleport the goons of the Pirate Lords are unpredictable and
        uninterested in maintaining peace. Certain isles (such as the Graven
        Isle, Spyrholm, the Starlit Atoll, or the Orrery) have no one present to
        enforce the law, although crimes committed upon them would theoretically
        be under the King's purview, and would be tried in Ishana if arrested.
        Who Follows The Law Peasants, Merchants, and Artisans would be held to
        the full letter of the law, and if convicted would face heavy fines,
        dismemberment, or death. Soldiers will face much lighter sentences in
        civilian trials. Servants of the Immortal Flame (such as monks or
        priests) are technically held to the same laws, but in practice the
        Temples have historically protected criminals within their ranks and
        ensured they get lighter sentences. Nobles can expect the legal system
        to be much lighter on them than it is on others. If the Noble is of the
        Ascendant Allegiance, they're effectively above the law entirely, while
        if they're of a Frail Allegiance, they're most likely just as vulnerable
        as a peasant. Crimes committed against anyone designated an Outlaw won't
        be prosecuted. Where Wizards fall in this system depend tremendously on
        the authority and respect of the Pact in any particular Age, and the
        willingness of the King and his guards to arrest and try a Wizard.
        Wizards avoid the civilian legal system if at all possible, and will
        often close ranks to protect one of their own from arrest, preferring to
        try them within the Pact. Crimes in Isha While what is or isn't legal
        can vary tremendously based on the stances of the King. The following
        are all actions which are frequently extremely illegal, and are also
        likely for Wizards to (accidentally or intentionally) violate through
        the use of magic: Adultery, polyamory, or annulment of marriage. Arson
        or the destruction of another's property. Cross-dressing, impersonation,
        or forgery. Libel, perjury, or blasphemy. Murder, battery, or
        manslaughter (outside of a Duel). Poaching from the King's waters or the
        King's woods, or the chateau of any Clan. Robbery, theft, and vagrancy.
        Sodomy. Tax evasion, smuggling, avoiding tariffs. Treason, fermenting
        rebellion, spying for a foreign authority. Witchcraft, or other magic
        not permitted by the Pact. Update this list further as the King outlaws
        or permits various actions. Inheritance in Isha Traditional Line of
        Inheritance In theory, inheritance is intensely patriarchal, and follows
        an absolute primogeniture system. The eldest son of the King will become
        the next king, followed by any younger sons. If the King has no sons,
        the title will pass to his younger brother, and if he has no siblings,
        the title will pass to a male relative of his father. In practice, the
        King appoints whoever he trusts to serve as the next king, and upon his
        death this individual strongarms their way onto the throne, keeping
        other forces in check. While this is normally his eldest son, it's not
        unheard of for the King of Isha to appoint another family member to take
        the crown instead, if none of his sons are worthy. Coronation of the New
        King The death of the king is a tragic event, a major moment of upheaval
        within the archipelago. Its occurrence will certainly create
        complications for the other wizards, and it threatens to destabilize the
        kingdom. A smooth transferral of power is necessary to keep the system
        of power operational and the Pact in coherence. The pact will fall
        without the authority of the state it is intertwined with. If the King
        has an Heir, then the transference of power is easy. The previous Heir
        becomes the new King, and the Celestial Audience chooses the wizard this
        person was closest to — that Wizard is in charge of reorganizing the
        court. The Warlock picks a new sun, moon, and rising to represent the
        personality of this new King, and after the funeral, a festival is held
        in his honor. Whenever the King dies, there are many who would claim a
        right to the throne. His eldest son, his dowager wife, his brother; all
        might fashion themselves the rightful heirs to the throne. If there is a
        clear heir, then they will grumble but step aside (although their
        agendas may change in the new court to reflect their desires). If there
        isn't a clear heir, then they will launch active attempts to claim the
        throne, and Civil War will break out across Isha. Each different
        Allegiance within the King's Inner Circle establishes a Front and a Side
        (from the Rules For War on page XX). When A Wizard Becomes King While it
        would certainly be a violation of Pact-Law for any other Wizard to
        become the King of Isha, there is no specific language against the
        Warlock becoming King. In that event, the Warlock must build his court
        and construct his zodiac just as he would any other inheritance, and
        when the zodiac prompts him to listen to his inner circle, he must do so
        and spend time enacting their agendas. While the title of king may offer
        many benedictions, it is also a heavy burden, and such a Warlock would
        soon find himself with many masters, and many new obligations beyond
        what he might be used to, for he is now partially at the whims of the
        stars themselves. When The Warlock Does Not Stand Within The Court
        During civil wars (where they may be multiple Courts), or in the event
        the Warlock is disposed of, there may be moments when the Warlock
        himself is not a member of the court. He may still influence the Court
        (as any Wizard may), but he is considered to have lost control of his
        Domain and must regain it. Every month, ask the Chain-Keeper to create a
        new Complication for that Court, representing your inability to keep it
        steady. You may join that Court through establishing yourself as a new
        Servant there, if the King would allow you to rejoin. In the eyes of the
        Pact, a King who does not trust the Warlock is illegitimate and must be
        replaced, or if such a task is impossible, the Warlock himself has
        failed his Domain. The Noble Clans Unlike in a traditional feudal
        system, Isha lacks enough defensible land to justify the formation of
        social authority around land ownership. Instead, Isha's nobility seize
        power over specific industries, claiming status within the gentry as a
        member of one of its many Clans. Each Clan is composed of multiple
        families woven together into a single political entity through marriage
        and manipulation, arms its own standing military, is led by its elders,
        and possesses multiple estates across the archipelago. There are other
        Clans in Isha, of varying degrees of power and authority. To create a
        new one, simply decide on its name, its estate, the portion of the
        economy it controls, and its animal symbol. The Croft Clan Whenever you
        Spend Time meeting with Clan Croft, you may also change or add to its
        Lore. The Crofts are the most populous clan in Isha, composed of nearly
        twenty families working together to maintain power, and with their
        wealth combined claim at least partial ownership of nearly three-fourths
        of all arable land in Isha. The Crofts fashion themselves as generous
        saviors of the common man, supporting rural Isha when food is scarce.
        Among the farmers of Isha, the Crofts have a reputation somewhere
        between landlords and rakes, as younger Crofts will be sent to harass
        farmers who can't afford to pay their dues. The Crofts are led by a
        council of elders (each titled Thane), who gather in a massive estate
        along the chalk cliffs called the Homestead. Each Thane returns then to
        his familial estate, which dominates over the small town built around
        it. The symbol of the Croft Clan is a powerful ox, with specific
        variations representing each family, and is the centerpiece of many
        parades in the clan's honor. The Uroch Clan Whenever you Spend Time
        meeting with Clan Uroch, you may also change or add to its Lore. The
        Urochi are amongst the most respected clans, composed of a recent union
        between two families. The clan involves itself in every step of mining,
        quarrying, construction, and smithing. The Uroch fashion themselves
        strong sculptors and masons, building the monumental works of Isha and
        carving its legacy. Among the craftsmen of Isha, the Urochi function as
        a trade guild, representing their interests politically but charging
        hefty dues for their iconography and legitimacy. Clan Uroch is led by a
        patriarch, titled Duke-Warden, who rules either from his sturdy castle
        in the Halcyon Isles, or from the offices of the stonemason's guild, in
        the heart of the Blue City. The symbol of the Uroch Clan is a stylized
        crab, which is used as a stamp on pieces of silver or at the foot of old
        buildings to indicate their authenticity and worth. The Lark Clan
        Whenever you Spend Time meeting with Clan Lark, you may also change or
        add to its Lore. The Lark Clan is amongst the oldest clans, founded by
        the mudlark families who would dive beneath the waves to collect
        treasures from the ruined towers on Isha's sea floor. The Larks fashion
        themselves guardians against piracy and eccentric treasure hunters. To
        the fishermen of Isha, they're seen as a necessary evil — they keep the
        pirates at bay and grant access to the secrets of the deep, but their
        tithes are almost as high as the pirates would steal. Clan Lark is led
        by a matriarch, titled Passerine, who rules from a partially-submerged
        estate built in the ruins of an excavated wizard's tower, on a remote
        island on the far side of the Bay of Ishana. The symbol of the Lark Clan
        is a bird's wing, and is a common motif on many ship's sails to prove to
        the Lark's army that they have paid their dues and deserve protection.
        The Caravel Clan Whenever you Spend Time meeting with Clan Caravel, you
        may also change or add to its Lore. The Caravel Clan is the most sacred
        and powerful clan in Isha, for they are the inheritors of the sacred art
        of shipwrighting, and maintain the finest groves in the Halcyon Isles,
        whose only function is to prepare the most perfectly-constructed ships.
        The Caravels fashion themselves noble craftsmen of a near-forgotten
        artistry, of wizards in their own right whose magic is to bring life to
        dead wood and tie the isles together. To many in Isha they are a relic
        of a bygone age, their power more from their political machinations than
        from their work. Clan Caravel is led by a patriarch, titled Grandmaster,
        whose chateau is surrounded by old-growth forest in a far corner of the
        Halcyon Isles, and whose feasting hall is so large that massive galleys
        from centuries past are suspended overhead. The symbol of the Caravel
        Clan is a dragon, and it is illegal for any Ishanian-born captain to
        lead a ship without that authorized sigil carved somewhere on its hull.
        The Oshrani Clan Whenever you Spend Time meeting with Clan Oshrani, you
        may also change or add to its Lore. Clan Oshrani was once a noble
        household in the great city of Ur, before they were deposed and forced
        to flee as the empire grew in power. Settling in Isha they put their
        finances to good use, becoming by far the wealthiest clan in the
        archipelago. The Oshrani fashion themselves decadent patrons of the fine
        arts and financiers of the King's splendor. In truth, the Five Banking
        Halls of the Oshrani use their finances to apply pressure to clans who
        work against them and control the debts of the King. The Oshrani are led
        by a patriarch, titled Dauphin, who holds court of his own within the
        glorious expense of the clan's chateau in the Halcyon Isles, a beautiful
        modern monument to wealth composed mostly of glass and intricately-woven
        and extremely fragile gold. The symbol of the Oshrani is a two-headed
        sphinx, which can be found on the back of every single Ishanian coin,
        tucked beneath the king's own sigil. The Wain Clan Whenever you Spend
        Time meeting with Clan Wain, you may also change or add to its Lore.
        Clan Wain is the most mysterious of the nobility, with countless rumors
        swirling around their foundation, with some claiming they were founded
        by a cult who cheated death itself. The clan itself only encourages the
        rumors, lending an air of mystique to the family. The Wain fashion
        themselves the sin-eaters of Isha, who carry the dead and dying to the
        Graven Isle and who perform surgery on the injured. The truth is an open
        secret: many in their ranks practice ghoul-calling and other illegal
        magics, and make their true fortune on smuggling occult treatises and
        reagents through their Auction House. The Wain Clan are supposedly led
        by a patriarch, titled Most Gracious, although some suspect the true
        seat of power lies in Scuttleport, where their gloomy estate looms over
        the miserable slums. The symbol of the Wain is a mangy dog, which they
        fly upon their black ships to warn other sailors of the dead they ferry
        to the Graven Isle. The Ix Clan Whenever you Spend Time meeting with
        Clan Ix, you may also change or add to its Lore. Clan Ix is the most
        established family in Isha, capable of tracing their lineage back five
        hundred years before the Tragedies, and who are said to have been
        founded by the inventor of the twin writing systems used by Isha to this
        day. Ixians fashion themselves the great history-keepers of Isha, the
        authors of its past and the architects of its future. The common folk
        fear them as lawyers, bureaucrats, and authoritarian busybodies who
        inflate the ranks of the University, but who are valuable when literacy
        is needed. The Ix Clan is led by a patriarch, titled Lord Pursuivant,
        who keeps track of the sprawling and convoluted lineage of Ishanian
        nobility upon an enormous arboreal mural painted on the side of the
        ancient estate. The symbol of the Ix is a gulabi goat, and the sacred
        herds of this animal are bred by the Ix's servants within the Halcyon
        Isles for their exquisite vellum. Foreign Powers Isha is not the only
        country in the Faraway Sea — powerful forces plot and scheme against the
        Halcyon King, separated by vast oceans and great barriers of culture and
        faith. These Foreign Powers can be wildly dangerous or exceptionally
        useful, and sometimes both at once. The Free Duchy of Far Reach Whenever
        you Spend Time learning about the Free Duchy of Far Reach, you may also
        change or add to its Lore. The Far Reach is a series of small islands to
        the northwest of the archipelago, historically administered by the
        Kingdom of Isha. Four generations ago, they declared independence, and
        after a protracted war, won their freedom. The Far Reach maintains its
        independence through shrewd financial negotiations and a willingness to
        trade with anyone, and its ports present an alternative for merchants
        traveling westward without needing to pay Ishanian tithes. They've been
        a longstanding thorn in Isha's side, and their destruction would
        represent a huge increase in trade for the archipelago. The Free Duchy
        is ruled by the Archduke Thyr III, a boisterous nobleman, a powerful
        potential ally, and an eligible bachelor. His wealth comes from the
        purple dye extracted by his people, a rare luxury. The Pirate-Lords of
        Scuttleport Whenever you Spend Time learning about the Pirate-Lords of
        Scuttleport, you may also change or add to its Lore. While the Kingdom
        of Isha claims dominion over the wretched city of Scuttleport, everyone
        knows the truth: the city is run as its own independent city-state,
        controlled by the machinations of criminals and entirely outside Isha's
        law. Scuttleport serves as a hideaway for smugglers and bandits, giving
        them access to Isha's oceans and an easy place to hide and lay low.
        Attempts to crack down on Scuttleport's crime has turned into outright
        war. While there is never any one Pirate-Lord who can hold onto power
        for long, anyone who could find a way to wrangle them together (or even
        bring them back into Isha) would have access to a tremendous fleet, a
        great deal of (mostly stolen) wealth, and a lot of illegal magic. The
        Triarchy of Ur Whenever you Spend Time learning about the Triarchy of
        Ur, you may also change or add to its Lore. The Triarchy of Ur rules
        over much of the known world, an ancient empire based out of the
        sprawling megalopolis of Ur, so enormous it must be divided amongst
        three emperors (who are corrupt, childish, and rotting away, in turn).
        Ur has, at various points, attempted to seize control of Isha and turn
        its magic towards their own ends. The Bone-Priests of Ur are jealous of
        Ishanian magic, and desire nothing more than to reclaim their lost
        glory. While Ur is a dying empire, they are not dead yet — a thousand
        different armies march under their banners, and their emperors can
        procure wealth beyond any's wildest dreams. If one could wrangle the
        full attention of Ur towards a single objective, then nothing could
        stand in its way. Elpenor's Kingdom Whenever you Spend Time learning
        about Elpenor's Kingdom, you may also change or add to its Lore. The
        Hecares Archipelago are a small southern nation, not dissimilar from
        Isha, which was conquered by Ur long ago. The boy-king Elpenor recently
        beat back the Urite armies and declared both his independence and his
        intent at expanding his kingdom northward. While Elpenor's greatest foe
        is Ur, he has no lost love for wizards, for he blames magic for the
        death of his mother. Elpenor's oracles and advisors whisper in his ear
        even now encouraging him to seize Isha's power to aid in his expansion.
        Elpenor's Kingdom is new and ambitious, rapidly expanding across a large
        amount of territory and carving a name for itself in the history books.
        An alliance with Elpenor could give Isha access to this newfound power,
        and ensure its survival against Ur's inevitable wrath. The Hrotingmen
        Whenever you Spend Time learning about the Hrotingmen, you may also
        change or add to its Lore. The Hrotingmen come from a land of ice and
        snow far to the north, where they worship god-corpses and serve cruel
        witches, to raid and pillage Isha, dragging the archipelago's wealth
        back to their homes as bounty. The Hrotingmen are Isha's longest enemy,
        whose Jarls have delighted in its torment and when united enough to
        launch an attack, have nearly torched the kingdom to the ground. An
        alliance with the Hrotingmen is both fickle and irresponsible, for they
        are warriors above all else, and lack any other culture. But their
        violence could be a valuable tool, if one could use it. The Druj-Lands
        Whenever you Spend Time learning about the Hrotingmen, you may also
        change or add to its Lore. The Drujmen are from a faraway land, poisoned
        by old necromancy that seeped into their bones. Now they cannot die, and
        they dwell in spider-fortresses wearing the mockeries of life and
        dreaming of stealing the truth of death. The Drujites blame Wizards for
        their state, and many Necromancers have taken it upon themselves to
        travel West to eradicate these abominations of life, leading to
        miserable and haunting war. The Druj-Lands are the home to many
        forgotten relics from the Tragedies, as well as occult tomes holding
        twisted secrets of old magic. Obtaining these resources could make an
        alliance with the Druj worth tolerating. Other Foreign Powers There are
        countless smaller governments, churches, banks, and other powerful
        entities across the Faraway Sea, each seeking to grow their power and
        influence Isha in their own way. Whenever you encounter or discover
        another Foreign Power, add it to this list, or Spend Time to develop and
        flesh out the Lore of any of these powers. The Eofmark Marches, a dismal
        western kingdom who also worships the Immortal Flame and who is
        beleaguered by the Druj. The Wyvern-Ports of Edalisk, a powerful
        port-city whose wyvern-riders are the terror of pirates across the
        southern sea. The Golden Eye Company, a famous and powerful mercenary
        company who has fought both for and against the Triarchy of Ur. The
        Ashen Bank, the wealthiest financers in the Faraway Sea, and whose
        armies ensure that all debts are inevitably repaid. Church of the
        Three-Eyed God, a cult spreading to the East, whose witch-queens wield
        substantial political authority within Ur. Mulfeldir, a monstrous
        traitor dragon whose devoted servants war against the Hrotingmen for
        sacrifices. The Seven Golden Cities, a series of isolationist and
        fabulously wealthy city-states far to the south, who are said to adorn
        their walls in gold and silver, and feast on every spice known to man.
      </section>
      <section>
        Part VI: Inheriting The Iron Throne Eventually, the Warlock will die. It
        is inevitable — all Wizards die, when given enough time. It's
        practically the only thing they all have in common. The Warlock will
        die, and a new Warlock will take his place. There is a great burden on
        your shoulders. I hope you are prepared to carry it. This Part of The
        Book of Thrones is exclusively reserved for the Warlock's successor. It
        contains instructions on how to create a new Warlock when you're not the
        first Warlock within this iteration of The Seven-Part Pact. The New
        Warlock Complete Humour & Temperament as is traditional. Choose your
        origins, before you became Warlock: You were the old Warlock's Prentice,
        his child, or one of his other Companions. Continue without
        interruption. You were a noble from one of Isha's Clans, chosen by the
        King for political reasons. Change the Lore of your Clan. You may move
        one of the Servants of your Clan for free each month, without having to
        Spend Time. You were one of the King's own children, granted the title
        due to nepotism. You don't have to Spend Time to remain in the King's
        Inner Circle. You were someone else, who another Wizard mentored and
        prepared for this position. Ask that Wizard for a Treasure or other boon
        representing your relationship. Complete History & Secrets, and Might &
        Trappings. For Treasures, you have all the Treasures possessed by the
        old Warlock, and an additional one which he didn't choose. You cannot
        possess any Treasures which have been destroyed. The Keep & His
        Companions Consult the Lore of the Halcyon Isles, the Warlock's Keep,
        and any sketches of the Map. If you aren't one of the old Warlock's
        Companions, ask the Celestial Audience to add new Lore to both
        reflecting how their unfamiliarity and discomfort for you. Choose
        Companions. Keep as many of the old Warlock's Companions as is
        applicable, although they cannot provide the same Care for you which
        they provided the old Warlock. The Court of the King Familiarize
        yourself with the King, his zodiac, and the structure of his Court. You
        cannot change the Laws of the Court. If you are the old Warlock's
        Prentice, or if the Warlock's Prentice remained one of your Companions,
        then the Court is stable. You can adjust the position of up to three
        Servants before starting. If you're not the old Warlock's Prentice, the
        Court remains exactly how it was, push everyone in the Court back in
        Standing as the King grows wary without guidance. Throne-Keeper's
        Secrets Familiarize yourself with the responsibilities of the
        Throne-Keeper and the state of the Lore of the Faith in Parts IV and V.
        Ensure you observe any changes the old Warlock made to the Clans and
        Foreign Powers. Describe for the table your new Warlock, and coronate
        yourself upon your Throne of Iron.
      </section>
      <section>
        Appendix Written by Jay Dragon, with developmental editing from Mazey
        Veselak (@NightlingBug on Twitter). Temporary cover image from Guido
        Bonatti's Liber Astronomiae, via Wikimedia Commons. Compass Rose from
        Wikimedia Commons.
      </section>
    </div>
  );
}
