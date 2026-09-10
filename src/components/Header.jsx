import { Bell, Search } from "lucide-react";

function Header() {
  return (
    <header className="header">

      <div>
        <h1>Logistics Dashboard</h1>
        <p>Monitor freight, vessels and cargo movement</p>
      </div>

      <div className="header-right">

        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        <button className="notification">
          <Bell size={20} />
          <span></span>
        </button>

        <div className="profile">
          <div className="profile-icon">SF</div>

          <div>
            <strong>Logistics Admin</strong>
            <small>Operations</small>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Header;