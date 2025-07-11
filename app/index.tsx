    import React from "react";
    import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

    export default function Index() {
      return (
        <ScrollView contentContainerStyle={styles.container}>

          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.name}>Raichu</Text>
              <Text style={styles.hp}>❤️ HP: 100</Text>
            </View>

            <Image
              source={require("@/assets/images/2.png")}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={[styles.typeBadge, { borderColor: "#2020B3" }]}>
              <Text style={[styles.typeText, { color: "#2020B3" }]}>⚡Electric</Text>
            </View>

            <Text style={styles.sectionLabel}>Moves:</Text>
            <Text style={styles.sectionText}> Grass Knot, Volt Switch, Surf, Substitute, Encore, and Signal Beam .</Text>

            <Text style={styles.sectionLabel}>Weakness:</Text>
            <Text style={styles.sectionText}>Ground</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.name}>Kirlia</Text>
              <Text style={styles.hp}>❤️ HP: 99</Text>
            </View>

            <Image
              source={require("@/assets/images/Kirlia.png")}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={[styles.typeBadge, { borderColor: "#2020B3" }]}>
              <Text style={[styles.typeText, { color: "#2020B3" }]}>🧚Fairy</Text>
            </View>

            <Text style={styles.sectionLabel}>Moves:</Text>
            <Text style={styles.sectionText}>Confusion, Double Team, Calm Mind, Psychic, Imprison, Future Sight, and Hypnosis.</Text>

            <Text style={styles.sectionLabel}>Weakness:</Text>
            <Text style={styles.sectionText}>Poison </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.name}>Mega Gardevoir</Text>
              <Text style={styles.hp}>❤️ HP: 79 </Text>
            </View>

            <Image
              source={require("@/assets/images/Mega_Gardevoir-removebg-preview.png")}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={[styles.typeBadge, { borderColor: "#2020B3" }]}>
              <Text style={[styles.typeText, { color: "#2020B3" }]}>🧚 Fairy/Psychic</Text>
            </View>

            <Text style={styles.sectionLabel}>Moves:</Text>
            <Text style={styles.sectionText}>
              hyper Voice, Psychic/Psyshock, Focus Blast, Calm Mind
            </Text>

            <Text style={styles.sectionLabel}>Weakness:</Text>
            <Text style={styles.sectionText}>Ghost, Steel, Poison</Text>
          </View>


          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.name}>Mega Venusaur</Text>
              <Text style={styles.hp}>❤️ HP: 99</Text>
            </View>

            <Image
              source={require("@/assets/images/Mega Venasaur.webp")}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={[styles.typeBadge, { borderColor: "#2020B3" }]}>
              <Text style={[styles.typeText, { color: "#2020B3" }]}>🍃 Grass/Poison</Text>
            </View>

            <Text style={styles.sectionLabel}>Moves:</Text>
            <Text style={styles.sectionText}>
              Giga Drain, Sludge Bomb,Leech Seed, Hidden Power Fire
            </Text>

            <Text style={styles.sectionLabel}>Weakness:</Text>
            <Text style={styles.sectionText}>Flying, Psychic</Text>
          </View>


          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.name}>Mega Mawile</Text>
              <Text style={styles.hp}>❤️ HP: 50</Text>
            </View>

            <Image
              source={require("@/assets/images/Mega_Mawile-removebg-preview.png")}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={[styles.typeBadge, { borderColor: "#2020B3" }]}>
              <Text style={[styles.typeText, { color: "#2020B3" }]}>🧚 Steel/Fairy</Text>
            </View>

            <Text style={styles.sectionLabel}>Moves:</Text>
            <Text style={styles.sectionText}>
              Play Rough, Iron Head, Sucker Punch, Swords Dance
            </Text>

            <Text style={styles.sectionLabel}>Weakness:</Text>
            <Text style={styles.sectionText}>Ground, Fire</Text>
          </View>




           <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.name}>Cobalion</Text>
              <Text style={styles.hp}>❤️ HP: 95</Text>
            </View>

            <Image
              source={require("@/assets/images/Zamazenta1.png")}
              style={styles.image}
              resizeMode="contain"
            />

            <View style={[styles.typeBadge, { borderColor: "#2020B3" }]}>
              <Text style={[styles.typeText, { color: "#2020B3" }]}>⚔️ Steel/Fighting</Text>
            </View>

            <Text style={styles.sectionLabel}>Moves:</Text>
            <Text style={styles.sectionText}>
              Body Press, Heavy Slam, and Behemoth Bash.
            </Text>

            <Text style={styles.sectionLabel}>Weakness:</Text>
            <Text style={styles.sectionText}>Flying, Psychic, and Fairy type moves</Text>
          </View>


        </ScrollView>
      );
    }

    const styles = StyleSheet.create({
      container: {
        padding: 16,
        backgroundColor: "#f2f2f2",
      },
      card: {
        backgroundColor: "#CED4F5",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
      },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      },
      name: {
        fontSize: 20,
        fontWeight: "bold",
      },
      hp: {
        fontSize: 16,
        color: "red",
        fontWeight: "600",
      },
      image: {
        width: "100%",
        height: 160,
        marginVertical: 12,
        borderRadius: 21,
      },
      typeBadge: {
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 12,
        marginBottom: 12,
      },
      typeText: {
        fontWeight: "bold",
        fontSize: 14,
      },
      sectionLabel: {
        fontWeight: "bold",
        marginTop: 4,
      },
      sectionText: {
        marginBottom: 4,
      },
    });