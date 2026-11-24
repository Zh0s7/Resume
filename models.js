const projects = [
  {
    title: 'Otis Dynamics', category: 'ROBOTICS RESEARCH', anchor: 'otis-dynamics',
    description: 'An illustrative mobile manipulator showing the wheeled base, sensing head, team-built arm, and magnetic tactile-sensing research.',
    parts: [
      ['Mobile base', 'My primary individual ownership covers low-level firmware, BLDC controller integration, and drivetrain bring-up before higher-level robotics integration.'],
      ['Perception', 'The team platform incorporates LiDAR, depth cameras, ROS 2 navigation research, and RViz visualization.'],
      ['Arm & hand', 'The team collaboratively developed the arm and hand. I assisted with development and integration. Primary design ownership belongs to other team members.'],
      ['Tactile research', 'I am investigating magnets and magnetic-field sensors within soft grippers to estimate grasp state and detect slip. Validation and robot integration remain outstanding.'],
    ],
    scene: '<path class="diagram-ground" d="M241 408h238M260 415h202"/>\
      <g class="diagram-part" data-part="0">\
      <rect class="wheel" x="258" y="337" width="34" height="65" rx="10"/><rect class="wheel" x="415" y="337" width="34" height="65" rx="10"/>\
      <path class="hardware" d="M281 333h145l17 40H266z"/><rect class="hardware-accent" x="302" y="347" width="103" height="33" rx="8"/>\
      <path class="hardware-detail" d="M320 355v17m16-17v17m17-17v17m17-17v17m17-17v17"/><path class="wire" d="M315 331v-28h38v-43"/>\
      <path class="connector" d="M224 350h31"/><rect class="callout" x="22" y="316" width="202" height="79" rx="10"/>\
      <text class="diagram-text" x="38" y="344">Mobile base</text><text class="diagram-small" x="38" y="369">Firmware + BLDC control</text></g>\
      <path class="hardware" d="M322 166h60v158h-60zM309 266h88v62h-88z"/><path class="hardware-detail" d="M332 181h40m-40 17h40m-40 17h40m-40 17h40"/>\
      <g class="diagram-part" data-part="1">\
      <rect class="hardware-accent" x="304" y="104" width="98" height="58" rx="15"/><circle class="lens" cx="331" cy="133" r="10"/><circle class="lens" cx="375" cy="133" r="10"/>\
      <path class="hardware-detail" d="M328 104V86h50v18"/><ellipse class="hardware-accent" cx="353" cy="84" rx="29" ry="9"/>\
      <path class="scan" d="M300 77q53-45 106 0m-118-11q65-59 130 0"/><path class="connector" d="M224 114h78"/>\
      <rect class="callout" x="22" y="77" width="202" height="77" rx="10"/><text class="diagram-text" x="38" y="106">Perception</text><text class="diagram-small" x="38" y="132">LiDAR + depth camera</text></g>\
      <g class="diagram-part" data-part="2">\
      <path class="arm-outline" d="M384 193l58 54 43-66"/><path class="arm-inner" d="M384 193l58 54 43-66"/>\
      <circle class="joint" cx="384" cy="193" r="15"/><circle class="joint" cx="442" cy="247" r="15"/><circle class="joint" cx="485" cy="181" r="12"/>\
      <path class="gripper" d="M485 170l-12-20 13-13m0 33 13-20-2-14"/><path class="connector" d="M457 247h37v-13h29"/>\
      <rect class="callout" x="523" y="202" width="176" height="78" rx="10"/><text class="diagram-text" x="539" y="231">Arm &amp; hand</text><text class="diagram-small" x="539" y="256">Team-developed</text></g>\
      <g class="diagram-part research" data-part="3"><path class="connector" d="M492 133l45-33"/>\
      <rect class="callout" x="523" y="39" width="176" height="79" rx="10"/><text class="diagram-text" x="539" y="67">Tactile sensing</text><text class="diagram-small" x="539" y="93">Ongoing research</text>\
      <circle class="research-zone" cx="486" cy="148" r="28"/></g>\
      <rect class="software-strip" x="171" y="435" width="378" height="31" rx="8"/><text class="diagram-small" text-anchor="middle" x="360" y="456">ROS 2 · Navigation research · RViz</text>',
  },
  {
    title: 'FulfillAI', category: 'WAREHOUSE SIMULATION', anchor: 'fulfillai',
    description: 'A warehouse floor with shelves and robot routes, connected to a planning engine, persistent backend, and 3D operations dashboard.',
    parts: [
      ['Warehouse', 'Inventory reservation, pickup, transport, and delivery connect to order completion. A documented scenario completed 200 orders using 100 robots in 764 ticks.'],
      ['Planning engine', 'Python discrete ticks, custom A* pathfinding, task allocation, and space-time reservations coordinate robots and warehouse tasks.'],
      ['Persistent backend', 'FastAPI and PostgreSQL hold authoritative state. Redis Streams and a transactional outbox support event processing and recovery.'],
      ['3D dashboard', 'React, TypeScript, and Three.js visualize robots, inventory, orders, and operational state. Development used AI assistance.'],
    ],
    scene: '<g class="diagram-part" data-part="0">\
      <rect class="warehouse-floor" x="27" y="92" width="355" height="325" rx="14"/>\
      <path class="floor-grid" d="M27 157h355M27 222h355M27 287h355M27 352h355M98 92v325m71-325v325m71-325v325m71-325v325"/>\
      <text class="diagram-text" x="43" y="63">Warehouse floor</text>\
      <g class="shelves"><rect x="57" y="122" width="76" height="56" rx="4"/><path d="M57 150h76m-51-28v56m25-56v56"/>\
      <rect x="161" y="122" width="76" height="56" rx="4"/><path d="M161 150h76m-51-28v56m25-56v56"/>\
      <rect x="265" y="122" width="76" height="56" rx="4"/><path d="M265 150h76m-51-28v56m25-56v56"/>\
      <rect x="57" y="246" width="76" height="56" rx="4"/><path d="M57 274h76m-51-28v56m25-56v56"/>\
      <rect x="265" y="246" width="76" height="56" rx="4"/><path d="M265 274h76m-51-28v56m25-56v56"/></g>\
      <path class="route" d="M95 212h104v122h104v42"/><path class="route-alt" d="M303 212H199v-17"/>\
      <g class="warehouse-robot" transform="translate(82 199)"><rect width="27" height="26" rx="7"/><circle cx="7" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><path d="M5 26v5m17-5v5"/></g>\
      <g class="warehouse-robot" transform="translate(186 316)"><rect width="27" height="26" rx="7"/><circle cx="7" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><path d="M5 26v5m17-5v5"/></g>\
      <g class="warehouse-robot" transform="translate(290 199)"><rect width="27" height="26" rx="7"/><circle cx="7" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><path d="M5 26v5m17-5v5"/></g>\
      <rect class="delivery" x="265" y="366" width="78" height="33" rx="6"/><text class="diagram-small" x="276" y="388">Delivery</text>\
      <text class="diagram-small" x="42" y="442">Shelves · routes · fulfillment</text></g>\
      <g class="diagram-part" data-part="1"><path class="connector directed" d="M432 137h-42"/>\
      <rect class="callout" x="432" y="86" width="263" height="96" rx="12"/><text class="diagram-text" x="450" y="117">Planning engine</text>\
      <text class="diagram-small" x="450" y="143">A* + space-time reservations</text><text class="diagram-small" x="450" y="165">Task allocation · discrete ticks</text></g>\
      <g class="diagram-part" data-part="2"><path class="connector directed" d="M565 190v35"/><path class="connector" d="M382 270h50"/>\
      <rect class="callout" x="432" y="232" width="263" height="94" rx="12"/><text class="diagram-text" x="450" y="262">Persistent state</text>\
      <text class="diagram-small" x="450" y="287">FastAPI + PostgreSQL</text><text class="diagram-small" x="450" y="309">Redis Streams + outbox</text></g>\
      <g class="diagram-part" data-part="3"><path class="connector directed" d="M565 334v35"/>\
      <rect class="callout" x="432" y="376" width="263" height="77" rx="12"/><text class="diagram-text" x="450" y="405">3D operations dashboard</text>\
      <text class="diagram-small" x="450" y="432">React · TypeScript · Three.js</text></g>',
  },
  {
    title: 'AWD Electric Go-Kart', category: 'ELECTRONICS FUNCTIONAL', anchor: 'go-kart',
    description: 'An illustrative top view showing four independent wheel drives, four controllers, Teensy control signals, and power distribution. Dashed outlines identify pending work.',
    parts: [
      ['Four wheel drives', 'Four 6.5-inch hoverboard BLDC hub motors use four independent ZS-X11H controllers. Electronics function, while vehicle-level mechanical integration remains pending.'],
      ['Teensy 4.0', 'I independently developed and tested firmware for speed, direction, and electronic braking. Lavender lines show control relationships with the four controllers.'],
      ['36 V power', 'A 36 V lithium-ion power system supplies the motor controllers. Coral lines show power distribution schematically.'],
      ['Planned control', 'Steering sensing and mechanical integration are in development. Independent torque vectoring and a custom VCU PCB are planned, with vehicle-level validation still outstanding.'],
    ],
    scene: '<text class="diagram-small" text-anchor="middle" x="360" y="41">Top view · electrical architecture</text>\
      <path class="chassis-pending" d="M252 79h216l26 322H226z"/><path class="steering-pending" d="M315 106h90m-45 0v52"/>\
      <text class="diagram-small" text-anchor="middle" x="360" y="433">Chassis &amp; steering integration pending</text>\
      <g class="diagram-part" data-part="0">\
      <rect class="wheel" x="191" y="110" width="37" height="75" rx="12"/><rect class="wheel" x="492" y="110" width="37" height="75" rx="12"/>\
      <rect class="wheel" x="191" y="321" width="37" height="75" rx="12"/><rect class="wheel" x="492" y="321" width="37" height="75" rx="12"/>\
      <path class="axle" d="M228 148h39m186 0h39M228 358h39m186 0h39"/>\
      <rect class="controller" x="266" y="135" width="47" height="29" rx="5"/><rect class="controller" x="407" y="135" width="47" height="29" rx="5"/>\
      <rect class="controller" x="266" y="345" width="47" height="29" rx="5"/><rect class="controller" x="407" y="345" width="47" height="29" rx="5"/>\
      <path class="connector" d="M168 134h22"/><rect class="callout" x="15" y="93" width="153" height="83" rx="10"/>\
      <text class="diagram-text" x="29" y="121">4 wheel drives</text><text class="diagram-small" x="29" y="146">4 controllers</text><text class="diagram-small" x="29" y="165">ZS-X11H</text></g>\
      <g class="diagram-part" data-part="1"><path class="wire" d="M330 233h-41v-63m102 63h40v-63M330 250h-41v89m102-89h40v89"/>\
      <rect class="pcb" x="310" y="218" width="101" height="49" rx="7"/><rect class="chip" x="343" y="228" width="34" height="28" rx="3"/>\
      <path class="pcb-pins" d="M320 213v8m14-8v8m14-8v8m14-8v8m14-8v8m14-8v8M320 265v8m14-8v8m14-8v8m14-8v8m14-8v8m14-8v8"/>\
      <path class="connector" d="M418 243h118"/><rect class="callout" x="536" y="205" width="170" height="77" rx="10"/>\
      <text class="diagram-text" x="550" y="235">Teensy 4.0</text><text class="diagram-small" x="550" y="261">Motor commands</text></g>\
      <g class="diagram-part" data-part="2"><path class="power-wire" d="M325 318v-21h-65V185h29v-15m-29 127v42h29m107-21v-21h65V185h-30v-15m30 127v42h-30"/>\
      <rect class="battery" x="318" y="310" width="88" height="64" rx="8"/><path class="battery-mark" d="M345 325v12m-6-6h12m27 0h12"/>\
      <text class="diagram-text" text-anchor="middle" x="362" y="361">36 V</text><path class="connector" d="M170 281h70v58h70"/>\
      <rect class="callout" x="15" y="248" width="155" height="72" rx="10"/><text class="diagram-text" x="29" y="277">Power supply</text><text class="diagram-small" x="29" y="302">Lithium-ion · 36 V</text></g>\
      <g class="diagram-part research" data-part="3"><path class="connector" d="M536 358h-29v-69H409"/>\
      <rect class="callout" x="536" y="321" width="170" height="80" rx="10"/><text class="diagram-text" x="550" y="349">Torque vectoring</text><text class="diagram-small" x="550" y="376">Planned control</text></g>\
      <path class="wire" d="M28 462h32"/><text class="diagram-small" x="70" y="468">Control</text>\
      <path class="power-wire" d="M211 462h32"/><text class="diagram-small" x="253" y="468">Power</text>\
      <path class="chassis-pending" d="M402 462h32"/><text class="diagram-small" x="444" y="468">Pending work</text>',
  },
];

