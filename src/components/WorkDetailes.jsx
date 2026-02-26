import React from "react";
import { FiX } from "react-icons/fi";

export default function WorkDetailes({
  title,
  overview,
  features = [],
  tech = [],
  highlights = [],
  onClose
}) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full relative
                   max-h-[90vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-4 text-xl"
          onClick={onClose}
        >
          <FiX />
        </button>

        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        {overview && (
          <p className="mb-6 text-gray-700">{overview}</p>
        )}

        {/* Features */}
        {features.length > 0 && (
          <>
            <h3 className="font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-5 mb-4">
              {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </>
        )}

        {/* Tech */}
        {tech.length > 0 && (
          <>
            <h3 className="font-semibold mb-2">Tech Stack</h3>
            <ul className="list-disc pl-5 mb-4">
              {tech.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </>
        )}

        {/* Highlights */}
        {highlights.length > 0 && (
          <>
            <h3 className="font-semibold mb-2">Highlights</h3>
            <ul className="list-disc pl-5">
              {highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
