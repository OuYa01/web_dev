<html>
    <head>
        <title>Exercice_9_Php</title>
        <meta http-equiv="Content-Type"content="text/html; charset=UTF-8"/>
    </head>

    <body>
        <h1>Exercice_9_Php</h1>
        <?php 
            //boucle qui affiche « bonjour » 10 fois
            for ($i = 0; $i < 10; $i++)
            {
                echo "bonjour\n";
            }

            //boucle qui affiche les nombres de 1 a 10
            $i = 1;
            while ($i <= 10)
            {
                echo "$i  ";
                $i++;
            }
            echo "\n";

            //Par exemple, pour calculer le factoriel de 5
            $fact = 1;
            for($i = 5; $i >= 1; $i--)
            {
                $fact *= $i;
            }
            echo "le factorial de 5 est : $fact\n"
        ?>
    </body>

</html>