const viewer = document.querySelector('.viewer');
const model = viewer.querySelector('.model');
const scene = model.querySelector('.diagram-scene');
const picker = [...viewer.querySelectorAll('[data-model]')];
const parts = viewer.querySelector('.parts');
const note = viewer.querySelector('.part-note');
const caseLink = viewer.querySelector('.case-link');
let project;

function selectPart(index) {
  [...parts.children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  scene.querySelectorAll('[data-part]').forEach(group => group.setAttribute('aria-pressed', String(Number(group.dataset.part) === index)));
  note.textContent = project.parts[index][1];
}

function selectProject(index) {
  project = projects[index];
  picker.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  viewer.querySelector('.model-heading').textContent = project.title;
  viewer.querySelector('.model-category').textContent = project.category;
  model.querySelector('title').textContent = project.title + ' system overview';
  model.querySelector('desc').textContent = project.description;
  scene.innerHTML = project.scene;
  caseLink.href = 'projects/' + project.anchor + '.html';
  parts.replaceChildren(...project.parts.map(([name], i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = name;
    button.addEventListener('click', () => selectPart(i));
    return button;
  }));
  scene.querySelectorAll('[data-part]').forEach(group => {
    const index = Number(group.dataset.part);
    group.setAttribute('role', 'button');
    group.setAttribute('tabindex', '0');
    group.setAttribute('aria-label', project.parts[index][0]);
    group.addEventListener('click', () => selectPart(index));
    group.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectPart(index);
      }
    });
  });
  selectPart(0);
}

picker.forEach((button, index) => button.addEventListener('click', () => selectProject(index)));
viewer.hidden = false;
selectProject(0);
