import { StyleSheet, View, Text, FlatList } from "react-native";
import ProjectCard from "@/components/ProjectCard";
import BalanceHeader from "@/components/BalanceHeader";
import { useRebaseBalance } from "@/hooks/useRebaseBalance";

const PROJECTS = [
  {
    id: "1",
    title: "Magalies Orange Cooperative",
    location: "North West",
    duration: "6 Months",
    targetAPR: "10-14%",
    status: "Coming Soon", 
  },
  {
    id: "2",
    title: "Urban Mashroom Factory",
    location: "Alexandra",
    duration: "9 Months",
    targetAPR: "14-18%",
    status: "Coming Soon",
  },
  {
    id: "3",
    title: "Warima Bandsaw Project",
    location: "Warima Treasury",
    duration: "3 Months",
    targetAPR: "5-10%",
    status: "Active",
  },
  {
    id: "4",
    title: "Grain Cooperative",
    location: "Warima Treasury",
    duration: "9 Months",
    targetAPR: "5-10%",
    status: "Funding",
  },
];

export default function ProjectsScreen() {
  const { originalBalance, currentBalance } = useRebaseBalance();

  return (
    <View style={styles.container}>
      <BalanceHeader
        originalBalance={originalBalance}
        currentBalance={currentBalance}
      />

      <Text style={styles.header}>Warima Stokvels</Text>
      <Text style={styles.subheading}>
        Your balance grows while capital works.
      </Text>

      <FlatList
        data={PROJECTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ProjectCard project={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#0B0E11",
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#F5F5F5",
    marginBottom: 4,
  },
  subheading: {
    fontSize: 14,
    color: "#9CA3AF",
    marginBottom: 16,
  },
  list: {
    paddingBottom: 24,
  },
});
