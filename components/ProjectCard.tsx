//component/projectCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

type Project = {
  id: string;
  title: string;
  location: string;
  duration: string;
  targetAPR: string;
  status: "Active" | "Funding" | "Coming Soon";
};

export default function ProjectCard({ project }: { project: Project }) {
  const statusColor =
    project.status === "Active"
      ? "#22C55E"
      : project.status === "Funding"
      ? "#EAB308"
      : "#6B7280";

  return (
    <Pressable style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{project.title}</Text>
        <View style={[styles.statusBadge, { borderColor: statusColor }]}>
          <Text style={[styles.statusText, { color: statusColor }]}>
            {project.status}
          </Text>
        </View>
      </View>

      <Text style={styles.meta}>{project.location}</Text>

      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Duration</Text>
          <Text style={styles.value}>{project.duration}</Text>
        </View>

        <View>
          <Text style={styles.label}>Target APR</Text>
          <Text style={styles.value}>{project.targetAPR}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F9FAFB",
    flex: 1,
    marginRight: 8,
  },
  statusBadge: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  meta: {
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
