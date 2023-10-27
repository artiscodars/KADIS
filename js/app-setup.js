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
        <li class="examples">
        <a href="examples-index.html">Piemēri</a>
        </li>
        </ul>
    `; 




    var menuExample = `
    <a href="index.html"><img src="images/logo.svg" class="vzd-logo" /></a>
      <div class="vzd-app-title">Kadastra informācijas sistēma</div>
      <div class="vzd-app-small-title">KADIS</div>
        <ul id="menu" class="vzd-menu">
        <li class="dashboard"><a href="#">Darbvirsma</a></li>
        <li class="my-tasks"><a href="#">Mani uzdevumi</a></li>
        <li class="orders"><a href="#">Pasūtījumi</a></li>
        <li class="land-objects active"><a href="#">Zemes vienības</a></li>
        <li class="admin">
          <a href="#">Administrēšana</a>
            <ul class="submenu">
                <li>
                  <a href="#">Iestatījumi</a>
                </li>
                <li>
                  <a href="#">Izkārtojums</a>
                </li>
            </ul>
        </li>       
        </ul>
    `; 


  var userHtml = `
    <div class="vzd-user">
        <div class="vzd-user-abr">JB</div>
        <div class="vzd-user-name">Jānis Bērziņš</div>
      </div> 
    `; 




  // containers for inserting the HTML
  $('#menu-container').html(menuHtml);
  $('#menu-example').html(menuExample);
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
      width: "200px",
      actionsLayout: "end",
      actions: [
        {
          text: "Iziet",
          click: function () {
            console.log("create");
          },
        },
      ],
      header: `<div
      class="k-d-flex k-justify-content-end k-gap-2"
    >
      <div class="k-font-bold">LV</div>
      <div class="">EN</div>
    </div>`,
      body: `<ul id="user-menu">
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
      </ul>`,
      position: "top",
    
  });
});
