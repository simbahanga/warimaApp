import { StyleSheet, View, Text, FlatList } from "react-native";
import ProjectCard from "@/components/ProjectCard";
import BalanceHeader from "@/components/BalanceHeader";
import { useRebaseBalance } from "@/hooks/useRebaseBalance";
import { useUser, useSmartAccountClient } from "@account-kit/react-native";

export default function WalletScreen() {
  const user = useUser();
  const { client } = useSmartAccountClient({
          type: "ModularAccountV2",
  });

  const account = client?.account;
  if (!user) return null;

  const { originalBalance, currentBalance } = useRebaseBalance();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Warima Wallet</Text>
      <Text style={styles.subheading}>
        Welcome {user.email}
      </Text>
      <View style={styles.separator} />

      <BalanceHeader
        originalBalance={originalBalance}
        currentBalance={currentBalance}
      />

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
  separator: {
    marginVertical: 20,
    height: 1,
    width: "80%",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "black",
  },
  userText: {
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "SpaceMono",
  },
});
