import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const handeleOn = () => {
      setStatus(true);
    };

    const handeleOff = () => {
      setStatus(false);
    };

    window.addEventListener("online", handeleOn);
    window.addEventListener("offline", handeleOff);
    return () => {
      window.removeEventListener("online", handeleOn);
      window.removeEventListener("offline", handeleOff);
    };
  }, []);

  return status ? (
    <div className="status">Online</div>
  ) : (
    <div className="status status_offline">Offline</div>
  );
};
export default ConnectionStatus;
