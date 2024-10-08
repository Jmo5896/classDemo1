const IssueItem = ({ issue }) => {
  return (
    <div className="item">
      <i className="large github middle aligned icon"></i>
      <div className="content">
        <a
          className="header"
          href={issue.html_url}
          target="_blank"
          rel="noreferrer"
        >
          {issue.title}
        </a>
        <div className="description">{issue.description}</div>
      </div>
    </div>
  );
};

export default IssueItem;
