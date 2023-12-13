import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  SectionList,
  Pressable,
  Image,
} from "react-native";
import Button from "../../../Components/ButtonsHomePage";
const PlaceholderImage = require("../../../Assets/doctors/doc1.jpg");
const mapImage = require("../../../Assets/doctors/map.png");
const agendaImage = require("../../../Assets/doctors/marcar.png");
export function FrancieleSilvaMainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginVertical: 30 }}>
        <Text style={{ fontSize: 16, color: "#F2DC99" }}>
          Como é a primeira consulta?
        </Text>
        <Text style={{ color: "white" }}>
          Muitas pessoas ficam ansiosas e cheias de dúvidas antes de ir à
          primeira consulta, mas não há motivo para que você se sinta nervoso. É
          nesse momento que você irá conhecer a clínica e a psicóloga. Ela por
          sua vez, buscará conhecer você e o que te trouxe ali. E não se
          preocupe se não souber responder, vocês poderão descobrir isso juntos.
        </Text>
      </View>
      <View style={{ marginVertical: 30 }}>
        <Text style={{ fontSize: 16, color: "#F2DC99" }}>
          Como a psicóloga pode me ajudar?
        </Text>
        <Text style={{ color: "white" }}>
          A psicologia é uma ciência e seus métodos são desenvolvidos obedecendo
          a critérios científicos, ou seja, propondo-se hipóteses e testando-as,
          sendo ensinados em quase todas as formações de nível superior.
          Explorando conceitos como percepção, cognição, atenção, emoção,
          inteligência, fenomenologia, motivação, funcionamento do cérebro
          humano, personalidade e comportamento, a psicóloga é capaz de auxiliar
          o paciente na sua demanda.
        </Text>
      </View>
      <View style={{ marginVertical: 30 }}>
        <Text style={{ fontSize: 16, color: "#F2DC99" }}>
          É normal ter dificuldades em falar na primeira consulta?{" "}
        </Text>
        <Text style={{ color: "white" }}>
          É perfeitamente normal. Nas consultas iniciais pode ser que você sinta
          nervosismo e alguma timidez, que resulta do receio de se expôr e
          também da expectativa que traz em relação à consulta. Isso é
          compreensível porque somos seres humanos com distintas emoções e
          sentimentos. Mas fique tranquilo, a timidez e a insegurança vão
          desaparecendo à medida que as sessões passam e você comece a confiar
          mais na sua terapeuta. Tenha sempre em mente que a terapia não é um
          milagre, talvez demore um pouco até que você comece a perceber as
          mudanças práticas que esse tipo de exercício vai ter em sua vida, mas
          uma vez que isso aconteça, é realmente libertador.
        </Text>
      </View>
      <View style={{ marginVertical: 30 }}>
        <Text style={{ fontSize: 16, color: "#F2DC99" }}>
          Há sigilo absoluto no que eu contar à psicóloga?{" "}
        </Text>
        <Text style={{ color: "white" }}>
          Sim, as psicólogas são obrigadas eticamente e através de legislação
          rigorosa a guardar sigilo absoluto e inviolável de tudo o que os seus
          pacientes lhes contarem ou de qualquer assunto que esteja relacionado
          às consultas.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 15,
          position: "absolute",
          bottom: 3,
          left: 25,
        }}
      >
        <Text style={{ color: "white" }}>
          Ainda com alguma dúvida? Entre em contato via Whatsapp!
        </Text>

        <MaterialCommunityIcons name={"whatsapp"} size={30} color="#25D366" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1D4D6",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    height: "300%",
    padding: 12,
  },
});
