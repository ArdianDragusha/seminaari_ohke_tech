<h1>Raportti seminaariaiheesta: Next.js<h1>

<h2>Johdanto:<h2>

Tavoitteeni oli toteuttaa Next.js-sovellus, jossa käytetään App Routeria, SSG:tä (Staattisen sivun generointi) ja api reittien käyttöä, tuli ongelman myötä opittua ja käytettyä myös async params -objektia.
Halusin tehdä Next.js sovelluksen, koska ohjelmistoprojekti 2 kurssilla käytämme Next.js-sovellusta, mutta en itse päässyt tekemään yhtään Next.js:än create asioita. Next.js oli minulle tosi kiva ympäristö tehdä koodausta toisessa projektissa, joten halusin käyttää tätä mahdollisuutta syventyä enemmän Next.js:ään. 

Projektin teema on Jalkapallo sivu, jossa voidaan katsoa erilaisen jalkapallo pelaajien tietoja. Tiedot ovat kuitenkin kovakoodattuja, eikä fetchata mistään.

<h2>Tavoitteet:<h2>

Seminaarin tavoitteet ovat:
- Syventää aikaisemmat taidot Next.js frameworkissä ja ymmärtää erilaiset toimminnot.
- Käyttää dynaamisia reittejä, eli esimerkiksi /players/[id], eli sivu näyttää erilaiselta kun id kohdalle tulee eri numero.
- Toteuttaa yksinkertainen API-reitti Next.js:n serveritoiminnoilla 
- Käsitellä dataa omasta "kirjastosta" eli tässä tapauksessa kovakoodattua dataa.
- Halusin rakentaa selkeän ja navigoitavan käyttöliittymän
- Tuli opittua myös sync params käsittelyä kun Turbopacking kanssa tuli haasteita. (Uusi asia Next.js 16 -versiossa)

<h2>Käytetyt teknologiat:<h2>

- Next.js
    - Dynaamiset reitit
    - SSG (Staattinen sivun generointi)
    - API-reitit
- Node.js
- Turbopack

<h2>Toteutus:<h2>

   <h3>Rakenne:<h3> 

   Next.js on mielestäni hyvä rakenteen takia, koska se on paljon selkeämpi kuin muut frameworkit. Ideana on että nimetään kansio sillä nimellä mikä halutaan että endpoint on eli kansion nimi "players" on  /players. Tämän jälkeen aina laitetaan page.tsx alle, joka on se tiedosto joka tulee näkyviin endpointin alla. Tämä mahdollistaa esimerkiksi, että endpointin alle tehdään components tiedosto, jonne säilytetään komponentit, jotka ovat käytössä vain esim. /players endpointissa.

   src/app juuressa on myös page.tsx joka on etusivu. Sitten minulla on api/route.ts, jossa on pelaajien JSON-api. Sitten minulla on lib/players.ts, jossa on kovakoodattu database.

   <h3>SSG (staattisen sivun generointi):<h3>

   Molemmat pelaajalista ja pelaajan sivu luodaan staattisesti, joka tapahtuu kun käytetään revalidate ja generateStaticParams.

   <h3>Params-käyttäminen:<h3>

   Minun piti käyttää params-objektia, koska jonkun takia en saanut pelaajien tiedot näkyviin, eli en saanut haettua dataa. Luin next.js dokumentaation läpi ja sain selville, että uudessa Next.js 16 versiossa tarvittiin params-objektia.

   <h3>Api-reitti:<h3>

   On api reitti (api/routes.ts), jossa palautetaan pelaajien tiedot JSON-muodossa.

   <h3>Jalkapallo pelaajien data:<h3>

Data on kovakoodattu lib/players.ts alla, joka mahdollistaa datan vaihdon ja lisäkysen jos on tarve.

<h2>Haasteet ja ratkaisut:<h2>

Haasteita oli, mutta vain muutama. Alkuun oli ongelma importin kanssa, kun yritin importtaa import { getPlayers } from "@/app/lib/players";
VsCode näytti erroria, koska olin unohtanut laittaa /app väliin, mutta kun kopioin path, jolloin huomasin että app unohtui.

Oli haastetta saada näkyviin pelaajien tiedot, käytin developer toolsia, jonka AI kertoi, että kannattaa käydä lukemassa Next.js dokumenttia (https://nextjs.org/docs/messages/sync-dynamic-apis), jolloin sain selville, että uudessa Next.js versiossa tarvitaan params. Tuli tämmöinen viesti näyviin: "params is a Promise and must be unwrapped"


<h2>Lähteet<h2>

<h3>Alla ovat tärkeimmät käytetyt lähteet:<h3>

Next.js-dokumentaatio: https://nextjs.org/docs/messages/sync-dynamic-apis

Next.js App Router: https://nextjs.org/docs/app

Dynaamiset reitit: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

API Routes (App Router): https://nextjs.org/docs/app/building-your-application/routing/router-handlers

Tekoäly

VIDEO PROJEKTISTA: https://video.haaga-helia.fi/media/next.js_seminaari+video/0_cvl93aot