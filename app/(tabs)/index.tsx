import { useUser, useSmartAccountClient } from "@account-kit/react-native";
import { StyleSheet, View, Text, Linking, ScrollView, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function TabOneScreen() {
	const user = useUser();
	const { bottom } = useSafeAreaInsets();
	const { client } = useSmartAccountClient({
		type: "ModularAccountV2",
	});

	const account = client?.account;
	if (!user) return null;

	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1,
			}}
		>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      				<Button
        			  title="Open Menu Modal"
			          onPress={() => router.push("/(modals)/menu")}
				/>
    			</View>
			<View style={styles.container}>
				<Text
					style={[
						styles.userText,
						{
							fontSize: 50,
						},
					]}
				>
					Welcome!
				</Text>
				<Text style={styles.userText}>{user.email}</Text>
				<View style={styles.separator} />

				{/* User Details */}
				<View>
					<Text style={styles.userText}>OrgId: {user.orgId}</Text>
					<Text style={styles.userText}>Address: {user.address}</Text>
					<Text style={styles.userText}>
						Light Account Address: {account?.address}
					</Text>
				</View>

				<View style={styles.separator} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		paddingTop: 20,
		paddingHorizontal: 15,
		backgroundColor: "white",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		fontFamily: "SpaceMono",
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
	documentationLink: {
		fontSize: 16,
		padding: 5,
		backgroundColor: "rgba(233,70,186,0.15)",
		borderRadius: 4,
		color: "#e946ba",
		textDecorationLine: "underline",
		textDecorationStyle: "solid",
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "#e946ba",
	},
});
