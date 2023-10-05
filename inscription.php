<?php
$con=new mysqli('localhost','root','','inscription');
if($con-> connect_error){
    die("erreur de conexion");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $sex = $_POST["gender"];
    $num = $_POST["num"];
    $nump = $_POST["nump"];
    $numm = $_POST["numm"];
    $cin = $_POST["cin"];
    $masar= $_POST["masar"];    
    $email = $_POST["email"];
    $classe = $_POST["classe"];
    $date = $_POST["date"];

    $date1 = new DateTime($date);
$formattedDate = $date1->format('Y-m-d');
  
    $sql = "INSERT INTO form (`nom`, `prenom`, `sex`, `num`, `nump`, `numm`, `cin`, `masar`, `date`, `classe`, `email`) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
  
    $stmt = $con->prepare($sql);
    $stmt->bind_param("sssiiisssss",  $nom, $prenom, $sex, $num, $nump, $numm, $cin, $masar, $email, $classe, $formattedDate );
    
    if ($stmt->execute()) {
        ?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="button.css">
        </head>
        <body>
            <a href="./inscription.html" target="_blank" rel="noopener noreferrer">
            <button class="button" role="button">Value stored successfully</button>
            </a>
        </body>
        </html>
        <?php
    } else {
        echo "Error: " . $stmt->error;
    }
  
    $stmt->close();
  }

  ?>