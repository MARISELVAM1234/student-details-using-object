var studentDetails = [
    {
        Photo:  "/image/1.jpeg",
        Name: "Mariselvam",
        Mobile: 8526089949,
        Batch: "FSD-10",
        Git: "https://github.com/MARISELVAM1234",
        RefferedBy: "Alphanse FSD-10",
        Location: "Pavoorchtram",
        PlacementStatus: "Not-started"
    },
    {
        Photo:  "/image/2.jpeg ",
        Name: "LeoWilson",
        Mobile: 7339212569,
        Batch: "FSD-10",
        Git: "https://github.com/Leowilson17",
        RefferedBy: "Samy FSD-4",
        Location: "Pavoorchtram",
        PlacementStatus: "Not-started"
    },
    {
        Photo:  "/image/3.jpeg",
        Name: "Alphanse",
        Mobile: 7418514775,
        Batch: "FSD-10",
        Git: "https://github.com/alphanse98",
        RefferedBy: "Blessy",
        Location: "Pavoorchtram",
        PlacementStatus: "Not-started"
    },
    {
        Photo:  "/image/4.jpeg",
        Name: "Chithiraivel",
        Mobile: 8682039296,
        Batch: "FSD-10",
        Git: "https://github.com/chithiraivel",
        RefferedBy: "Rahul FSD-10",
        Location: "Pavoorchtram",
        PlacementStatus: "Not-started"
    },
    {
        Photo:  "/image/5.jpeg ",
        Name: "MuthuKumar",
        Mobile: 6374280764,
        Batch: "FSD-10",
        Git: "https://github.com/anikumarm123",
        RefferedBy: "Mani",
        Location: "Pavoorchtram",
        PlacementStatus: "Not-started"
    },
    {
        Photo:  "/image/6.jpeg",
        Name: "Rahul",
        Mobile: 7010068320,
        Batch: "FSD-10",
        Git: "https://github.com/rahulmahi",
        RefferedBy: "Mani",
        Location: "Pavoorchtram",
        PlacementStatus: "Not-started"
    }
]

var tableElement = document.createElement("table");
var bodyElement = document.querySelector("body");
function tableHeadFunc(primaryText, SecondaryText, thirdryText, fourthText, fifth, sixth, seventh, eighth) {
    var rowElement = document.createElement("tr");
    tableElement.append(rowElement);
    var headElement = document.createElement("th");
    headElement.textContent = primaryText;
    var headElement2 = document.createElement('th');
    headElement2.textContent = SecondaryText;
    var headElement3 = document.createElement('th');
    headElement3.textContent = thirdryText;
    var headElement4 = document.createElement('th');
    headElement4.textContent = fourthText;
    var headElement5 = document.createElement('th');
    headElement5.textContent = fifth;
    var headElement6 = document.createElement('th');
    headElement6.textContent = sixth;
    var headElement7 = document.createElement('th');
    headElement7.textContent = seventh;
    var headElement8 = document.createElement('th');
    headElement8.textContent = eighth;

    rowElement.append(headElement, headElement2, headElement3, headElement4, headElement5, headElement6, headElement7, headElement8);

    bodyElement.append(tableElement);
    console.log(tableElement);
}
tableHeadFunc("photo", "Name", "Mobile", "Batch", "Git", "Reffered by", "Location", "Placement Status");


for (var i = 0; i < studentDetails.length; i++) {
    var rowElement2 = document.createElement("tr");
    for (var j = 0; j < Object.keys(studentDetails[i]).length; j++) {
        if (j == 1) {
              var imgElement = document.createElement("img") ;
               imgElement.setAttribute("src" , studentDetails[i].Photo);
               createDataElement.append(imgElement);
        }
        if (j == 5) {
            var anchorElement = document.createElement("a");
            anchorElement.setAttribute("href", studentDetails[i].Git);
            anchorElement.setAttribute("target", "blank");
            anchorElement.textContent = "Link";
            createDataElement.append(anchorElement);
        }

        var dataElement = ["", studentDetails[i].Name, studentDetails[i].Mobile, studentDetails[i].Batch, "", studentDetails[i].RefferedBy, studentDetails[i].Location, studentDetails[i].PlacementStatus]

        var createDataElement = document.createElement("td");
        createDataElement.textContent = dataElement[j];
        rowElement2.append(createDataElement);
        //  console.log(rowElement2);
        tableElement.append(rowElement2);
    }
}
