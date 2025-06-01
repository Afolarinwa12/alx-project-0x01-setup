import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company }) => {
  return (
    <div className="border rounded-md p-4 shadow-md bg-white max-w-md w-full">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="mt-2"><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> <a href={`https://${website}`} className="text-blue-600 underline" target="_blank" rel="noreferrer">{website}</a></p>

      <div className="mt-4">
        <h3 className="font-medium">Address</h3>
        <p>{address.suite}, {address.street}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-medium">Company</h3>
        <p>{company.name}</p>
        <p className="text-sm italic">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;