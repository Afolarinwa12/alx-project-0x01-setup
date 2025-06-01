import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  if (name.includes(".")) {
    const [parent, child] = name.split(".");

    setUser((prev) => ({
      ...prev,
      [parent]: {
        // Ensure prev[parent] is an object, fallback to {}
        ...(typeof prev[parent as keyof UserData] === "object" && prev[parent as keyof UserData] !== null
          ? (prev[parent as keyof UserData] as Record<string, any>)
          : {}),
        [child]: value,
      },
    }));
  } else {
    setUser((prev) => ({ ...prev, [name]: value }));
  }
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg overflow-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic fields */}
          <div>
            <label className="block font-medium mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Full name"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Username"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Email address"
              required
            />
          </div>

          {/* Address fields */}
          <fieldset className="border p-4 rounded">
            <legend className="font-semibold mb-2">Address</legend>

            <div className="mb-2">
              <label className="block mb-1" htmlFor="address.street">Street</label>
              <input
                id="address.street"
                name="address.street"
                value={user.address.street}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Street"
                required
              />
            </div>

            <div className="mb-2">
              <label className="block mb-1" htmlFor="address.suite">Suite</label>
              <input
                id="address.suite"
                name="address.suite"
                value={user.address.suite}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Suite"
                required
              />
            </div>

            <div className="mb-2">
              <label className="block mb-1" htmlFor="address.city">City</label>
              <input
                id="address.city"
                name="address.city"
                value={user.address.city}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="City"
                required
              />
            </div>

            <div className="mb-2">
              <label className="block mb-1" htmlFor="address.zipcode">Zipcode</label>
              <input
                id="address.zipcode"
                name="address.zipcode"
                value={user.address.zipcode}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Zipcode"
                required
              />
            </div>
          </fieldset>

          {/* Phone, Website */}
          <div>
            <label className="block font-medium mb-1" htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Phone number"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              value={user.website}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Website URL"
              required
            />
          </div>

          {/* Company */}
          <fieldset className="border p-4 rounded">
            <legend className="font-semibold mb-2">Company</legend>

            <div className="mb-2">
              <label className="block mb-1" htmlFor="company.name">Name</label>
              <input
                id="company.name"
                name="company.name"
                value={user.company.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Company Name"
                required
              />
            </div>

            <div className="mb-2">
              <label className="block mb-1" htmlFor="company.catchPhrase">Catch Phrase</label>
              <input
                id="company.catchPhrase"
                name="company.catchPhrase"
                value={user.company.catchPhrase}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Catch Phrase"
                required
              />
            </div>

            <div>
              <label className="block mb-1" htmlFor="company.bs">BS</label>
              <input
                id="company.bs"
                name="company.bs"
                value={user.company.bs}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Business stuff"
                required
              />
            </div>
          </fieldset>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;