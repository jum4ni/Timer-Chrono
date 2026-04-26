# Callbacks tehtävä

## Tein callbacks tehtävään UI:n, jossa näkyy:
-	Sen hetkinen kellonaika oikeassa yläkulmassa
-	Ajanoton voi käynnistää sinisestä Start-painikkeesta. Painikkeen teksti vaihtuu painamisen jälkeen Stop tekstiksi. Ajan edessä Sopped-teksti vaihtuu Timing-tekstiksi.
-	Ajanoton voi pysäyttää sinisestä Stop-painikkeesta. Painikkeen teksti vaihtuu painamisen jälkeen Start tekstiksi. Ajan edessä Timing-teksti vaihtuu Stopped-tekstiksi.
-	UI näyttää mitatun ajan ”juoksevasti”, kun mittaus on käynnissä.
-	Kellon ajan voi nollata harmaasta painikkeesta Clear, kun ensin painaa Stop painiketta tai kellon ajan oton käydessä.
-	Koodi on kommentoitu

## Takaisinkutsun periaatteet
Takaisinkutsu (callback)
-	 funktio annetaan toiselle funktiolle suoritettavaksi myöhemmin
-	käyttäjä ei kutsu sitä
-	Timer Chronossa tick on takaisinkutsu, selain kutsuu sitä automaattisesti 1 sekunnin välein.

##Tapahtumapohjainen ohjelmointi
-	Ohjelma reagoi tapahtumiin
-	Käyttäjän painaessa esim. nappia tapahtuma syntyy. Timer Chronossa käyttäjä painaa painikkeita Start, Stop ja Clear.
-	Selain kutsuu funktiota
-	Ohjelma odottaa tapahtumia ja reagoi niihin

## Yhtäläisyydet
-	Funktio ei käynnisty heti
-	Odottavat toimintaa
-	Joku muu käynnistää sen myöhemmin
-	Molemmat ovat asynkronista toimintaa

## Eroavaisuudet
  Takaisinkutsu
    o	Suorita tämä myöhemmin

  Tapahtumapohjainen ohjelmointi
    o	Suorita tämä, kun jotain tapahtuu
