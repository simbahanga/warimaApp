import { View, Text, StyleSheet } from "react-native";

type BalanceHeaderProps = {
  originalBalance: number;
  currentBalance: number;
  symbol?: string;
};

export default function BalanceHeader({
  originalBalance,
  currentBalance,
  symbol = "WZAR",
}: BalanceHeaderProps) {
  const delta = currentBalance - originalBalance;
  const deltaPercent =
    originalBalance > 0
      ? ((delta / originalBalance) * 100).toFixed(2)
      : "0.00";

  const isPositive = delta >= 0;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Your Blance</Text>

      <Text style={styles.current}>
        {currentBalance.toFixed(2)} {symbol}
      </Text>

      <View style={styles.row}>
        <Text style={styles.original}>
          Original: {originalBalance.toFixed(2)} {symbol}
        </Text>

        <Text
          style={[
            styles.delta,
            { color: isPositive ? "#22C55E" : "#EF4444" },
          ]}
        >
          {isPositive ? "+" : ""}
          {deltaPercent}%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F172A",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: "#9CA3AF",
    marginBottom: 4,
  },
  current: {
    fontSize: 32,
    fontWeight: "700",
    color: "#F9FAFB",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  original: {
    fontSize: 13,
    color: "#9CA3AF",
  },
  delta: {
    fontSize: 13,
    fontWeight: "600",
  },
});
