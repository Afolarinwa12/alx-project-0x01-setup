import React from 'react';
import { UserProps } from '@/interfaces'; // Import the UserProps interface

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
    return(
         <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">{name}</h2>
      <p className="text-gray-700 text-lg mb-1">@{username}</p>
      <p className="text-gray-600 mb-3">
        <span className="font-semibold">Email:</span> {email}
      </p>

      <div className="text-sm text-gray-500 border-t pt-3 mt-3">
        <p className="mb-1">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Website:</span>{' '}
          <a
            href={`http://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {website}
          </a>
        </p>
        <p className="mb-1">
          <span className="font-semibold">Company:</span> {company.name} (
          {company.bs})
        </p>
        <p className="mb-1">
          <span className="font-semibold">Address:</span> {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </p>
      </div>

      <div className="mt-4 text-xs text-gray-400 text-right">
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;