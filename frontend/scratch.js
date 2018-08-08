//logout button and username
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">{currentUser.username}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );
//logged in ? ternary
  return currentUser ? personalGreeting() : sessionLinks();
