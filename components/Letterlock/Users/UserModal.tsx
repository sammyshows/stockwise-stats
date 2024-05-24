import React, { useState } from 'react';
import { UsersTableRowProp } from "@/interfaces/letterlock/users";

interface UserSettingsModalProps {
  user: UsersTableRowProp;
  onClose: (getUsers: boolean) => void;
}

const UserSettingsModal: React.FC<UserSettingsModalProps> = ({ user, onClose }) => {
  const [isTestUser, setIsTestUser] = useState(user.testUser);

  const handleSave = async () => {
    // Update the user object with the new settings
    const updatedUser = { ...user, testUser: isTestUser };

    // Send a request to the API to save the updated settings
    await fetch('/api/letterlock-user-update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: updatedUser
      }),
    });

    // Close the modal and trigger refetch in parent
    onClose(true);
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleClickOutside}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">{user.username}</h2>
        <div className="flex justify-between">
          <p>Test user</p>
          <input
            type="checkbox"
            id="testUser"
            checked={isTestUser}
            onChange={(e) => setIsTestUser(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsModal;
