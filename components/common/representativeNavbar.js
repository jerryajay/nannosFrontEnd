import { html, component } from "haunted";
import { useTitle, navigateTo } from "haunted-router";

export function RepresentativeNavbar() {
  return html`
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-info dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Manage Vendor
      </button>
      <div class="dropdown-menu">
        <a is="router-link" class="dropdown-item" href="/registerVendor">Register New</a>
        <a is="router-link" class="dropdown-item" href="/lookupVendor">Modify Existing</a>
        <a is="router-link" class="dropdown-item" href="/deleteVendor">Remove Existing</a>
      </div>

      <div class="btn-group">
        <button
          type="button"
          class="btn btn-info dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Manage Store
        </button>
        <div class="dropdown-menu">
          <a is="router-link" class="dropdown-item" href="/AddStore">Add New Store</a>
          <a is="router-link" class="dropdown-item" href="/lookupStore">Modify Existing</a>
          <a is="router-link" class="dropdown-item" href="/deleteStore">Remove Store</a>
        </div>
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-info dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Manage Inventory
          </button>
          <div class="dropdown-menu">
            <a is="router-link" class="dropdown-item" href="/AddItem">Add New Item</a>
            <a is="router-link" class="dropdown-item" href="/lookupItem">Modify Existing</a>
            <a is="router-link" class="dropdown-item" href="/deleteItem">Remove Existing</a>
            <a is="router-link" class="dropdown-item" href="/">Process Delivery</a>
            <a is="router-link" class="dropdown-item" href="/">Process Return</a>
          </div>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-info dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Manage Customer
            </button>
            <div class="dropdown-menu">
              <a is="router-link" class="dropdown-item" href="/AddMember">Add New Member</a>
              <a is="router-link" class="dropdown-item" href="/">Modify Member</a>
              <a is="router-link" class="dropdown-item" href="/deleteMember">Remove Member</a>
              <a is="router-link" class="dropdown-item" href="/">New Purchase</a>
            </div>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-info dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Manage Order
              </button>
              <div class="dropdown-menu">
                <a is="router-link" class="dropdown-item" href="/">New Order</a>
                <a is="router-link" class="dropdown-item" href="/">Add to Existing</a>
              </div>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-info dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Look Up
                </button>
                <div class="dropdown-menu">
                  <a is="router-link" class="dropdown-item" href="/">All Inventory Items</a>
                  <a is="router-link" class="dropdown-item" href="/">All Low Items </a>
                  <a is="router-link" class="dropdown-item" href="/">All Returns </a>
                  <a is="router-link" class="dropdown-item" href="/"
                    >Completed Customer Purchase
                  </a>
                  <a is="router-link" class="dropdown-item" href="/">Paced Orders</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
customElements.define(
  "representative-navbar",
  component(RepresentativeNavbar, { useShadowDOM: false })
);
