// components/ProposalCard.tsx

export function ProposalCard({ proposal, onExplain, onVote }) {
  return (
    <Card>
      <Text>{proposal.title}</Text>
      <Button title="Explain" onPress={onExplain} />
      <Button title="Vote Yes" onPress={() => onVote("yes")} />
      <Button title="Vote No" onPress={() => onVote("no")} />
    </Card>
  );
}
