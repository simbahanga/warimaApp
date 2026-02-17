import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import BalanceHeader from "@/components/BalanceHeader";
import { useRebaseBalance } from "@/hooks/useRebaseBalance";

type Stokvel = {
  id: string;
  name: string;
  members: number;
  focus: string;
  treasury: string;
  status: "Active" | "Forming";
};

const STOKVELS: Stokvel[] = [
  {
    id: "1",
    name: "Mazowe Importers Stokvel",
    members: 15,
    focus: "Logistics",
    treasury: "84 500 WZAR",
    status: "Active",
  },
  {
    id: "2",
    name: "Eastern Highlands Coffee Processors",
    members: 20,
    focus: "Processing",
    treasury: "41 200 WZAR",
    status: "Forming",
  },
  {
    id: "3",
    name: "Warima Pork Breeding",
    members: 12,
    focus: "Agriculture",
    treasury: "15 000 WZAR",
    status: "Active",
  },
  {
    id: "4",
    name: "Warima Pork",
    members: 8,
    focus: "Agriculture",
    treasury: "15 000 WZAR",
    status: "Forming",
  },
];

export default function ProfileScreen() {
  const { originalBalance, currentBalance } = useRebaseBalance();

  return (
    <View style={styles.container}>
      <BalanceHeader
        originalBalance={originalBalance}
        currentBalance={currentBalance}
      />

      <Text style={styles.heading}>Profile: Stokvels</Text>
      <Text style={styles.subheading}>
        Pool Capital. Decide Together. Grow Patiently.
      </Text>

      <FlatList
        data={STOKVELS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <StokvelCard stokvel={item} / >}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function StokvelCard({ stokvel }: { stokvel: Stokvel }) {
  const statusColor =
    stokvel.status === "Active" ? "#22C55E" : "#EAB308";

  return (
    <Pressable style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{stokvel.name}</Text>
        <Text style={[styles.status, { color: statusColor }]}>
          {stokvel.status}
        </Text>
      </View>

      <Text style={styles.focus}>{stokvel.focus}</Text>

      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Members</Text>
          <Text style={styles.value}>{stokvel.members}</Text>
        </View>

        <View>
          <Text style={styles.label}>Treasury</Text>
          <Text style={styles.value}>{stokvel.treasury}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#0B0E11",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#F5F5F5",
    marginBottom: 4,
  },
  subheading: {
    fontSize: 14,
    color: "#9CA3AF",
    marginBottom: 12,
  },
  list: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F9FAFB",
    flex: 1,
    marginBottom: 8,
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
  },
  focus: {
    fontSize: 13,
    color: "#9CA3AF",
    marginTop: 4,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#E5E7EB",
    marginTop: 2,
  },
});
