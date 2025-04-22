// components/Breadcrumbs.js
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumbs = ({ items }) => (
  <nav className="breadcrumb">
    {items.map((item, index) => (
      <span key={item.id}>
        <a href={item.link}>{item.title}</a>
        {index < items.length - 1 && (
          <FontAwesomeIcon icon={faChevronRight} className="mx-2" />
        )}
      </span>
    ))}
  </nav>
);

export default Breadcrumbs;
