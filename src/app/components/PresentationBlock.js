// Third-party dependencies
import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

function PresentationBlock({ title: sectionTitle, type, items }) {
  return (
    <Row>
      <Col xs={12} className="presentation-block">
        <h1 className="title">{sectionTitle}</h1>

        {type === "list" && (
          <ul className="list -inverse">
            {items.map((item, index) => {
              const { title, description, icon, link } = item;
              const key = title ? `${title}${index}` : index;
              const textClass = title ? "description -spaced" : "description";
              const url = (
                <a className={textClass} href={link} target="_blank">
                  {description}
                </a>
              );

              return (
                <li className="item" key={key}>
                  {icon && <i className={`fa ${icon}`} aria-hidden="true" />}
                  {title && <h2 className="subtitle">{title}</h2>}
                  {title && description && <br />}
                  {link ? url : <p className={textClass}>{description}</p>}
                </li>
              );
            })}
          </ul>
        )}
      </Col>
    </Row>
  );
}

PresentationBlock.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PresentationBlock;
