// File: src/components/Card.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const Card = ({ data, constraints, onUpdate, onDelete }) => {
  const [zIndex, setZIndex] = useState(0);

  return (
    <motion.div
      drag
      dragConstraints={constraints}
      whileDrag={{ scale: 0.95 }}
      onDragStart={() => setZIndex(50)}
      onDragEnd={() => setZIndex(0)}
      className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 py-6 px-6 text-white overflow-hidden shadow-lg flex flex-col"
      style={{ zIndex }}
    >
      <div className="flex-shrink-0">
        <FaFileAlt className="w-6 h-6 text-green-400" />
      </div>

      <textarea
        value={data.desc}
        onChange={(e) => onUpdate(data.id, e.target.value)}
        className="w-full flex-grow bg-transparent outline-none resize-none text-sm leading-tight mt-4 font-medium"
      />

      <div className="absolute bottom-0 left-0 w-full">
        <div className="px-6 py-3 flex items-center justify-between">
          <h5 className="text-xs text-gray-300">{data.filesize}</h5>
          <span
            onClick={() => onDelete(data.id)}
            className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500 transition-colors"
          >
            <MdOutlineClose size=".9em" color="#fff" />
          </span>
        </div>

        {data.tag.isOpen && (
          <div className="flex items-center justify-center w-full h-10 bg-green-600 rounded-b-[45px]">
            <h3 className="text-center text-sm font-semibold">
              {data.tag.tagLine}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;