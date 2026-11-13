let loot = [];

const button = document.getElementById('submitButton');
const nameInput = document.getElementById('nameInput');
const valueInput = document.getElementById('valueInput');
const displayMessage = document.getElementById('lootValue');
const validationMessage = document.getElementById('validationMessage');

button.addEventListener('click', function()
{
    let userInt = parseInt(valueInput.value);
    let lootValueTotal = 0;
    let buildingDisplayMessage = "";
    if (Number.isNaN(userInt))
    {
        validationMessage.innerHTML = "Error. Please enter an integer, and only that integer. "
    }
    else if (userInt < 0)
    {
        validationMessage.innerHTML = "Error. Please enter a positive integer. "
    }
    else if (nameInput.value === "")
    {
        validationMessage.innerHTML = "Error. Please enter a name for the loot. "
    }
    else
    {
        loot.push({name: nameInput.value, value: userInt});
        validationMessage.innerHTML = " "

        for (let i = 0; i < loot.length; i++)
        {
            lootValueTotal += loot[i].value;
        }
        for (let i = 0; i < loot.length; i++) //This needs to be 2 loops because of design specifications
        {
            buildingDisplayMessage += (`${loot[i].name}<br>`)
        }

        buildingDisplayMessage += `Total value of all loot: ${lootValueTotal}`;
        displayMessage.innerHTML =  buildingDisplayMessage;
    }
});

/*When using breakpoints, I observed that the contents of the array do not update until line 28 runs. 
The contents of the array remain exactly the same until that line runs, when the new object is then added.
The interface does not update until line 41 (on successful attempts) or lines 16, 20, or 24 (on unsuccessful attempts)
Whether the attempt was successful or not, the interface only updates once.*/ 