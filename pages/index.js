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
        Glavni problem je nedovoljno razvijena ljudska svest i nemogucnost ljudi da sagledaju situaciju na duze staze; Ljudima je bitno da njihov zivot bude ugodan, a da pritom ne misle na buduce generacije, zato se i ne vodi racuna o prirodi i ljudi bacaju smece gde stignu, unistavaju se sume radi izgradnje industijskih objekata, puteva itd. U ovu kategoriju takodje spadaju automobili, ali sa pojavom elektricnih automobila ocekujemo da ce zagadjenje biti znacajno manje. Previse uzimamo od prirode, ne nudeci nista za uzvrat, tako krseci zakon ravnoteze koji je kljucan da bi se odrzao zivot, ljudi uzimaju daleko vise nego sto im je potrebno da bi nahranili svoj ego ili ispunili dusevnu prazninu. Po meni takvo ponasanje moze dovesti u pitanje opstanak ljudske vrste jer su prirodni resursi ograniceni i ako svi budu uzimali vise nego sto im je potrebno unistice prirodu u celini. Smatram da situacija koja se trenutno odigrava u svetu, u vezi sa pandemijom COVID 19 virusom opominje ljude da cuvaju prirodu. prirode da bi se ljudi urazumili.
        </p>
        <div id="zagadjena-suma" className={styles.img} onMouseOver={() => {
          const styleElem = document.head.appendChild(document.createElement("style"));
          styleElem.innerHTML = "#zagadjena-suma:after {content: 'Priroda, mesto za odmor ili mesto za otpad?';}";
        }}>
          <img style={{width: '100%'}} src="/images/zagadjena-suma2-min.jpg" alt="zagadjena suma"/>
        </div>
        <p className={styles.description}>
          * Prevuci misom preko slike za poruku 
        </p>
        <p className={styles.description}>
          Ova fotografija je nastala u neposrednoj blizini mog mesta stanovanja. Kao sto se na njoj moze videti je priroda u kojoj su ljudi bacili otpatke. Setajuci ovuda cesto se pitam odakle ljudima tolika potreba da u prirodu (sume, livade, pasnjake, reke...) bacaju otpatke, a ne u za to predvidjene kontejnere? Kako se moze promeniti ovako ponasanje kod ljudi, da li i kolika je novcana kazna resenje za to? Osim toga sto je stetno za prirodu unistava i estetiku i uzivanje u setnji.Da bi se ovo ocistilo potrebna je zelja i volja ljudi koji zive u neposrednoj okolini, a i angazovanje drzavnih sluzbi - inspekcija. 
          <br/>
          <br/>
          Procitao sam podatak da oko 2 miliona morskih ptica godisnje ugine ili se upletu u odbacenu plastiku. Pitam se da li ljudi znaju za taj podatak? Ako znaju zasto to rade, a ako ne znaju kako ih informisati ? Znamo da priroda funkcionise kao jedinstven ekosistem. Smanjenjem broja jedne zivotinjske ili biljne vrste ili njenim izumiranjem ugrozene su i druge vrste, a samim tim i covek.
        </p>
        <img style={{width: '60%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7WfVxwAj_YVEqDAl3EBXV1p1bMfUCgQpWg&usqp=CAU" alt="ugrozena ptica"/>
        <p className={styles.description}>
          Klimatske promene, globalno zagrevanje koje su uocljive na celoj planeti je direktna posledica ljudskog nemara. U nasoj zemlji poslednjih godina cesto se beleze vrlo visoke temperature, koje neretko nisu zabelezene u periodu od kada se meri temperatura. Cesti su jaki vetrovi, oluje velike padavine, grmljavine koje nisu zabelezene na nasem podnevlju. To dovodi do pojave cestih poplava, sumskih pozara i drugo cime se direktno ugrozava zdravlje stanovnistva.
        </p>

        <h2 className={styles.sectionTitle}>
          2. Kako stati na put globalnom zagadjenju ?
        </h2>
        <p className={styles.description}>
          Mozemo organizovati akcije sakupljanja smeca, mozemo stavljati filtere na auspuhe automobila, ali da li ce to stvarno resiti problem zagadjenja? Da li je stvarno vredno ocistiti plazu ili reku od otpada ako ce opet neko doci i napraviti nered, broj ljudi koji dobrovoljno pomaze pri otklanjanju problema je daleko manji od ljudi koji zagadjuju. Veliki je broj ljudi koji bi da zaustave zagadjenje, ali osim reci protiv zagadjivaca nisu nista preuzeli, a svetu su potrebna konkretna resenja i akcije.
          Po mom misljenju jedini pravi nacin da zaustavimo zagadjenje je da se razvije ljudska svest i da ljudi sami budu spremni da preduzmu nesto povodom zagadjenja, ako uspemo da razvijemo pozitivne stavove o ocuvanju sredine, ti stavovi ce se prenositi kroz generacije sto je mnogo efikasnije od trenutnog resenja dobrovoljnih akcija sakupljanja smeca, filtera…
          <br/>
          Ranije, plasticna ambalaze nije toliko koriscena kao danas. Sokovi i druga pica su se pakovala u staklene flase koje su se menjale i ponovo koristile. Takodje i hrana. Mozda se na ovaj nacin moze resiti deo problema?!
        </p>
        <div id="zagadjena-planeta" className={styles.img} onMouseOver={() => {
          const styleElem = document.head.appendChild(document.createElement("style"));
          styleElem.innerHTML = "#zagadjena-planeta:after {content: 'Da li cemo ziveti na levoj ili na desnoj strani zavisi od naseg ophodjenja prema prirodi!';}";
        }}>
          <img style={{width: '100%'}} src="https://www.kurir.rs/data/images/2018/03/23/18/1440221_kli_ls.jpg" alt="zagadjena suma"/>
        </div>
        <p className={styles.description}>
          * Prevuci misom preko slike za poruku 
        </p>
        <p className={styles.description}>
          * slika preuzeta sa kurir.rs
        </p>

        <h2 className={styles.sectionTitle}>
          3. Kako nam EU moze pomoci pri resevanju ovog problema ?
        </h2>
        <p className={styles.description}>
        Za razliku od Srbije, zemlje EU imaju strozije zakone o ocuvanju sredine. Ako pogledamo ulice Nemacke, Italije, Austrije i drugih clanica, primeticemo da su ulice daleko cistije nego ulice u Srbiji, kada bi uveli strozije zakone u Srbiji, ljudi bi bili daleko oprezniji, takodje trebalo bi posvetiti paznju na skolske programe i u njih ubaciti vise materijala koji ce pomoci djacima da u ranoj mladosti shvate stetnost koju izazivaju zagadjenjem zivotne sredine. Trebalo bi da iskoristimo mogucnost recikliranja i da pokusamo da razvijemo tu industriju u Srbiji, po ugledu na clanice EU, gde je recikliranje uveliko rasprostranjeno. Verovatno najvecu mogucnost imamo u IT industriji gde uz pomoc savremenih tehnologija mozemo da resimo veliki broj problema, iz tog razloga drzava bi trebala da ulaze u ovu industriju, po ugledu na Evropske drzave koje su prepoznale ovo polje kao potencionalno resenje problema.
        </p>
        <div className={styles.imagesHolder}>
          <div className={styles.imageHolder}>
            <div id="park" className={styles.smallImg} onMouseOver={() => {
              const styleElem = document.head.appendChild(document.createElement("style"));
              styleElem.innerHTML = "#park:after {content: 'Na sta se ponosimo';}";
            }}>
              <img style={{width: '100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD95EFT9ip3yTA8jK-OW29ne1T7u9nXdlFw&usqp=CAU" alt="Cacak, park"/>
            </div>
            <p className={styles.description}>
              - Cacak, park
            </p>
          </div>
          <div className={styles.imageHolder}>
            <div id="centar-grada" className={styles.smallImg} onMouseOver={() => {
                const styleElem = document.head.appendChild(document.createElement("style"));
                styleElem.innerHTML = "#centar-grada:after {content: 'Cega treba da se stidimo';}";
              }}>
                <img style={{width: '100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiodBkHgo_boG-7axMfOxfSAuEPDYZ8Jp2MA&usqp=CAU" alt="Cacak, centar grada"/>
            </div>
            <p className={styles.description}>
              - Cacak, centar grada
            </p>
          </div>
        </div>
        <p className={styles.description}>
          * Prevuci misom preko slika za poruku 
        </p>

        <p className={styles.description}>
              <b><i>Lekar leci, priroda ozdravljuje</i></b>
              <br/>
              &nbsp; - latinska izreka - 
        </p>
      </main>

      <footer className={styles.footer}>
        &copy;Andrija Gajic, Dragan Vukovic {new Date().getFullYear()}
      </footer>
    </div>
  )
}
