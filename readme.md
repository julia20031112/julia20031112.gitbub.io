# Títol: ProSolarTGN
        "ProSolar":referència al projecte d'energia solar fotovoltaica
        "TGN":representa la provincia de Tarragona
# Descripció:
Aquest projecte web està dedicat a l'estudi del potencial de l'energia solar fotovoltaica a la demarcació de Tarragona. L'equip d'investigació, format per experts en geografia i energia solar, treballa per dur a terme una investigació innovadora i rellevant.
# Objectiu de la Web
L'objectiu principal d'aquest lloc web és proporcionar informació detallada sobre els nostres projectes de recerca, resultats i impacte en la transició cap a un futur energètic sostenible. També volem conscienciar la comunitat sobre la importància de l'energia solar fotovoltaica com una solució viable i ecològica als reptes energètics actuals.
# Motivació
La motivació darrere d'aquest projecte prové de  la necessitat urgent de trobar solucions sostenibles per als reptes energètics globals. L'energia solar fotovoltaica ofereix un gran potencial per reduir la dependència de combustibles fòssils, minimitzar l'impacte ambiental i promoure l'ús d'energies renovables.
# Vinculació amb Geografia
La nostra recerca està estretament vinculada amb la geografia, ja que estudiem els factors geogràfics que influeixen en l'eficiència i el potencial de l'energia solar fotovoltaica. Aquests factors inclouen la radiació solar, les condicions climàtiques, la topografia del terreny i la ubicació de les instal·lacions solars. La geografia ens ajuda a comprendre com aquests elements interactuen i afecten la producció d'energia solar, permetent-nos optimitzar les nostres solucions i aconseguir un impacte més gran.
# Recursos i Referències
El treball s'ha extret de:
- [Grup de Recerca en Anàlisi Territorial i Estudis Turístics (GRATET) - Projectes anteriors](https://www.gratet.urv.cat/ca/projectes/projectes-anteriors/)
- [Grup de Recerca en Anàlisi Territorial i Estudis Turístics (GRATET)](https://www.gratet.urv.cat/ca/)
- [Departament de Geografia de la Universitat Rovira i Virgili - Recerca](https://www.geografia.urv.cat/ca/recerca/)
- La cartografia del mapa de [Observatori de l'autoconsum a Catalunya](https://icaen.gencat.cat/ca/energia/autoconsum/Observatori-de-lautoconsum-a-catalunya/mapes/)
# Eines Utilitzades
- [Boxicons](https://boxicons.com/)
- [Clippy](https://bennettfeely.com/clippy/)
- Navegadors: Firefox i Chrome
- [Git](https://git-scm.com/)
- [QGIS 3.4+](https://qgis.org/en/site/)
- [GitHub](https://github.com/)
- JavaScript
# Estructura de la Web
He dividit la web en quatre grans seccions:
   1. **Inici**: Aquesta secció inclou els objectius i la metodologia del treball. Aquí trobem una visió general del  projecte i la investigació.
   2. **Qui som**: En aquesta secció, trobem el coordinador i el seu equip de treball. Proporcionem informació sobre els membres del  grup d'investigació i les seves àrees d'expertesa.
   3. **Què fem**: Aquí veurem els projectes en curs, els projectes realitzats i els futurs projectes relacionats amb l'energia solar fotovoltaica. Aquesta secció mostra la  feina actual i els  plans per al futur.
   4. **Mapa**: En aquesta secció trobem un mapa interactiu sobre la Potència Total Instal·lada d'Autoconsum Fotovoltaic per Municipis. Aquest mapa proporciona una representació visual dels  resultats de recerca.
       # Elements Comuns
          - **Capçalera (Header)**: En totes les seccions, trobem la mateixa capçalera que inclou un eslògan, el logotip web, el menú amb les diferents pestanyes i un petit text amb un enllaç al treball original.
          - **Peu de pàgina (Footer)**: En totes les seccions, també trobem el peu de pàgina on hi ha un enllaç que ens envia a la pàgina de contacta'ns, on es pot omplir un petit formulari d'informació per poder-nos posar en contacte amb tu.
# Tècnica de Disseny Responsive
 - **Media Queries**: permeten aplicar diferents estils CSS en funció de les característiques del dispositiu, com l'amplada de la pantalla.
   Exemple:
     @media only screen and (max-width: 768px) {
         .header-content {
          flex-direction: column;
          text-align: center; }}
# Cartografia
  1. **Elaboració del Mapa de Coropletes amb QGIS**
    Eina Utilitzada: QGIS 3.4+.  He creat un mapa de coropletes utilitzant el programari QGIS, que permet visualitzar les dades de manera clara i informativa. Les dades utilitzades per elaborar el mapa provenen de l’Observatori de l'Autoconsum a Catalunya, proporcionades per l'ICAEN.
  2. **Exportació del Mapa amb qgis2web**
    Plugin Utilitzat: qgis2web. Aquest plugin permet exportar els projectes de QGIS a formats compatibles amb la web, com ara HTML, Leaflet o OpenLayers.Procés: Es configura el mapa a QGIS amb les capes i l'estil desitjats i es fa servir el plugin qgis2web per exportar el mapa a un fitxer HTML.
  3. **Integració del Mapa a la Web**
    Tecnologia Utilitzada: iframe . El mapa exportat s'integra a la pàgina web mitjançant un element iframe, que permet incrustar contingut HTML dins de la pàgina.
     <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="1500" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="./mapes/qgis2web_2024_05_21-18_36_26_694442/index.html"></iframe>
# Dificultat  
- Adaptar la web per a diferents dispositius ha estat un repte considerable.
# Millores
- Afegir una llegenda per explicar els colors i símbols
- Connectar a una base de dades per mostrar dades actualitzades.