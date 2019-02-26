import React from 'react';
import PropTypes from 'prop-types';

const ArticlePreview = props => {
  const article = props.article;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="/#">
          <img alt="" src={article.author.image}></img>
        </a>

        <div className="info">
          <a className="author" href="/#">{article.author.username}</a>
          <span className="date">{new Date(article.createdAt).toDateString()}</span>
        </div>

        <div className="pull-xs-right">
          <button className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i> {article.favoritesCount}
          </button>
        </div>
      </div>

      <a className="preview" href="/#">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {
            article.tagList.map(tag => {
              return (
                <li className="tag-default tag-pill tag-outline" key={tag}>
                  {tag}
                </li>
              );
            })
          }
        </ul>
      </a>
    </div>
  );
};

ArticlePreview.propTypes = {
  article: PropTypes.object
};

export default ArticlePreview;