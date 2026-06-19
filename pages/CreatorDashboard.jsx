import CampaignCard from "../components/CampaignCard";
import { campaigns } from "../data/seed";

function CreatorDashboard() {
  return (
    <div>
      <h1>Available Campaigns</h1>

      {campaigns.map((campaign) => (
        <CampaignCard
          key={campaign.id}
          campaign={campaign}
        />
      ))}
    </div>
  );
}

export default CreatorDashboard;