import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Klimatske promene i ocuvanje zivotne sredine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Klimatske promene i ocuvanje zivotne sredine
        </h1>

        <p className={styles.description}>
          Po misljenju mnogih jedna od najozbiljinijih tema 21. veka. Sta uzrokuje zagadjenja na globalnom nivou, kako tome stati na put i kako nam Evropska Unija moze pomoci pri resavanju ovog problema?
        </p>

        <h2 className={styles.sectionTitle}>
          1. Uzroci zagadjenja
        </h2>
        <p className={styles.description}>
        Glavni problem je nedovoljno razvijena ljudska svest i nemogucnost ljudi da sagledaju situaciju na duze staze; Ljudima je bitno da njihov zivot bude ugodan, a da pritom ne misle na buduce generacije, zato se i ne vodi racuna o prirodi i ljudi bacaju smece gde stignu, unistavaju se sume radi izgradnje industijskih objekata, puteva itd. U ovu kategoriju takodje spadaju automobili, ali sa pojavom elektricnih automobila ocekujemo da ce zagadjenje biti znacajno manje. Previse uzimamo od prirode, ne nudeci nista za uzvrat, tako krseci zakon ravnoteze koji je kljucan da bi se odrzao zivot, ljudi uzimaju daleko vise nego sto im je potrebno da bi nahranili svoj ego ili ispunili dusevnu prazninu. To nas moze kostati iz razloga sto su prirodni resursi ograniceni i ako svi budu uzimali vise nego sto im je potrebno unistice prirodu u celini. Smatram da situacija koja se trenutno odigrava u svetu, u vezi sa COVID 19, ima veze sa tim da se smiri ljudska rasa. U toku pandemije smo videli da se moze ziveti i bez ogromnih guzvi u saobracaju, proslava i putovanja, samim tim nasa planeta je “predahnula”, vazduh je postao cistiji i ljudi nisu mogli da unistavaju prirodu u meri u kojoj to obicno rade. Takodje smatram da su sve ostale bolesti i ostale “nepogode” samo upozerenje prirode da bi se ljudi urazumili.
        </p>
        <div className={styles.img}>
          <img style={{width: '100%'}} src="https://www.kurir.rs/data/images/2018/03/23/18/1440221_kli_ls.jpg" alt="slika planete"/>
        </div>
        <p className={styles.description}>
          * slika preuzeta sa kurir.rs
        </p>

        <h2 className={styles.sectionTitle}>
          2. Kako stati na put globalnom zagadjenju ?
        </h2>
        <p className={styles.description}>
          Mozemo organizovati akcije sakupljanja smeca, mozemo stavljati filtere na auspuhe automobila, ali da li ce to stvarno resiti problem zagadjenja? Da li je stvarno vredno ocistiti plazu ili reku od otpada ako ce opet neko doci i napraviti nered, broj ljudi koji dobrovoljno pomaze pri otklanjanju problema je daleko manji od ljudi koji zagadjuju. Veliki je broj ljudi koji bi da zaustave zagadjenje, ali osim reci protiv zagadjivaca nisu nista preuzeli, a svetu su potrebna konkretna resenja i akcije.

          Po mom misljenju jedini pravi nacin da zaustavimo zagadjenje je da se razvije ljudska svest i da ljudi sami budu spremni da preduzmu nesto povodom zagadjenja, ako uspemo da razvijemo pozitivne stavove o ocuvanju sredine, ti stavovi ce se prenositi kroz generacije sto je mnogo efikasnije od trenutnog resenja dobrovoljnih akcija sakupljanja smeca, filtera…
        </p>
        <div id="zagadjena-suma" className={styles.img} onMouseOver={() => {
          const styleElem = document.head.appendChild(document.createElement("style"));
          styleElem.innerHTML = "#zagadjena-suma:after {content: 'Kazu da se ljudi razlikuju od zivotinja jer su razumni i umeju racionalno da razmsiljaju, ova slika pokazuje suprotno';}";
        }}>
          <img style={{width: '100%'}} src="/images/zagadjena-suma2-min.jpg" alt="zagadjena suma"/>
        </div>
        <p className={styles.description}>
          * Slika uslikana u blizini Cacanskog groblja.
          Ovde je priroda zagadjena, a nema mogucnosti da covek ocisti ovaj prostor zbog grana koje onemogucavaju da se pridje, da ljudi imaju razvijenu svest do ovog problema ne bi doslo, a sad su potrebna velika angazovanja da se smece ukloni.
        </p>

        <h2 className={styles.sectionTitle}>
          3. Kako nam EU moze pomoci pri resevanju ovog problema ?
        </h2>
        <p className={styles.description}>
        Za razliku od Srbije, zemlje EU imaju stroge zakone o ocuvanju sredine. Ako pogledamo ulice Nemacke, Italije, Austrije i drugih clanica, primeticemo da su ulice daleko cistije nego ulice u Srbiji, kada bi uveli stroze zakone u Srbiji, ljudi bi bili daleko oprezniji, takodje trebalo bi posvetiti paznju na skolske programa i u njih ubaciti vise materijala koji ce pomoci djacima da u ranoj mladosti shvate stetnost koju izazivaju zagadjenjem zivotne sredine. Trebali bi da iskoristimo mogucnost recikliranja i da pokusamo da razvijemo tu industriju u Srbiji, po ugledu na clanice EU, gde je recikliranje uveliko rasprostranjeno. Verovatno najvecu mogucnost imamo u IT industriji gde uz pomoc savremenih tehnologija mozemo da resimo veliki broj problema, iz tog razloga drzava bi trebala da ulaze u ovu industriju, po ugledu na Evropske drzave koje su prepoznale ovo polje kao potencionalno resenje problema.
        </p>
        <div className={styles.imagesHolder}>
          <div className={styles.imageHolder}>
            <div id="freiburg" className={styles.smallImg} onMouseOver={() => {
              const styleElem = document.head.appendChild(document.createElement("style"));
              styleElem.innerHTML = "#freiburg:after {content: 'Gde treba da budemo';}";
            }}>
              <img style={{width: '100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZg6oiOYSNpl0CoCKFehzgxZhqJr0yV-Y4WA&usqp=CAU" alt="Freiburg, Nemacka"/>
            </div>
            <p className={styles.description}>
              - Freiburg, Nemacka
            </p>
          </div>
          <div className={styles.imageHolder}>
            <div id="cacak" className={styles.smallImg} onMouseOver={() => {
                const styleElem = document.head.appendChild(document.createElement("style"));
                styleElem.innerHTML = "#cacak:after {content: 'Gde smo trenutno';}";
              }}>
                <img style={{width: '100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiodBkHgo_boG-7axMfOxfSAuEPDYZ8Jp2MA&usqp=CAU" alt="Cacak, Srbija"/>
            </div>
            <p className={styles.description}>
              - Cacak, Srbija
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        &copy;Andrija Gajic {new Date().getFullYear()}
      </footer>
    </div>
  )
}
