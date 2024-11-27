import Link from "next/link";
import { useState } from "react";
const DeviceList = () => {
  // Define the device data directly in the component's state
  const [devices] = useState([
    {
      name: "Smart Light",
      id: "12345-abcde-67890",
      status: "on",
      version: "v1.2.0",
    },
    {
      name: "Smart Thermostat",
      id: "23456-bcdef-78901",
      status: "off",
      version: "v2.0.1",
    },
    {
      name: "Smart Door Lock",
      id: "34567-cdefg-89012",
      status: "on",
      version: "v1.5.3",
    },
    {
      name: "Smart Camera",
      id: "45678-defgh-90123",
      status: "off",
      version: "v3.1.0",
    },
    {
      name: "Smart Refrigerator",
      id: "56789-efghi-01234",
      status: "on",
      version: "v4.0.0",
    },
    {
      name: "Smart Speaker",
      id: "67890-fghij-12345",
      status: "off",
      version: "v2.3.1",
    },
  ]);
const handleDeviceClick = (device) =>{
    console.log(device.name);
    
}
  return (
    <div className="device-list">
   {devices.map((device) => (
  <li key={device.id} className="list-none my-2">
    <button
      className="flex  hover:bg-gray-100  focus:bg-gray-200  items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:backdrop-blur-lg dark:hover:bg-gray-700 group"
      onClick={() => handleDeviceClick(device)}  // Custom click handler
      aria-label={`${device.status === "on" ? "Turn off" : "Turn on"} ${device.name}`}
    >
      {/* Device Name */}
      <div className="ms-3 whitespace-nowrap">{device.name}</div>
      {/* Device Status Button */}
      <div
        className={`w-4 h-4 rounded-full ${device.status === "on" ? "bg-green-500" : "bg-red-500"}`}
        aria-hidden="true"  // Hide the status circle from screen readers
      />
    </button>
  </li>
))}
    </div>
  );
};
export default DeviceList;