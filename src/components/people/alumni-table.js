import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './alumni-table.css';
import './people.css';

const AlumniTable = ({ alumni }) => {
  const renderCurrentPositionLinks = (currentPosition) => {
    if (!currentPosition || currentPosition.length === 0) {
      return <span></span>;
    }

    return currentPosition.map((position, index) => {
      const { description, linkText, linkUrl } = position || {};

      return (
        <React.Fragment key={index}>
          {description && <span>{description}</span>}
          {linkUrl && (
            <>
              {' '}
              <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                {linkText || linkUrl}
              </a>
            </>
          )}
          {index < currentPosition.length - 1 && <span>, </span>}
        </React.Fragment>
      );
    });
  };


  const safeValue = (value, fallback) => {
    if (typeof value === 'number') return value;
    if (typeof value === 'string' && value.trim()) return value;
    return fallback;
  };

  return (
    <div className="alumni-header">
      <section>
        <header>
          <h1>
          Alumni Directory  
          <FontAwesomeIcon icon={faUsers}  />
          </h1>
          <p> </p>
        </header>


        <table className="alumni-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Graduation Year</th>
              <th scope="col">Lab Role</th>
              <th scope="col">Immediate Next or (Current) Position</th>
            </tr>
          </thead>
          <tbody>
            {alumni.length > 0 ? (
              alumni.map((alumnus, index) => {
                const {
                  name = [],
                  graduationYear = [],
                  labRole = [],
                  currentPosition = [],
                } = alumnus || {};

                return (
                  <tr key={index}>
                    <td>{safeValue(name, 'No Name Provided')}</td>
                    <td>{safeValue(graduationYear, 'N/A')}</td>
                    <td>{safeValue(labRole, 'N/A')}</td>
                    <td>{renderCurrentPositionLinks(currentPosition)}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4">No Alumni Data Available</td>
              </tr>
            )}
          </tbody>
        </table>
        </section>
    </div>
  );
};

export default AlumniTable;
