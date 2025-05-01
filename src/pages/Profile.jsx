import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Profile() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [editing, setEditing] = useState(false);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProfile = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    await axios
      .get("http://127.0.0.1:5000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setName(response.data.user.name);
        setEmail(response.data.user.email);
        setPhone(response.data.user.phone || "");
        setAddress(response.data.user.address || "");
        setUserId(response.data.user.id);
      })
      .catch((error) => {
        console.error(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []); // Fetch profile data when the component mounts

  const handleSave = (e) => {
    e.preventDefault();
    setEditing(true);
    const token = localStorage.getItem("token");
    //url, data, config
    axios
      .put(
        "http://127.0.0.1:5000/api/profile",
        {
          name,
          phone,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setName(response.data.user.name);
        setEmail(response.data.user.email);
        setPhone(response.data.user.phone || "");
        setAddress(response.data.user.address || "");
        setSuccess("Profile updated successfully!");
        setEditing(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to update profile. Please try again.");
      });
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-12 px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
            {name.charAt(0)}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
          <p className="text-gray-500">User {userId}</p>
        </div>
        <form className="space-y-6" onSubmit={handleSave}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              disabled={editing}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${
                editing ? "border-blue-400" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-blue-300`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={phone}
              disabled={editing}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${
                editing ? "border-blue-400" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-blue-300`}
              placeholder="e.g. +1234567890"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={address}
              disabled={editing}
              onChange={(e) => setAddress(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border ${
                editing ? "border-blue-400" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-blue-300`}
              placeholder="Your address"
            />
          </div>
          {success && (
            <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded text-green-700 text-sm">
              {success}
            </div>
          )}
          <div className="flex justify-end gap-3">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
