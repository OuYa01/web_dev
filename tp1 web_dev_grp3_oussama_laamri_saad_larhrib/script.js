function choosePlat(type, nb)
{
    let a = document.getElementById(type);

    let v = a.value
    if (v === "aucun")
    {
        document.getElementById(nb).value = 0
    }
    else
    {
        document.getElementById(nb).value = 1
    }


}

function Facture()
{

    let entree = document.getElementById('entree').value;
    let nbEntree = parseInt(document.getElementById('nb1').value);

    let principal = document.getElementById('principal').value;
    let nbPrincipal = parseInt(document.getElementById('nb2').value);

    let dessert = document.getElementById('desert').value;
    let nbDessert = parseInt(document.getElementById('nb3').value);

    const tarifs = {
        aucun: 0,
        djaj: 90,
        bstila: 150,
        rfisa: 50,
        hrgma: 70,
        cake: 20,
        tiramisu: 20,
        harira: 20,
        tortilla: 20,
        salad: 15,
        mousse: 30,
        gateu: 10,
    };


    let totalEntree = tarifs[entree] * nbEntree;
    let totalPrincipal = tarifs[principal] * nbPrincipal;
    let totalDessert = tarifs[dessert] * nbDessert;

    let totalGeneral = totalEntree + totalPrincipal + totalDessert;

    let factureTable = `
        <table border="1" style="width: 100%; text-align: left; border-collapse: collapse;">
            <thead>
                <tr>
                    <th>Plat</th>
                    <th>Prix Unitaire (Dh)</th>
                    <th>Nombre de Personnes</th>
                    <th>Total (Dh)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Entrée (${entree})</td>
                    <td>${tarifs[entree]} Dh</td>
                    <td>${nbEntree}</td>
                    <td>${totalEntree} Dh</td>
                </tr>
                <tr>
                    <td>Plat Principal (${principal})</td>
                    <td>${tarifs[principal]} Dh</td>
                    <td>${nbPrincipal}</td>
                    <td>${totalPrincipal} Dh</td>
                </tr>
                <tr>
                    <td>Dessert (${dessert})</td>
                    <td>${tarifs[dessert]} Dh</td>
                    <td>${nbDessert}</td>
                    <td>${totalDessert} Dh</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3" style="text-align: right;"><strong>Total Général</strong></td>
                    <td><strong>${totalGeneral} Dh</strong></td>
                </tr>
            </tfoot>
        </table>
    `;

    document.getElementById('facture-container').innerHTML = factureTable;
}



