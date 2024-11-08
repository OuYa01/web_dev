<html>
    <head>
        <title>Exercice_3_Php</title>
        <meta http-equiv="Content-Type"content="text/html; charset=UTF-8"/>
    </head>

    <body>
        <h1>Exercice_3_Php</h1>
        <?php 
        //variable qui contient « Bonjour_tout_le_monde »
        $s = "Bonjour_tout_le_monde";
        //Retourner le caractere « j » fonction chr(nb)
        $j = chr(106);

        //Decouper la chaine et afficher chaque mot Explode
        $mots = explode("_", $s);
        echo "Les de la phrase est: \n";
        foreach($mots as $mot) //foreach: boucle we can use it when we have an array for each one on it
        {
            echo $mot;
            echo "\n";
        }


        //Retrourner le nombre de caractere de la chaine using strlen() function
        $size= strlen($s);
        printf("the length of this tsring is : $size \n");

        $mot = "Bonjour";
        //Inverser un mot 
        for ($i = strlen($mot) - 1; $i >= 0; $i--)
        {
            echo $mot[$i];
        }
        ?>
    </body>

</html>