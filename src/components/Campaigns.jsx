import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CampaignsTable = ({ profileId }) => {
  const campaigns = [
    { campaignId: 1, clicks: 100, cost: 50, date: "2022-01-05" },
  ];

  return (
    <div>
      <h2>Campaigns</h2>
      <Table>
        <thead>
          <tr>
            <th>Campaign ID</th>
            <th>Clicks</th>
            <th>Cost</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.campaignId}>
              <td>{campaign.campaignId}</td>
              <td>{campaign.clicks}</td>
              <td>{campaign.cost}</td>
              <td>{campaign.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CampaignsTable;
