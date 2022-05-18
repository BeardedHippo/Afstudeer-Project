# Angular Preventiespel tegen Grooming en Sexting

**Voor een filmpje van het product klik [hier](https://cloud.beardedhippo.nl/afstudeer-project/presentatie.mp4).**

Voor Klare Koek heb ik in twee maanden een proof of concept ontwikkeld die bijdrage levert om jongeren van 9 t/m 14 jaar meer bewust te maken van sexting en grooming. Dit heb ik ontwikkeld op de hoogste kwaliteit mogelijk binnen de beperkte tijd. Met dit project ben ik afgestudeerd.

## Structuur

`/models` bestaat uit alle data types. 

`/components` bestaat uit kleine elementen die in pagina's gebruikt worden. 

`/data` bestaat uit alle opdrachten van het spel. Bij toepassing komt dit in een database.

`/pages` bestaat uit alle pagina's binnen het spel.

`/task` is een folder die hele spel-sectie omvat.

`../../services` houdt een global state van de groepjes en progressie bij.

## De routing van het spel in Task.ts
Omdat ik binnen een korte tijd dit product moest bouwen heb ik ervoor gekozen om de routing op een manier te doen waar ik al mee bekend was. Namelijk hoe het in Vue/React wordt gedaan door te prop-chainen met event emitters. Ik ben ervan bewust dat dit beter met observables kon, dit wilde ik dan toepassen als ik tijd over had.

## Styling met TailwindCSS
Omdat ik meer tijd in ontwikkeling wilde steken kreeg ik van een docent het advies om TailwindCSS te proberen. Het zag er naar mijn idee ook erg goed uit. Tijdens ontwikkeling merkte ik echter dat het helemaal niet lekker werkte, maar ik er eigenlijk al te diep in zat dus kon ik het project hier beter mee afmaken. Hierom is de CSS opmaak niet zoals ik voor ogen had. Ik heb hiervan duidelijk geleerd dat ik op een andere wijze naar CSS libraries moet kijken en begrijp ik waarom ik fan ben van Bootstrap, Bulma en Foundation.