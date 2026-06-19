function CampaignCard({ campaign }) {
  return (
    <div className="border p-4 rounded">
      <h2>{campaign.title}</h2>

      <p>{campaign.description}</p>
    </div>
  );
}

export default CampaignCard;
