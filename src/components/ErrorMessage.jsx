import React from "react";

const ErrorMessage = ({ error, onRetry }) => (
  <div className="bg-red-500/20 backdrop-blur-md border border-red-500/30 rounded-2xl p-6 text-center">
    <div className="text-red-200 text-lg mb-4">⚠️ {error}</div>
    <button
      onClick={onRetry}
      className="px-6 py-2 bg-red-500/30 hover:bg-red-500/40 rounded-xl text-white transition-all duration-200"
    >
      Try Again
    </button>
  </div>
);

export default ErrorMessage;
