import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000); // Redirect to homepage after 5 seconds

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful! 🎉</h1>
      <p className="text-lg mt-2">Thank you for your purchase.</p>
      <p className="text-gray-500 mt-1">Redirecting to homepage...</p>
    </div>
  );
};

export default Success;
