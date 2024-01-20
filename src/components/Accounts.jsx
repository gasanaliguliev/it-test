import React, { useState } from "react";
import { Table } from "react-bootstrap";
import ProfilesTable from "./Profiles";
import "bootstrap/dist/css/bootstrap.min.css";

const AccountsTable = () => {
  const [selectedAccountId, setSelectedAccountId] = useState(null);

  const accounts = [
    {
      accountId: 1,
      email: "example1@example.com",
      authToken: "token1",
      creationDate: "2022-01-01",
    },
  ];

  const handleRowClick = (accountId) => {
    setSelectedAccountId(accountId);
  };

  return (
    <div>
      <h2>Accounts</h2>
      <Table className="table-striped">
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Email</th>
            <th>Auth Token</th>
            <th>Creation Date</th>
          </tr>
        </thead>

        <tbody>
          {accounts.map((account) => (
            <tr
              key={account.accountId}
              onClick={() => handleRowClick(account.accountId)}
            >
              <td>{account.accountId}</td>
              <td>{account.email}</td>
              <td>{account.authToken}</td>
              <td>{account.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedAccountId && <ProfilesTable accountId={selectedAccountId} />}
    </div>
  );
};

export default AccountsTable;
