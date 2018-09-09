import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import colors from "../../helpers/colors";
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import styles from "./styles";

export default class About extends React.Component {
  static navigationOptions = {
    title: "O udruženju i o aplikaciji"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Image
            style={{ width: "100%" }}
            source={require("../../images/about.png")}
          />
          <View style={{ backgroundColor: colors.white }}>
            <ArticleTitle label="Osnovne informacije" />
            <Text style={styles.body}>
              Centar „Srce“ je neprofitna, volonterska i nevladina organizacija,
              osnovano je 1991. godine i deo je međunarodne mreže SOS centara za
              prevenciju samoubistva Befrienders Worldwide. Svakog dana, od 17
              do 23 časa, volonteri Centra “Srce” razgovaraju sa ljudima koji su
              usamljeni, uznemireni, povređeni, tužni, očajni, nesigurni i -
              slušaju ih.
              {"\n"}
              Naša VIZIJA je društvo u kom manje ljudi oduzima sebi život,
              postoji prostor u kom možemo da istražimo sopstvena osećanja i
              ljudi mogu da priznaju i poštuju osećanja drugih. Svi podaci koje
              dobijemo od korisnika su strogo poverljivi i ostaju u okvirima
              Centra. Osobe koje nam se obraćaju mogu da zadrže anonimnost.
              {"\n"}
              {"\n"}
              Kontakt telefon: 0800-300-303
              {"\n"}
              Kontakt email: vanja@centarsrce.org
              {"\n"}
              Više informacija na sajtu: www.centarsrce.org
              {"\n"}
              {"\n"}O aplikaciji „Podrška“:
              {"\n"}
              Kada sve ono sa čime se suočavamo postane preveliko i deluje da
              nikada neće prestati potrebna nam je sva moguća podrška.
              Aplikacija je zamišljena kao PODRŠKA u trenucima kada nam je
              izuzetno teško. Ona sadrži opšte znanje o suicidu i pomaže da se
              prepoznaju i objasne osećanja i razmišljanja koja imamo. Ali, ona
              takođe sadrži naš lični plan podrške koji nam pomaže da nađemo
              oslonac kada osetimo da nas patnja nadjačava.
              {"\n"}
              Prednost aplikacije je što koristi moderne tehnologije koje su nam
              uvek dostupne, te je samim tim uvek nešto što nam je blizu i
              možemo aktivirati. U nju je utkana iskrena želja da se pomogne i
              poruka da nisi sam/a, te da postoji neko kome je stalo. Nadamo se
              da će ti biti podrška u trenucima kada se boriš sa mislima o
              samoubistvu ili želiš da pomogneš nekom ko ima suicidne ideje.
              {"\n"}
              Tu smo da budemo podrška.
            </Text>
          </View>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
