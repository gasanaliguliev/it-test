import React, { useState } from "react";
import { Table } from "react-bootstrap";
import CampaignsTable from "./Campaigns";

const ProfilesTable = ({ accountId }) => {
  const [selectedProfileId, setSelectedProfileId] = useState(null);

  const profiles = [
    { profileId: 1, country: "Country1", marketplace: "Marketplace1" },
  ];

  const handleRowClick = (profileId) => {
    setSelectedProfileId(profileId);
  };

  return (
    <div>
      <h2>Profiles</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Profile ID</th>
            <th>Country</th>
            <th>Marketplace</th>
          </tr>
        </thead>

        <tbody>
          {profiles.map((profile) => (
            <tr
              key={profile.profileId}
              onClick={() => handleRowClick(profile.profileId)}
            >
              <td>{profile.profileId}</td>
              <td>{profile.country}</td>
              <td>{profile.marketplace}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedProfileId && <CampaignsTable profileId={selectedProfileId} />}
    </div>
  );
};

export default ProfilesTable;
