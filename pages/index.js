import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Klimatske promene i očuvanje životne sredine</title>
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Klimatske promene i očuvanje životne sredine
        </h1>

        <p className={styles.description}>
          Po mišljenju mnogih jedna od najozbiljinijih tema 21. veka. Šta uzrokuje zagađenja na globalnom nivou, kako tome stati na put i kako nam Evropska Unija može pomoći pri rešavanju ovog problema?
        </p>

        <h2 className={styles.sectionTitle}>
          1. Uzroci zagađenja
        </h2>
        <p className={styles.description}>
        Glavni problem je nedovoljno razvijena ljudska svest i nemogućnost ljudi da sagledaju situaciju na duže staze. Ljudima je bitno da njihov život bude ugodan, a da pritom ne misle na buduće generacije, zato se i ne vodi računa o prirodi i ljudi bacaju smeće svuda, uništavaju se šume radi izgradnje industrijskih objekata, puteva itd. U ovu kategoriju takođe spadaju automobili, ali sa pojavom električnih automobila ocekujemo da će zagađenje biti znacajno manje. Previše uzimamo od prirode, ne nudeći ništa za uzvrat, tako kršeći zakon ravnoteže koji je ključan da bi se održao život, ljudi uzimaju daleko više nego što im je potrebno da bi nahranili svoj ego ili ispunili duševnu prazninu. Po nama takvo ponašanje može dovesti u pitanje opstanak ljudske vrste jer su prirodni resursi ograničeni i ako svi budu uzimali više nego sto im je potrebno uništiće prirodu u celini. Smatram da situacija koja se trenutno odigrava u svetu, u vezi sa pandemijom COVID 19 virusom opominje ljude da čuvaju prirodu.
        </p>
        <div id="zagadjena-suma" className={styles.img} onMouseOver={() => {
          const styleElem = document.head.appendChild(document.createElement("style"));
          styleElem.innerHTML = "#zagadjena-suma:after {content: 'Priroda, mesto za odmor ili mesto za otpad?';}";
        }}>
          <img style={{width: '100%'}} src="/images/zagadjena-suma2-min.jpg" alt="zagadjena suma"/>
        </div>
        <p className={styles.description}>
          * Prevuci mišom preko slike za poruku 
        </p>
        <p className={styles.description}>
          Ova fotografija je nastala u neposrednoj blizini našeg mesta stanovanja. Kao što se na njoj moze videti je priroda u kojoj su ljudi bacili otpatke. Šetajući ovuda često se pitamo odakle ljudima tolika potreba da u prirodu (šume, livade, pašnjake, reke...) bacaju otpatke, a ne u za to predviđene kontejnere? Kako se može promeniti ovako ponašanje kod ljudi, da li i kolika je novčana kazna rešenje za to? Osim toga sto je štetno za prirodu, uništava i estetiku i uživanje u šetnji.Da bi se ovo očistilo potrebna je želja i volja ljudi koji žive u neposrednoj okolini, a i angažovanje državnih službi - inspekcija. 
          <br/>
          <br/>
          Pročitao sam podatak da oko 2 miliona morskih ptica godišnje ugine ili se upletu u odbačenu plastiku. Pitam se da li ljudi znaju za taj podatak? Ako znaju zašto to rade, a ako ne znaju kako ih informisati ? Znamo da priroda funkcioniše kao jedinstven ekosistem. Smanjenjem broja jedne životinjske ili biljne vrste ili njenim izumiranjem ugrožene su i druge vrste, a samim tim i čovek.
        </p>
        <img style={{width: '60%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7WfVxwAj_YVEqDAl3EBXV1p1bMfUCgQpWg&usqp=CAU" alt="ugrozena ptica"/>
        <p className={styles.description}>
          Klimatske promene koje su uočljive na celoj planeti su direktna posledica ljudskog nemara. U našoj zemlji poslednjih godina često se beleže vrlo visoke temperature, koje neretko nisu zabeležene u periodu od kada se meri temperatura. Česti su jaki vetrovi, oluje, velike padavine, grmljavine, koje nisu zabeležene na našem podnevlju. To dovodi do pojave čestih poplava, šumskih požara i drugo, čime se direktno ugrožava zdravlje stanovništva.
        </p>

        <h2 className={styles.sectionTitle}>
          2. Kako stati na put globalnom zagađenju ?
        </h2>
        <p className={styles.description}>
          Možemo organizovati akcije sakupljanja smeća, možemo stavljati filtere na auspuhe automobila, ali da li će to stvarno rešiti problem zagađenja? Da li je stvarno vredno očistiti plažu ili reku od otpada, ako će opet neko doći i napraviti nered. Broj ljudi koji dobrovoljno pomaže pri otklanjanju problema je daleko manji od ljudi koji zagađuju. Veliki je broj ljudi koji bi da zaustave zagađenje, ali osim reči protiv zagađivača nisu ništa preduzeli, a svetu su potrebna konkretna rešenja i akcije.
          Po našem mišljenju jedini pravi način da zaustavimo zagađenje je da se razvije ljudska svest i da ljudi sami budu spremni da preduzmu nešto da spreče zagađenje. Ako uspemo da razvijemo pozitivne stavove o očuvanju sredine, ti stavovi će se prenositi kroz generacije što je mnogo efikasnije od trenutnog rešenja dobrovoljnih akcija, sakupljanja smeća, filtera…
          <br/>
          Ranije, plastična ambalaža nije toliko korišćena kao danas. Sokovi i druga pića su se pakovala u staklene flaše koje su se menjale i ponovo koristile. Takođe i hrana. Možda se na ovaj nacin može rešiti deo problema?!
        </p>
        <div id="zagadjena-planeta" className={styles.img} onMouseOver={() => {
          const styleElem = document.head.appendChild(document.createElement("style"));
          styleElem.innerHTML = "#zagadjena-planeta:after {content: 'Da li ćemo živeti na levoj ili na desnoj strani zavisi od našeg ophođenja prema prirodi!';}";
        }}>
          <img style={{width: '100%'}} src="https://www.kurir.rs/data/images/2018/03/23/18/1440221_kli_ls.jpg" alt="zagadjena suma"/>
        </div>
        <p className={styles.description}>
          * Prevuci mišom preko slike za poruku 
        </p>
        <p className={styles.description}>
          * slika preuzeta sa kurir.rs
        </p>

        <h2 className={styles.sectionTitle}>
          3. Kako nam EU može pomoći pri rešavanju ovog problema ?
        </h2>
        <p className={styles.description}>
        Za razliku od Srbije, članice EU imaju stroge zakone o očuvanju sredine. Ako pogledamo ulice Nemačke, Italije, Austrije i drugih članica, primetićemo da su ulice daleko čistije nego ulice u Srbiji. Kada bi uveli strožije zakone u Srbiji, ljudi bi bili daleko obzirniji, takođe trebalo bi posvetiti pažnju na školske programe i u njih ubaciti više materijala koji će pomoci đacima da u ranoj mladosti shvate štetnost koju izazivaju zagađenjem životne sredine. Trebalo bi da iskoristimo mogućnost recikliranja i da pokušamo da razvijemo tu industriju u Srbiji, po ugledu na članice EU, gde je recikliranje uveliko rasprostranjeno. Verovatno najvecu mogućnost imamo u IT industriji gde uz pomoć savremenih tehnologija možemo da rešimo veliki broj problema, iz tog razloga država bi trebala da ulaže u ovu industriju, po ugledu na Evropske države koje su prepoznale ovo polje kao potencionalno rešenje problema.
        </p>
        <div className={styles.imagesHolder}>
          <div className={styles.imageHolder}>
            <div id="park" className={styles.smallImg} onMouseOver={() => {
              const styleElem = document.head.appendChild(document.createElement("style"));
              styleElem.innerHTML = "#park:after {content: 'Na šta se ponosimo';}";
            }}>
              <img style={{width: '100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD95EFT9ip3yTA8jK-OW29ne1T7u9nXdlFw&usqp=CAU" alt="Cacak, park"/>
            </div>
            <p className={styles.description}>
              - Čačak, park
            </p>
          </div>
          <div className={styles.imageHolder}>
            <div id="centar-grada" className={styles.smallImg} onMouseOver={() => {
                const styleElem = document.head.appendChild(document.createElement("style"));
                styleElem.innerHTML = "#centar-grada:after {content: 'čega treba da se stidimo';}";
              }}>
                <img style={{width: '100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiodBkHgo_boG-7axMfOxfSAuEPDYZ8Jp2MA&usqp=CAU" alt="Cacak, centar grada"/>
            </div>
            <p className={styles.description}>
              - Čačak, centar grada
            </p>
          </div>
        </div>
        <p className={styles.description}>
          * Prevuci mišom preko slika za poruku 
        </p>

        <p className={styles.description}>
              <b><i>Lekar leči, priroda ozdravljuje</i></b>
              <br/>
              &nbsp; - latinska izreka - 
        </p>
      </main>

      <footer className={styles.footer}>
        &copy;Andrija Gajić, Dragan Vuković {new Date().getFullYear()}
      </footer>
    </div>
  )
}