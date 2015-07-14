$(function () {

    var contacts = [
        { id: 1, name: "Ori" },
        { id: 2, name: "Roni" }
    ];

    var ul = $(".contacts");
    var buttonAdd = $(".buttonAdd");
    var inputName = $(".inputName");
    var inputFile = $("input[type=file]");
    var buttonBrowse = $(".buttonBrowse");

    buttonBrowse.click(function () {
        inputFile.trigger("click");
    });

    inputFile.on("change", function (e) {
        if (!e.target.files.length) {
            return;
        }

        var file = e.target.files[0];
        console.log(file);
    });

    updateUI();

    buttonAdd.on("click", function () {
        var name = inputName.val();
        if (!name) {
            alert("Please specify a name");
            return;
        }

        var contact = {
            id: -1,
            name: name,
        };

        contacts.push(contact);

        updateUI();
    });

    function findIndex(contactId) {
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i].id == contactId) {
                return i;
            }
        }

        return -1;
    }

    function buttonDelete_Click() {
        var button = $(this);

        //alert(button.attr("data-contactId"));
        var contactId = button.closest("li").data("contactId");

        var index = findIndex(contactId);
        if (index != -1) {
            contacts.splice(index, 1);
        }

        updateUI();
    }

    function updateUI() {
        ul.empty();

        contacts.forEach(function (contact) {
            var li = $("<li/ >");
            li.text(contact.name);
            li.data("contactId", contact.id);
            ul.append(li);

            var button = $("<button>Delete</button>");
            //button.attr("data-contactId", contact.id);

            li.append(button);
            button.click(buttonDelete_Click);
        });

        //$("a");

        //$(".header").find("a")
    }
});
