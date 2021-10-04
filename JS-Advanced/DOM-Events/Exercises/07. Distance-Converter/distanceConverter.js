function attachEventsListeners() {
  document.getElementById("convert").addEventListener("click", onClick);
  let inputArea = document.getElementById("inputDistance");
  let outputArea = document.getElementById("outputDistance");
  let [inputSelectMenu, OutputSelectMenu] = document.querySelectorAll("select");
  let ratios = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };

  function convertDistance(value, unit) {
    const inMeters = value * ratios[unit];
    return {
      m: inMeters,
      km: inMeters / ratios.km,
      cm: inMeters / ratios.cm,
      mm: inMeters / ratios.mm,
      mi: inMeters / ratios.mi,
      yrd: inMeters / ratios.yrd,
      ft: inMeters / ratios.ft,
      in: inMeters / ratios.in,
    };
  }

  function onClick(e) {
    let distance = convertDistance(inputArea.value, inputSelectMenu.value);
    outputArea.value = distance[OutputSelectMenu.value];
  }
}
