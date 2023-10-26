// menu
function setupApp() {
  var menuHtml = `
    <a href="index.html"><img src="images/logo.svg" class="vzd-logo" /></a>
      <div class="vzd-app-title">Kadastra informācijas sistēma</div>
      <div class="vzd-app-small-title">KADIS</div>
        <ul id="menu" class="vzd-menu">
        <li class="home"><a href="index.html">Ievads</a></li>
        <li class="general">
          <a href="general-index.html">Vispārīgi</a>
            <ul class="submenu">
                <li>
                  <a href="general-index.html">Ievads</a>
                </li>
                <li>
                  <a href="general-layout.html">Izkārtojums</a>
                </li>
                <li>
                  <a href="general-colors.html">Krāsas</a>
                </li>
                <li>
                  <a href="general-typography.html">Tipogrāfija</a>
                </li>
                <li>
                  <a href="general-icons.html">Ikonas</a>
                </li>
            </ul>
        </li>
        <li class="components">
          <a href="components-index.html">Komponetes</a>
            <ul class="submenu">
              <li>
              <a href="components-index.html">
              Par komponentēm </a>
              </li>
              <li>
              <a href="components-accordions.html">
              Akordioni </a>
              </li>
              <li>
              <a href="components-badges.html">
              Birkas </a>
              </li>
              <li>
              <a href="components-data-entry.html">
              Datu ielāde </a>
              </li>
              <li>
              <a href="components-forms.html">
              Formas </a>
              </li>
              <li>
              <a href="components-modals.html">
              Modālie logi </a>
              </li>
              <li>
              <a href="components-popovers.html">
              Info lodziņi </a>
              </li>
              <li>
              <a href="components-toasts.html">
              Izlecošie paziņojumi </a>
              </li>
              <li>
              <a href="components-menu.html">
              Izvēlne </a>
              </li>
              
              <li>
              <a href="components-tabs.html">
              Mapes </a>
              </li>
              <li>
              <a href="components-breadcrumb.html">
              Navigācijas ceļš </a>
              </li>
              <li>
              <a href="components-alerts.html">
              Paziņojumi </a>
              </li>
              <li>
              <a href="components-tooltips.html">
              Padomu rīki </a>
              </li>
              <li>
              <a href="components-buttons.html">
              Pogas </a>
              </li>
              <li>
              <a href="components-progress-indicators.html">
              Progresa indikātori </a>
              </li>
              <li>
              <a href="components-lists.html">
              Saraksti </a>
              </li>
              <li>
              <a href="components-tables.html">
              Tabulas </a>
              </li>
              </ul>
        </li>
        </ul>
    `; // Your menu HTML goes here


  var userHtml = `
    <div class="vzd-user">
        <div class="vzd-user-abr">JB</div>
        <div class="vzd-user-name">Jānis Bērziņš</div>
      </div> 
    `; // Your user HTML goes here




  // containers for inserting the HTML
  $('#menu-container').html(menuHtml);
  $('#user-container').html(userHtml);

  // Include any other logic you need, like initializing the menu with Kendo UI
  $("#menu").kendoMenu({
    orientation: "vertical",
  });

  $(".vzd-menu-toggle").click(function () {
    // Toggle the class as before
    $("body").toggleClass("vzd-left-bar-collapsed");
  });


}


$(document).ready(function () {

  setupApp();

});


$(document).ready(function () {
  $(".vzd-user").kendoPopover({
    template: `
      <div class="k-popover" style="width: 220px">
          <div class="k-popover-callout k-callout-s"></div>
          <div class="k-popover-inner">
            <div
              class="k-popover-header k-d-flex k-justify-content-end k-gap-2"
            >
              <div class="k-font-bold">LV</div>
              <div class="">EN</div>
            </div>
            <div class="k-popover-body">
              <ul id="user-menu">
                <li class="user-profile k-text-uppercase">
                  <a href="user-profile.html"
                    >
                    Mans profils</a
                  >
                </li>
                <li class="user-settings k-text-uppercase">
                  <a href="settings.html"
                    >
                    Iestatījumi</a
                  >
                </li>
              </ul>
            </div>
            <div
              class="k-actions k-justify-content-end k-actions-horizontal k-popover-actions"
            >
              <button
                class="k-button k-button-sm k-button-solid k-button-solid-primary k-rounded-md"
              >
                <span class="k-button-text"> Iziet </span>
              </button>
            </div>
          </div>
        </div>
      `,
    show: function (e) {
      /* The result can be observed in the DevTools(F12) console of the browser. */
      console.log(e.sender.popup)
    }
  });
});
