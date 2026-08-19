const scenarios = [

{
title:"Scenario 1",
name:"Warehouse Needs Faster Printing",
img:"images/warehouse.jpg",
opening:"Our shipping label printer is too slow and keeps jamming.",
details:`
<h4>Hidden Background</h4>
<p>
3-shift logistics operation.
Downtime, poor barcode readability
and printer bottlenecks are the real issue.
</p>

<h4>Ideal Recommendation</h4>
<p>
TD-Series or TJ-Series.
Network-connected printers.
Vor-Ort Service Pack.
</p>
`
},

{
title:"Scenario 2",
name:"Electrician Replacement",
img:"images/electrician.jpg",
opening:"Can you get me the same handheld label printer I had before?",
details:`
<p>
PT-E Industrial Series
Flexible ID Tape
Heat-shrink Tubes
</p>
`
},

{
title:"Scenario 3",
name:"Retail Price Tags",
img:"images/retail.jpg",
opening:"What's your cheapest printer?",
details:`
<p>
QL-Series with DK labels.
Cross-sell stockroom labels and badges.
</p>
`
},

{
title:"Scenario 4",
name:"Healthcare Samples",
img:"images/healthcare.jpg",
opening:"We had a specimen labeling mix-up.",
details:`
<p>
TD-Series,
Resin ribbon,
b-PAC software integration.
</p>
`
},

{
title:"Scenario 5",
name:"Panel Builder",
img:"images/panelbuilder.jpg",
opening:"An auditor flagged inconsistent labels.",
details:`
<p>
PT-E800W,
Heat-shrink,
CSV import,
Shared templates.
</p>
`
},

{
title:"Scenario 6",
name:"Food Production",
img:"images/food-production.jpg",
opening:"Labels come off during wash down.",
details:`
<p>
TJ or TD Series,
Chemical Resistant labels,
Service Pack recommendation.
</p>
`
},

{
title:"Scenario 7",
name:"Server Room Labelling",
img:"images/server-room.jpg",
opening:"Nothing is labelled properly.",
details:`
<p>
PT-E plus asset tags.
Flexible ID Tape.
</p>
`
},

{
title:"Scenario 8",
name:"Field Service",
img:"images/field-service.jpg",
opening:"Technicians need mobile printing.",
details:`
<p>
RJ RuggedJet.
Bluetooth.
Spare battery.
</p>
`
},

{
title:"Scenario 9",
name:"Competitor Half Price",
img:"images/price-comparison.jpg",
opening:"Your competitor costs half as much.",
details:`
<p>
Focus on TCO,
Warranty,
Service,
Consumables,
Uptime.
</p>
`
},

{
title:"Scenario 10",
name:"Multi-Site Rollout",
img:"images/rollout.jpg",
opening:"We want to standardize across all sites.",
details:`
<p>
Portfolio recommendation.
Centralized templates.
Service Packs.
</p>
`
}

];

const container =
document.getElementById("scenarioGrid");

scenarios.forEach((s,index)=>{

container.innerHTML += `

<div class="scenario-card">

.img}">

<div class="scenario-content">

<h3>${s.title}</h3>

<h4>${s.name}</h4>

<p>${s.opening}</p>

<button onclick="toggle(${index})">

Show Facilitator Notes

</button>

<div id="detail-${index}"
class="details">

${s.details}

</div>

</div>

</div>

`;
});

function toggle(index){

const box =
document.getElementById(`detail-${index}`);

if(box.style.display === "block"){

box.style.display = "none";

}else{

box.style.display = "block";

}
}
