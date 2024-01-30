import React from "react";
import "./Memo.css";

function Memo() {
  return (
    <section className="memo">
      <h1 className="memo__title">Memo to the administrator</h1>
      <h2 className="memo__list-title">Administrator responsibilities</h2>
      <ul>
        <li className="memo__text">
          Text content (reviews, news, descriptions of headings and sections).
        </li>
        <li className="memo__text">
          The content should be literate, meaningful, and filled with keywords.
          The position of the site in search results largely depends on this.
        </li>
        <li className="memo__text">
          Updating product cards (notifications about the availability of new
          products or that the product is out of stock).
        </li>
        <li className="memo__text">
          Correction of price lists, galleries, removal of irrelevant
          information.
        </li>
        <li className="memo__text">
          Promotion: creation of contextual advertising, optimization.
        </li>
        <li className="memo__text">
          Creation and maintenance of groups on social networks.
        </li>
        <li className="memo__text">Google and look for information yourself</li>
        <li className="memo__text">
          Read the instructions and do what they say
        </li>
        <li className="memo__text">Consult buyers</li>
        <li className="memo__text">
          Taking measures to resolve conflict situations
        </li>
        <li className="memo__text">Consideration of consumer complaints</li>
        <li className="memo__text">Make calls with new registered users</li>
      </ul>
    </section>
  );
}

export default Memo;
