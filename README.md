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

## Tapahtumapohjainen ohjelmointi
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
  - Suorita tämä myöhemmin

  Tapahtumapohjainen ohjelmointi
  - Suorita tämä, kun jotain tapahtuu

## Screenshots
<img width="1004" height="451" alt="kuva" src="https://github.com/user-attachments/assets/5dca7df4-5613-476a-8b00-354d01dcf500" />
Kuvassa ohjelma odottaa käyttäjän toimintaa. Ajan edessä Stopped-teksti.

<br><br>

<img width="1004" height="445" alt="kuva" src="https://github.com/user-attachments/assets/9713059e-fafa-4adf-a672-dcfeba708219" />
Kuvassa käyttäjä käynnisti ajanoton Start-painikkeesta ja aika juoksee. Ajan edessä Timing-teksti.



<img width="1004" height="451" alt="kuva" src="https://github.com/user-attachments/assets/a5dd863d-67d9-431d-8591-e8c56190d6b1" />
Kuvassa käyttäjä painoi Stop-painiketta pysäyttääkseen ajanoton. Ajan edessä Stopped-teksti.



<img width="1004" height="454" alt="kuva" src="https://github.com/user-attachments/assets/1bc9b892-5196-454d-a110-73420e8c1a28" />
Kuvassa käyttäjä painoi Clear-painiketta nollatakseen ajan. Käyttäjä voi halutessaan pysäyttää ja nollata ajan painamalla Clear-painiketta ajan oton ollessa käynnissä.
