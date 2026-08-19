document.getElementById("title").innerText =
workshop.title;

document.getElementById("subtitle").innerText =
workshop.subtitle;

const menu =
document.getElementById("menu");

const content =
document.getElementById("content");

workshop.sections.forEach((section,index)=>{

    const sectionId =
    "section-" + index;

    menu.innerHTML += `
        <li>
            Id}">
                ${section.title}
            </a>
        </li>
    `;

    if(section.type === "text"){

        content.innerHTML += `
            <div class="card" id="${sectionId}">
                <h2>${section.title}</h2>
                <p>${section.content}</p>
            </div>
        `;
    }

    if(section.type === "table"){

        let html = `
        <div class="card" id="${sectionId}">
            <h2>${section.title}</h2>

            <table>

            <tr>
        `;

        section.headers.forEach(header=>{

            html += `<th>${header}</th>`;

        });

        html += `</tr>`;

        section.rows.forEach(row=>{

            html += "<tr>";

            row.forEach(cell=>{

                html += `<td>${cell}</td>`;

            });

            html += "</tr>";

        });

        html += `
            </table>
        </div>
        `;

        content.innerHTML += html;
    }

    if(section.type === "scenario"){

        let media = "";

        if(section.image){

            media = `
                ${section.image}
            `;
        }

        if(section.video){

            media = `
                <video controls>
                    ${section.video}
                </video>
            `;
        }

        content.innerHTML += `

        <div class="card" id="${sectionId}">

            ${media}

            <h2>${section.title}</h2>

            <h3>Customer Opening Line</h3>

            <p>${section.customer}</p>

            <button onclick="toggleNotes(${index})">

                Show Facilitator Notes

            </button>

            <div
            id="notes-${index}"
            class="hidden-notes">

                ${section.facilitator}

            </div>

        </div>

        `;
    }

});

function toggleNotes(index){

    const box =
    document.getElementById(
        "notes-" + index
    );

    if(box.style.display === "block"){

        box.style.display = "none";

    } else {

        box.style.display = "block";

    }
}
