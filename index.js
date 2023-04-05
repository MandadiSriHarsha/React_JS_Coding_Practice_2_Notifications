const Notification = (props) => {
  const { imageUrl, text, classname } = props;
  return (
    <div className={classname}>
      <img src={imageUrl} className="notification-card-image" />
      <p className="notification-card-description">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Notifications</h1>
    <div className="notifications-card-container">
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
        classname="information-card"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
        classname="success-card"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
        classname="warning-card"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
        classname="error-card"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
