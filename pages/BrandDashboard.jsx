import CreatorCard from "../components/CreatorCard";
import { creators } from "../data/seed";

function BrandDashboard() {
  return (
    <div>
      <h1>Recommended Creators</h1>

      {creators.map((creator) => (
        <CreatorCard
          key={creator.id}
          creator={creator}
        />
      ))}
    </div>
  );
}

export default BrandDashboard;
