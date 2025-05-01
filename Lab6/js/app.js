/***************************************************
  Sunrise & Sunset Dashboard logic (with Font Awesome)
***************************************************/

const presetSelect = document.getElementById("preset");
const geoBtn = document.getElementById("geoBtn");
const cardsEl = document.getElementById("cards");
const errorMsg = document.getElementById("errorMsg");

// 10 preset locations with lat & lng
const PRESETS = [
  { name: "Chicago, IL (USA)", lat: 41.8781, lng: -87.6298 },
  { name: "New York, NY (USA)", lat: 40.7128, lng: -74.006 },
  { name: "Los Angeles, CA (USA)", lat: 34.0522, lng: -118.2437 },
  { name: "London (UK)", lat: 51.5072, lng: -0.1276 },
  { name: "Tokyo (JP)", lat: 35.6764, lng: 139.65 },
  { name: "Sydney (AU)", lat: -33.8688, lng: 151.2093 },
  { name: "Rio de Janeiro (BR)", lat: -22.9068, lng: -43.1729 },
  { name: "Paris (FR)", lat: 48.8566, lng: 2.3522 },
  { name: "Cape Town (ZA)", lat: -33.9249, lng: 18.4241 },
  { name: "Mumbai (IN)", lat: 19.076, lng: 72.8777 },
  { name: "Berlin (DE)", lat: 52.52, lng: 13.405 },
  { name: "Dubai (AE)", lat: 25.2048, lng: 55.2708 },
  { name: "Toronto (CA)", lat: 43.6532, lng: -79.3832 },
  { name: "Nairobi (KE)", lat: -1.2921, lng: 36.8219 },
  { name: "Reykjavik (IS)", lat: 64.1466, lng: -21.9426 },
];

// Populate select list
(function initSelect() {
  PRESETS.forEach(({ name, lat, lng }) => {
    const opt = document.createElement("option");
    opt.textContent = name;
    opt.value = JSON.stringify({ lat, lng });
    presetSelect.appendChild(opt);
  });
})();

presetSelect.addEventListener("change", (e) => {
  const value = e.target.value;
  if (!value) return;
  const { lat, lng } = JSON.parse(value);
  fetchAndRender(lat, lng);
});

geoBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    showError("Geolocation is not supported.");
    return;
  }
  geoBtn.disabled = true;
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      fetchAndRender(lat, lng).finally(() => (geoBtn.disabled = false));
    },
    () => {
      showError("Unable to get location. Permission denied?");
      geoBtn.disabled = false;
    }
  );
});

/**
 * Fetch sunrise/sunset data for today & tomorrow, then render cards.
 */
async function fetchAndRender(lat, lng) {
  clearError();
  cardsEl.innerHTML = placeholderCards();
  try {
    const [today, tomorrow] = await Promise.all([
      fetchDay(lat, lng, "today"),
      fetchDay(lat, lng, "tomorrow"),
    ]);
    buildCards([
      { label: "Today", ...today },
      { label: "Tomorrow", ...tomorrow },
    ]);
  } catch (err) {
    showError(err.message || "Something went wrong while fetching data.");
  }
}

/**
 * Request API for a specific date.
 */
async function fetchDay(lat, lng, date) {
  const url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=${date}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch from API.");
  const json = await res.json();
  if (json.status !== "OK" && json.status !== "success")
    throw new Error(json.message || "API returned an error.");
  return json.results; // sunrise, sunset, dawn, dusk, day_length, solar_noon, timezone
}

/*************************
  UI helpers
*************************/
function buildCards(dataset) {
  cardsEl.innerHTML = dataset
    .map(
      ({
        label,
        sunrise,
        sunset,
        dawn,
        dusk,
        day_length,
        solar_noon,
        timezone,
      }) => `
      <article class="card" role="group" aria-label="${label} data">
        <h2>${label}</h2>
        <dl>
          <dt><i class="fa-solid fa-sun icon" aria-hidden="true"></i>Sunrise</dt> <dd>${sunrise}</dd>
          <dt><i class="fa-solid fa-cloud-sun icon" aria-hidden="true"></i>Dawn</dt>    <dd>${dawn}</dd>
          <dt><i class="fa-solid fa-moon icon" aria-hidden="true"></i>Sunset</dt>  <dd>${sunset}</dd>
          <dt><i class="fa-solid fa-cloud-moon icon" aria-hidden="true"></i>Dusk</dt>    <dd>${dusk}</dd>
          <dt>Day length</dt> <dd>${day_length}</dd>
          <dt>Solar noon</dt> <dd>${solar_noon}</dd>
          <dt>Time zone</dt>  <dd>${timezone}</dd>
        </dl>
      </article>`
    )
    .join("");
}

function placeholderCards() {
  return ["Today", "Tomorrow"]
    .map(
      (label) => `
      <article class="card" aria-busy="true" aria-label="${label} loading">
        <h2>${label}</h2>
        <p style="text-align:center">Loading…</p>
      </article>`
    )
    .join("");
}

function showError(msg) {
  errorMsg.textContent = msg;
  errorMsg.hidden = false;
  cardsEl.innerHTML = "";
}
function clearError() {
  errorMsg.hidden = true;
}
