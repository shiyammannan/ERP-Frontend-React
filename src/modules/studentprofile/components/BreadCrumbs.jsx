import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-gray-500 text-sm mb-4">
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          {index !== 0 && (
            <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
          )}
          <span>{item.title}</span>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
