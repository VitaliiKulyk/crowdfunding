import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Campaign from "../components/Campaign";

const CampaignsList = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 20px;
  width: 500px;
`;

const CampaignsView = () => {
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    const { data } = await axios.get("http://localhost:3005/api/campaigns");
    setCampaigns(data);
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <CampaignsList>
      {campaigns.map((campaign) => (
        <Campaign {...campaign} />
      ))}
    </CampaignsList>
  );
};

export default CampaignsView;
