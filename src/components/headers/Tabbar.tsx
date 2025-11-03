export default function Tabbar() {
  return (
    <div className="position-sticky sticky-top tmp-sticky-top w-100">
      <ul
        className="tab-navigation-button style-2 nav tab-smlg nav-pills"
        id="v-pills-tab"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link tmp-nav active"
            id="v-pills-home-tab"
            data-bs-toggle="tab"
            href="#v-pills-Javascript"
            role="tab"
            aria-selected="true"
          >
            My About
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link tmp-nav"
            id="v-pills-profile-tab"
            data-bs-toggle="tab"
            href="#v-pills-Design"
            role="tab"
            aria-selected="true"
          >
            My Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link tmp-nav"
            id="v-pills-wordpress-tab"
            data-bs-toggle="tab"
            href="#v-pills-Wordpress"
            role="tab"
            aria-selected="true"
          >
            My Work
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link tmp-nav"
            id="v-pills-settings-tabs"
            data-bs-toggle="tab"
            href="#v-pills-settings"
            role="tab"
            aria-selected="true"
          >
            My Blog
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link tmp-nav"
            id="v-pills-python-tabs"
            data-bs-toggle="tab"
            href="#v-pills-python"
            role="tab"
            aria-selected="true"
          >
            My Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
