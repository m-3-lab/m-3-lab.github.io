/* eslint-disable react/no-danger */

import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import Link from '../link/link';
import Portrait from './portrait';

import './people.css';
 
const People = ({
  markdown,
}) => (
  <div className="people">
    <section>
      <header>
        <h1>
          Our Team
        </h1>
        <FontAwesomeIcon icon={faUsers} size="2x" />
      </header>
      <ul className="people__list">
        {
          markdown.map((person) => (
            <li key={person.node.frontmatter.name}>
              <Portrait
                image={person.node.frontmatter.image}
                name={person.node.frontmatter.name}
              />
              <div>
                <h2>{person.node.frontmatter.name}</h2>
                {
                  person.node.frontmatter.title
                  && (
                    <h3>{person.node.frontmatter.title}</h3>
                  )
                }
                {
                  person.node.frontmatter.email
                  && (
                    <Link
                      className="person__list-email"
                      to={`mailto:${person.node.frontmatter.email}`}
                    >
                      {person.node.frontmatter.email}
                    </Link>
                  )
                }
                {
                  person.node.frontmatter.links && person.node.frontmatter.links.length > 0
                  && (
                    <ul className="person__list-links">
                      {person.node.frontmatter.links.map((link, index) => (
                        <li key={index}>
                          <a 
                            href={link.linkUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {link.linkText}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )
                }
                <div dangerouslySetInnerHTML={{ __html: person.node.html }} />
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  </div>
);

People.propTypes = {
  markdown: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          email: PropTypes.string,
          image: PropTypes.shape({}),
          name: PropTypes.string,
          title: PropTypes.string,
          links: PropTypes.arrayOf(
            PropTypes.shape({
              linkUrl: PropTypes.string,
              linkText: PropTypes.string,
            })
          ),
        }),
        html: PropTypes.node,
      }),
    }),
  ).isRequired,
};

export default People;
